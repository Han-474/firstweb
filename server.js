// 河南师范大学教务网络管理系统 - 后端服务（纯 Node.js 无第三方依赖）
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const data = require('./data');

const PORT = process.env.PORT || 3000;
const S = data.SCHOOL;

// —— 内存数据（可变状态）——
const store = {
  currentStudent: JSON.parse(JSON.stringify(data.currentStudent)),
  myCourses: data.myCourses.map(c => ({ ...c })),
  availableCourses: data.availableCourses.map(c => ({ ...c })),
  grades: data.grades.map(g => ({ ...g })),
  exams: data.exams.map(e => ({ ...e })),
  examRegistrations: data.examRegistrations.map(r => ({ ...r })),
  activities: data.activities.map(a => ({ ...a })),
  evaluationCourses: data.evaluationCourses.map(e => ({ ...e })),
  notices: data.notices.map(n => ({ ...n })),
  studentList: data.studentList.map(s => ({ ...s })),
  teacherList: data.teacherList.map(t => ({ ...t })),
  teacher: { ...data.teacher },
  admin: { ...data.admin },
  teacherGradeEntries: [],
};

const tokens = new Map(); // token -> { userId, role }

// —— 工具函数 ——
function json(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => { raw += chunk; if (raw.length > 1e6) req.destroy(); });
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : {}); } catch { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

function auth(req, res) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : header;
  if (!token || !tokens.has(token)) return null;
  const info = tokens.get(token);
  return info;
}

function getRoleUser(info) {
  if (!info) return null;
  if (info.role === 'student') return store.currentStudent;
  if (info.role === 'teacher') return store.teacher;
  if (info.role === 'admin') return store.admin;
  return null;
}

function publicUser(u) {
  if (!u) return null;
  return {
    id: u.id, username: u.username, name: u.name, role: u.role,
    avatarColor: u.avatarColor, college: u.college, major: u.major,
    grade: u.grade, className: u.className, title: u.title,
  };
}

// 绩点计算（4.0 制）
function gpaOf(score) {
  if (score >= 90) return 4.0;
  if (score >= 85) return 3.7;
  if (score >= 82) return 3.3;
  if (score >= 78) return 3.0;
  if (score >= 75) return 2.7;
  if (score >= 72) return 2.3;
  if (score >= 68) return 2.0;
  if (score >= 64) return 1.5;
  if (score >= 60) return 1.0;
  return 0;
}

function studentSummary() {
  const grades = store.grades;
  const totalCredits = grades.reduce((s, g) => s + g.credit, 0);
  const weighted = grades.reduce((s, g) => s + gpaOf(g.score) * g.credit, 0);
  const avgScore = grades.length ? (grades.reduce((s, g) => s + g.score, 0) / grades.length) : 0;
  const gpa = totalCredits ? (weighted / totalCredits) : 0;
  const terms = [...new Set(grades.map(g => g.term))].sort();
  const passing = grades.filter(g => g.score >= 60).length;
  const selectedCount = store.currentStudent.selectedCourseIds.length;
  const regCount = store.examRegistrations.filter(r => r.registered).length;
  const actCount = store.activities.filter(a => a.registered).length;
  return {
    name: store.currentStudent.name,
    grade: store.currentStudent.grade,
    major: store.currentStudent.major,
    college: store.currentStudent.college,
    avgScore: avgScore.toFixed(1),
    gpa: gpa.toFixed(2),
    totalCredits: grades.reduce((s, g) => s + g.credit, 0).toFixed(1),
    requiredCredits: store.currentStudent.profile.requiredCredits,
    passRate: Math.round((passing / grades.length) * 100),
    myCourseCount: store.myCourses.length + selectedCount,
    regCount, actCount,
    termCount: terms.length,
    trend: termTrend(),
  };
}

function termTrend() {
  const byTerm = {};
  store.grades.forEach(g => { (byTerm[g.term] = byTerm[g.term] || []).push(g.score); });
  return Object.keys(byTerm).sort().map(term => ({
    term,
    avg: (byTerm[term].reduce((s, v) => s + v, 0) / byTerm[term].length).toFixed(1),
  }));
}

// —— API 路由 ——
const api = {
  async 'GET /api/health'(req, res) {
    return json(res, 200, { ok: true, status: 'up', time: new Date().toISOString() });
  },

  async 'POST /api/login'(req, res, body) {
    const { username, password } = body || {};
    if (!username || !password) return json(res, 400, { ok: false, msg: '请输入账号和密码' });
    let user = null;
    if (username === store.currentStudent.username && password === store.currentStudent.password) user = store.currentStudent;
    else if (username === store.teacher.username && password === store.teacher.password) user = store.teacher;
    else if (username === store.admin.username && password === store.admin.password) user = store.admin;
    if (!user) return json(res, 401, { ok: false, msg: '账号或密码错误' });
    const token = crypto.randomUUID();
    tokens.set(token, { userId: user.id, role: user.role });
    return json(res, 200, { ok: true, token, user: publicUser(user) });
  },

  async 'POST /api/logout'(req, res) {
    const info = auth(req);
    const header = req.headers['authorization'] || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : header;
    if (token) tokens.delete(token);
    return json(res, 200, { ok: true });
  },

  async 'GET /api/me'(req, res) {
    const info = auth(req);
    if (!info) return json(res, 401, { ok: false, msg: '未登录' });
    const user = getRoleUser(info);
    return json(res, 200, { ok: true, user: publicUser(user) });
  },

  async 'POST /api/password'(req, res, body) {
    const info = auth(req);
    if (!info) return json(res, 401, { ok: false, msg: '未登录' });
    const user = getRoleUser(info);
    const { oldPass, newPass } = body || {};
    if (user.password !== oldPass) return json(res, 400, { ok: false, msg: '原密码不正确' });
    if (!newPass || newPass.length < 6) return json(res, 400, { ok: false, msg: '新密码至少6位' });
    user.password = newPass;
    return json(res, 200, { ok: true, msg: '密码修改成功' });
  },

  // 学生模块
  async 'GET /api/summary'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: studentSummary(), school: { name: S.name, motto: S.motto } });
  },

  async 'GET /api/profile'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.currentStudent.profile });
  },

  async 'GET /api/schedule'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    const extra = store.availableCourses.filter(c => store.currentStudent.selectedCourseIds.includes(c.id));
    const all = [...store.myCourses, ...extra.map(c => ({ ...c, note: '已选' }))];
    return json(res, 200, { ok: true, data: all });
  },

  async 'GET /api/grades'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    const term = (req.url.split('term=')[1] || '').split('&')[0];
    let list = store.grades;
    if (term && term !== '全部') list = list.filter(g => g.term === decodeURIComponent(term));
    const terms = [...new Set(store.grades.map(g => g.term))].sort().reverse();
    return json(res, 200, { ok: true, data: list, terms });
  },

  async 'GET /api/exams'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.exams });
  },

  async 'GET /api/course-selection'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    const selectedIds = store.currentStudent.selectedCourseIds;
    const selected = store.availableCourses.filter(c => selectedIds.includes(c.id));
    return json(res, 200, {
      ok: true,
      data: {
        available: store.availableCourses.map(c => ({ ...c, selected: selectedIds.includes(c.id) })),
        selected,
        totalCredits: store.myCourses.reduce((s, c) => s + c.credit, 0) + selected.reduce((s, c) => s + c.credit, 0),
      },
    });
  },

  async 'POST /api/course-selection/select'(req, res, body) {
    const info = auth(req);
    if (!info || info.role !== 'student') return json(res, 401, { ok: false, msg: '未登录' });
    const { courseId } = body || {};
    const course = store.availableCourses.find(c => c.id === courseId);
    if (!course) return json(res, 404, { ok: false, msg: '课程不存在' });
    if (store.currentStudent.selectedCourseIds.includes(courseId)) return json(res, 400, { ok: false, msg: '已选过该课程' });
    if (course.enrolled >= course.capacity) return json(res, 400, { ok: false, msg: '该课程已满员' });
    store.currentStudent.selectedCourseIds.push(courseId);
    course.enrolled += 1;
    return json(res, 200, { ok: true, msg: `选课成功：${course.name}` });
  },

  async 'POST /api/course-selection/drop'(req, res, body) {
    const info = auth(req);
    if (!info || info.role !== 'student') return json(res, 401, { ok: false, msg: '未登录' });
    const { courseId } = body || {};
    const idx = store.currentStudent.selectedCourseIds.indexOf(courseId);
    if (idx === -1) return json(res, 400, { ok: false, msg: '未选择该课程' });
    store.currentStudent.selectedCourseIds.splice(idx, 1);
    const course = store.availableCourses.find(c => c.id === courseId);
    if (course) course.enrolled -= 1;
    return json(res, 200, { ok: true, msg: '退课成功' });
  },

  async 'GET /api/exam-registration'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.examRegistrations });
  },

  async 'POST /api/exam-registration/:id'(req, res, body, params) {
    const info = auth(req);
    if (!info) return json(res, 401, { ok: false });
    const item = store.examRegistrations.find(r => r.id === params.id);
    if (!item) return json(res, 404, { ok: false });
    if (item.status !== '报名中') return json(res, 400, { ok: false, msg: '当前不在报名时间内' });
    const { action } = body || {};
    if (action === 'cancel') { item.registered = false; return json(res, 200, { ok: true, msg: '已取消报名' }); }
    item.registered = true;
    return json(res, 200, { ok: true, msg: `报名成功：${item.examName}` });
  },

  async 'GET /api/activities'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.activities });
  },

  async 'POST /api/activities/:id'(req, res, body, params) {
    const info = auth(req);
    if (!info) return json(res, 401, { ok: false });
    const item = store.activities.find(a => a.id === params.id);
    if (!item) return json(res, 404, { ok: false });
    const { action } = body || {};
    if (action === 'cancel') { item.registered = false; if (item.enrolled > 0) item.enrolled -= 1; return json(res, 200, { ok: true, msg: '已取消报名' }); }
    if (item.registered) return json(res, 400, { ok: false, msg: '已报名该活动' });
    if (item.enrolled >= item.capacity) return json(res, 400, { ok: false, msg: '活动名额已满' });
    item.registered = true; item.enrolled += 1;
    return json(res, 200, { ok: true, msg: `报名成功：${item.name}` });
  },

  async 'GET /api/evaluation'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.evaluationCourses });
  },

  async 'POST /api/evaluation'(req, res, body) {
    const info = auth(req);
    if (!info) return json(res, 401, { ok: false });
    const { id, scores } = body || {};
    const course = store.evaluationCourses.find(e => e.id === id);
    if (!course) return json(res, 404, { ok: false });
    const total = Object.values(scores || {}).reduce((s, v) => s + Number(v), 0) / Math.max(1, Object.keys(scores || {}).length);
    course.evaluated = true;
    course.myScore = total;
    return json(res, 200, { ok: true, msg: `已提交《${course.courseName}》教学评价，感谢参与` });
  },

  // 通知
  async 'GET /api/notices'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.notices });
  },

  // 教师端
  async 'GET /api/teacher/dashboard'(req, res) {
    const info = auth(req);
    if (!info || info.role !== 'teacher') return json(res, 401, { ok: false });
    const courses = store.myCourses.filter(c => c.teacher.startsWith(store.teacher.name));
    const entries = store.teacherGradeEntries;
    return json(res, 200, {
      ok: true,
      data: {
        name: store.teacher.name, title: store.teacher.title, college: store.teacher.college,
        courseCount: courses.length,
        studentCount: 58,
        evaluationAvg: 4.6,
        courses: courses.map(c => ({ id: c.id, name: c.name, code: c.code, credit: c.credit, time: `周${['一','二','三','四','五','六','日'][c.weekday-1]} 第${c.start}-${c.end}节`, location: c.location })),
        entries,
      },
    });
  },

  async 'POST /api/teacher/grade'(req, res, body) {
    const info = auth(req);
    if (!info || info.role !== 'teacher') return json(res, 401, { ok: false });
    const { courseId, sno, score } = body || {};
    if (!courseId || !sno || score == null) return json(res, 400, { ok: false, msg: '参数不完整' });
    store.teacherGradeEntries.push({ courseId, sno, score: Number(score), time: new Date().toISOString().slice(0, 10) });
    return json(res, 200, { ok: true, msg: `已录入 ${sno} 成绩 ${score} 分` });
  },

  // 管理员端
  async 'GET /api/admin/dashboard'(req, res) {
    const info = auth(req);
    if (!info || info.role !== 'admin') return json(res, 401, { ok: false });
    const inSchool = store.studentList.filter(s => s.status !== '休学').length;
    return json(res, 200, {
      ok: true,
      data: {
        name: store.admin.name,
        studentCount: store.studentList.length,
        inSchool,
        teacherCount: store.teacherList.length,
        courseCount: store.myCourses.length + store.availableCourses.length,
        notices: store.notices.length,
        colleges: [...new Set(store.studentList.map(s => s.college))].length,
      },
    });
  },

  async 'GET /api/admin/students'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.studentList });
  },

  async 'GET /api/admin/teachers'(req, res) {
    if (!auth(req)) return json(res, 401, { ok: false });
    return json(res, 200, { ok: true, data: store.teacherList });
  },

  async 'POST /api/admin/notice'(req, res, body) {
    const info = auth(req);
    if (!info || info.role !== 'admin') return json(res, 401, { ok: false });
    const { title, category, content } = body || {};
    if (!title || !content) return json(res, 400, { ok: false, msg: '标题和内容不能为空' });
    store.notices.unshift({ id: 'n' + Date.now(), title, category: category || '通知公告', content, date: new Date().toISOString().slice(0, 10), top: false });
    return json(res, 200, { ok: true, msg: '通知发布成功' });
  },
};

// —— 静态文件服务 ——
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

function serveStatic(req, res, pathname) {
  let filePath = pathname === '/' ? '/index.html' : pathname === '/app' ? '/app.html' : pathname;
  let full = path.join(__dirname, 'public', filePath);
  if (!full.startsWith(path.join(__dirname, 'public'))) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(full) && fs.statSync(full).isDirectory()) full = path.join(full, 'index.html');
  fs.readFile(full, (err, content) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('404 Not Found'); }
    const ext = path.extname(full).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(content);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = decodeURIComponent(url.pathname);

  // 匹配 API（含路径参数）
  let matched = null;
  let params = {};
  for (const key of Object.keys(api)) {
    const [method, route] = key.split(' ');
    if (method !== req.method) continue;
    const keyParts = route.split('/').filter(Boolean);
    const pathParts = pathname.split('/').filter(Boolean);
    if (keyParts.length !== pathParts.length) continue;
    let ok = true; const p = {};
    for (let i = 0; i < keyParts.length; i++) {
      if (keyParts[i].startsWith(':')) p[keyParts[i].slice(1)] = pathParts[i];
      else if (keyParts[i] !== pathParts[i]) { ok = false; break; }
    }
    if (ok) { matched = key; params = p; break; }
  }

  if (matched) {
    try {
      const body = ['POST', 'PUT', 'PATCH'].includes(req.method) ? await readBody(req) : {};
      await api[matched](req, res, body, params);
    } catch (e) {
      json(res, 500, { ok: false, msg: '服务器错误: ' + e.message });
    }
    return;
  }

  if (pathname.startsWith('/api/')) return json(res, 404, { ok: false, msg: '接口不存在' });
  serveStatic(req, res, pathname);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  ✅ 河南师范大学教务网络管理系统 已启动`);
  console.log(`  🌐 本地访问: http://localhost:${PORT}`);
  console.log(`  🧑 学生账号: 2023012345 / 123456`);
  console.log(`  👨‍🏫 教师账号: 10101 / 123456`);
  console.log(`  🛠️ 管理员账号: admin / admin123\n`);
});