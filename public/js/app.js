/* ===== 河南师范大学教务网络管理系统 —— 前端逻辑 ===== */
(function () {
  'use strict';

  /* ---------- 图标库（stroke 风格） ---------- */
  const I = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><polyline points="9 14 11 16 15 12"/>',
    graduation: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    megaphone: '<path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    trend: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    chev: '<polyline points="9 18 15 12 9 6"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    crown: '<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 21h14"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
  };

  function icon(name, size) {
    size = size || 20;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (I[name] || I.info) + '</svg>';
  }

  /* ---------- API 封装 ---------- */
  const API = {
    token: localStorage.getItem('henu_token') || '',
    user: JSON.parse(localStorage.getItem('henu_user') || 'null'),
    async req(method, url, body) {
      const headers = { 'Content-Type': 'application/json' };
      if (this.token) headers['Authorization'] = 'Bearer ' + this.token;
      const res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401 && !url.startsWith('/api/login')) { this.logout(); }
      return data;
    },
    get(url) { return this.req('GET', url); },
    post(url, body) { return this.req('POST', url, body || {}); },
    logout() {
      try { this.post('/api/logout'); } catch (e) {}
      localStorage.removeItem('henu_token');
      localStorage.removeItem('henu_user');
      window.location.href = '/';
    },
  };

  /* ---------- 工具函数 ---------- */
  const $ = (sel) => document.querySelector(sel);
  const contentEl = () => document.getElementById('content');
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
  function scoreClass(s) { return s >= 90 ? 'score-excellent' : s >= 80 ? 'score-good' : s >= 70 ? 'score-mid' : 'score-low'; }
  function gpaOf(s) { return s >= 90 ? 4.0 : s >= 85 ? 3.7 : s >= 82 ? 3.3 : s >= 78 ? 3.0 : s >= 75 ? 2.7 : s >= 72 ? 2.3 : s >= 68 ? 2.0 : s >= 64 ? 1.5 : s >= 60 ? 1.0 : 0; }

  function toast(msg, ok) {
    const wrap = document.getElementById('toastWrap');
    const el = document.createElement('div');
    el.className = 'toast ' + (ok === false ? 'err' : 'ok');
    el.innerHTML = (ok === false ? icon('x', 18) : icon('check', 18)) + '<span>' + esc(msg) + '</span>';
    wrap.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(30px)'; el.style.transition = '.3s'; setTimeout(() => el.remove(), 320); }, 2600);
  }

  window.App = window.App || {};
  window.App.toast = toast;
  window.App.openModal = function (html, wide) {
    const root = document.getElementById('modalRoot');
    root.innerHTML = '<div class="modal-mask" onclick="if(event.target===this)window.App.closeModal()"><div class="modal' + (wide ? ' wide' : '') + '">' + html + '</div></div>';
  };
  window.App.closeModal = function () { document.getElementById('modalRoot').innerHTML = ''; };
  window.App.closeSidebar = function () { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').style.display = 'none'; };

  function openSidebar() { document.getElementById('sidebar').classList.add('open'); document.getElementById('overlay').style.display = 'block'; }

  /* ---------- 导航配置 ---------- */
  const NAV = {
    student: [
      { g: '首页' }, { id: 'dashboard', label: '工作台', i: 'grid' },
      { g: '信息查询' }, { id: 'profile', label: '学籍信息', i: 'user' }, { id: 'schedule', label: '课程表', i: 'calendar' }, { id: 'grades', label: '成绩查询', i: 'award' }, { id: 'exams', label: '考试安排', i: 'fileText' },
      { g: '报名服务' }, { id: 'selection', label: '选课中心', i: 'bookOpen' }, { id: 'exam-reg', label: '考试报名', i: 'clipboard' }, { id: 'activity', label: '活动报名', i: 'activity' },
      { g: '教务服务' }, { id: 'evaluation', label: '教学评价', i: 'star' }, { id: 'notices', label: '通知公告', i: 'megaphone' },
      { g: '系统' }, { id: 'settings', label: '个人中心', i: 'settings' },
    ],
    teacher: [
      { g: '首页' }, { id: 'dashboard', label: '工作台', i: 'grid' },
      { g: '教学服务' }, { id: 'my-courses', label: '我的课程', i: 'book' }, { id: 'grade-entry', label: '成绩录入', i: 'edit' },
      { g: '系统' }, { id: 'notices', label: '通知公告', i: 'megaphone' }, { id: 'settings', label: '个人中心', i: 'settings' },
    ],
    admin: [
      { g: '首页' }, { id: 'dashboard', label: '工作台', i: 'grid' },
      { g: '系统管理' }, { id: 'students', label: '学生管理', i: 'users' }, { id: 'teachers', label: '教师管理', i: 'user' }, { id: 'notice-publish', label: '通知发布', i: 'megaphone' },
      { g: '系统' }, { id: 'settings', label: '个人中心', i: 'settings' },
    ],
  };

  const TITLES = {
    dashboard: ['工作台', 'Dashboard'], profile: ['学籍信息', 'Student Profile'], schedule: ['课程表', 'Timetable'],
    grades: ['成绩查询', 'Grades'], exams: ['考试安排', 'Exam Schedule'], selection: ['选课中心', 'Course Selection'],
    'exam-reg': ['考试报名', 'Exam Registration'], activity: ['活动报名', 'Activities'], evaluation: ['教学评价', 'Teaching Evaluation'],
    notices: ['通知公告', 'Notices'], settings: ['个人中心', 'Account Settings'], 'my-courses': ['我的课程', 'My Courses'],
    'grade-entry': ['成绩录入', 'Grade Entry'], students: ['学生管理', 'Students'], teachers: ['教师管理', 'Teachers'],
    'notice-publish': ['通知发布', 'Publish Notice'],
  };

  /* ---------- 共享渲染辅助 ---------- */
  function statCard(cls, ic, num, label, extra) {
    return '<div class="card stat-card card-hover"><div class="st-ic ' + cls + '">' + icon(ic, 26) + '</div><div><div class="st-num">' + num + '</div><div class="st-label">' + label + '</div>' + (extra || '') + '</div><div class="st-wave">' + icon(ic, 90) + '</div></div>';
  }

  function empty(ic, text) { return '<div class="empty">' + icon(ic, 54) + '<p>' + text + '</p></div>'; }

  function shortTerm(t) { const p = String(t).split('-'); return p.length >= 2 ? p[0].slice(2) + '-' + p[1].slice(2) + (p[2] === '1' ? '上' : '下') : t; }
  function svgLineChart(points) {
    const W = 620, H = 180, pad = 28;
    if (!points.length) return empty('chart', '暂无数据');
    const max = Math.max.apply(null, points.map(p => p.avg)) * 1.15 || 100;
    const min = Math.min.apply(null, points.map(p => p.avg)) * 0.85 || 0;
    const n = points.length;
    const x = i => pad + (i * (W - pad * 2) / Math.max(1, n - 1));
    const y = v => H - pad - ((v - min) / (max - min)) * (H - pad * 2);
    const pts = points.map((p, i) => x(i) + ',' + y(p.avg)).join(' ');
    const area = pad + ',' + H + ' ' + pts + ' ' + (pad + (n - 1) * (W - pad * 2) / Math.max(1, n - 1)) + ',' + H;
    let circles = points.map((p, i) => '<circle cx="' + x(i) + '" cy="' + y(p.avg) + '" r="4" fill="#2563eb" stroke="#fff" stroke-width="2"/>').join('');
    let labels = points.map((p, i) => '<text x="' + x(i) + '" y="' + (H - 6) + '" font-size="10" fill="#8494ae" text-anchor="middle">' + esc(shortTerm(p.term)) + '</text>').join('');
    let vals = points.map((p, i) => '<text x="' + x(i) + '" y="' + (y(p.avg) - 8) + '" font-size="11" fill="#1d4ed8" font-weight="700" text-anchor="middle">' + p.avg + '</text>').join('');
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:auto"><defs><linearGradient id="lg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2563eb" stop-opacity=".25"/><stop offset="1" stop-color="#2563eb" stop-opacity="0"/></linearGradient></defs><polygon points="' + area + '" fill="url(#lg)"/><polyline points="' + pts + '" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' + circles + labels + vals + '</svg>';
  }

  /* ================= 视图 ================= */
  const views = {};

  /* 工作台 */
  views.dashboard = async function () {
    const user = API.user;
    if (user.role === 'teacher') return views['teacher-dashboard']();
    if (user.role === 'admin') return views['admin-dashboard']();
    const res = await API.get('/api/summary');
    const d = res.data;
    const now = new Date();
    const hour = now.getHours();
    const greet = hour < 6 ? '夜深了' : hour < 12 ? '早上好' : hour < 14 ? '中午好' : hour < 18 ? '下午好' : '晚上好';
    const week = ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
    const creditPct = Math.min(100, Math.round((d.totalCredits / d.requiredCredits) * 100));
    const regs = await API.get('/api/exam-registration');
    const act = await API.get('/api/activities');
    const notices = await API.get('/api/notices');
    const schedule = await API.get('/api/schedule');
    const todayCourses = schedule.data.filter(c => c.weekday === (now.getDay() || 7));

    let html = '<div class="page-enter">';
    html += '<div class="welcome"><h3>' + greet + '，' + esc(d.name) + ' 👋</h3><p>' + esc(d.college) + ' · ' + esc(d.major) + ' · ' + esc(d.grade) + '　当前学期 2026-2027 学年第一学期（第 ' + (now.getMonth() >= 8 ? 6 : 6) + ' 周）</p><div class="welcome-badges"><span class="wb">📅 ' + now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日 · 星期' + week + '</span><span class="wb">🎯 专业排名 ' + esc(d.ranking || '12 / 156') + '</span><span class="wb">⭐ 平均绩点 ' + d.gpa + '</span></div></div>';

    html += '<div class="grid grid-4">';
    html += statCard('blue', 'chart', d.avgScore, '平均成绩', '<div class="st-trend">↑ 稳步提升</div>');
    html += statCard('green', 'crown', d.gpa, '平均绩点 GPA', '<div class="st-trend">4.0 制</div>');
    html += statCard('orange', 'bookOpen', d.totalCredits, '已修学分', '<div class="st-trend">目标 ' + d.requiredCredits + ' 分</div>');
    html += statCard('purple', 'clipboard', d.actCount, '已报名活动', '<div class="st-trend">含考试 ' + d.regCount + ' 项</div>');
    html += '</div>';

    html += '<div class="grid grid-3" style="margin-top:18px">';
    html += '<div class="card" style="grid-column: span 2"><div class="card-head"><div>' + icon('trend', 18) + '</div><h4>成绩走势</h4><span class="hint">各学期平均分</span></div>' + svgLineChart(d.trend) + '</div>';
    html += '<div class="card"><div class="card-head"><h4>学分进度</h4><span class="hint">' + d.totalCredits + ' / ' + d.requiredCredits + '</span></div><div class="chart-flex"><div style="width:130px;height:130px;border-radius:50%;background:conic-gradient(#2563eb 0 ' + creditPct + '%, #e6edf7 ' + creditPct + '% 100%);display:grid;place-items:center"><div style="width:96px;height:96px;border-radius:50%;background:#fff;display:grid;place-items:center;text-align:center"><div><div style="font-size:26px;font-weight:800;color:#2563eb">' + creditPct + '%</div><div style="font-size:11px;color:#8494ae">完成度</div></div></div></div><div class="legend"><div class="lg"><span class="dot" style="background:#2563eb"></span>已修 ' + d.totalCredits + ' 学分</div><div class="lg"><span class="dot" style="background:#e6edf7"></span>还需 ' + (d.requiredCredits - d.totalCredits) + ' 学分</div><div class="lg"><span class="dot" style="background:#10b981"></span>通过率 ' + d.passRate + '%</div></div></div></div>';
    html += '</div>';

    html += '<div class="grid grid-2" style="margin-top:18px">';
    html += '<div class="card"><div class="card-head"><div>' + icon('calendar', 18) + '</div><h4>今日课程</h4><span class="hint" style="cursor:pointer" onclick="location.hash=\'#/schedule\'">查看课表 →</span></div>';
    if (todayCourses.length) {
      html += todayCourses.map(c => '<div style="display:flex;align-items:center;gap:12px;padding:10px 4px;border-bottom:1px solid #f0f4fb"><div style="min-width:52px;color:#2563eb;font-weight:700">第' + c.start + '-' + c.end + '节</div><div style="flex:1"><div style="font-weight:600">' + esc(c.name) + '</div><div style="font-size:12px;color:#8494ae">' + esc(c.teacher) + ' · ' + esc(c.location) + '</div></div></div>').join('');
    } else html += empty('calendar', '今天没有课程安排');
    html += '</div>';
    html += '<div class="card"><div class="card-head"><div>' + icon('megaphone', 18) + '</div><h4>最新通知</h4><span class="hint" style="cursor:pointer" onclick="location.hash=\'#/notices\'">更多 →</span></div>' + notices.data.slice(0, 4).map(n => '<div class="notice-item" onclick="window.App.openNotice(\'' + n.id + '\')"><div class="n-cat"><span class="tag blue">' + esc(n.category) + '</span></div><div><div class="n-title' + (n.top ? ' top' : '') + '">' + esc(n.title) + '</div><div class="n-date">' + esc(n.date) + '</div></div></div>').join('') + '</div>';
    html += '</div></div>';

    contentEl().innerHTML = html;
  };

  /* 学籍信息 */
  views.profile = async function () {
    const d = (await API.get('/api/profile')).data;
    const left = [['studentNo', '学号'], ['name', '姓名'], ['gender', '性别'], ['birthDate', '出生日期'], ['idCard', '身份证号'], ['ethnicity', '民族'], ['politics', '政治面貌'], ['phone', '联系电话'], ['email', '电子邮箱']];
    const right = [['college', '学院'], ['major', '专业'], ['grade', '年级'], ['className', '班级'], ['enterYear', '入学年份'], ['studentStatus', '学籍状态'], ['educationLevel', '学历层次'], ['campus', '校区'], ['dormitory', '宿舍']];
    function kv(keys, obj) {
      return keys.map(k => '<div class="kv"><span class="k">' + k[1] + '</span><span class="v">' + esc(obj[k[0]]) + '</span></div>').join('');
    }
    let html = '<div class="page-enter">';
    html += '<div class="grid grid-3">';
    html += '<div class="card" style="text-align:center"><div class="avatar" style="width:86px;height:86px;font-size:34px;margin:6px auto 14px">' + esc(d.name.slice(0, 1)) + '</div><h3 style="font-size:20px">' + esc(d.name) + '</h3><p style="color:#8494ae;font-size:13px">' + esc(d.college) + '</p><p style="color:#8494ae;font-size:13px">' + esc(d.major) + ' · ' + esc(d.className) + '</p><div style="margin-top:14px"><span class="tag green">' + esc(d.studentStatus) + '</span> <span class="tag blue">' + esc(d.educationLevel) + '</span></div></div>';
    html += '<div class="card" style="grid-column: span 2"><div class="card-head"><div>' + icon('user', 18) + '</div><h4>基本信息</h4></div><div class="grid grid-2">' + [kv(left.slice(0, 5), d), kv(left.slice(5), d)].map(x => '<div>' + x + '</div>').join('') + '</div></div>';
    html += '</div>';
    html += '<div class="grid grid-3" style="margin-top:18px">';
    html += '<div class="card"><div class="card-head"><h4>学籍与培养</h4></div>' + kv(right, d) + '</div>';
    html += '<div class="card" style="grid-column: span 2"><div class="card-head"><div>' + icon('book', 18) + '</div><h4>学业概览</h4></div><div class="grid grid-2" style="gap:20px">';
    ['平均绩点 GPA', '总修学分', '专业排名', '目标学分'].forEach((t, i) => {
      const v = [d.gpa, d.totalCredits, d.ranking, d.requiredCredits][i];
      html += '<div style="text-align:center;padding:16px;background:#f7f9fd;border-radius:12px"><div style="font-size:26px;font-weight:800;color:#2563eb">' + esc(v) + '</div><div style="font-size:12px;color:#8494ae;margin-top:4px">' + t + '</div></div>';
    });
    html += '</div></div></div></div>';
    contentEl().innerHTML = html;
  };

  /* 课程表 */
  views.schedule = async function () {
    const d = (await API.get('/api/schedule')).data;
    const slots = [
      ['第1-2节', '08:00-09:40'], ['第3-4节', '10:00-11:40'], ['第5-6节', '14:30-16:10'], ['第7-8节', '16:30-18:10'], ['第9-10节', '19:00-20:40'],
    ];
    const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    const gridArr = slots.map(() => Array(7).fill(null));
    d.forEach(c => {
      const slot = c.start <= 2 ? 0 : c.start <= 4 ? 1 : c.start <= 6 ? 2 : c.start <= 8 ? 3 : 4;
      const col = c.weekday - 1;
      if (gridArr[slot] && col >= 0 && col < 7) gridArr[slot][col] = c;
    });
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('calendar', 18) + '</div><h4>2026-2027 学年第一学期 课程表</h4><span class="hint">' + d.length + ' 门课程</span></div>';
    html += '<div class="schedule-grid"><div></div>' + days.map(x => '<div class="sched-head">' + x + '</div>').join('');
    gridArr.forEach((row, ri) => {
      html += '<div class="sched-time"><span>' + slots[ri][0] + '<br>' + slots[ri][1] + '</span></div>';
      for (let ci = 0; ci < 7; ci++) {
        const c = row[ci];
        html += '<div class="sched-cell">';
        if (c) html += '<div class="course-chip' + (c.note ? ' soft' : '') + '"><div class="cc-name">' + esc(c.name) + '</div><div class="cc-loc">' + esc(c.location) + '</div></div>';
        html += '</div>';
      }
    });
    html += '</div></div></div>';
    contentEl().innerHTML = html;
  };

  /* 成绩查询 */
  views.grades = async function () {
    const res = await API.get('/api/grades');
    const terms = res.terms;
    let cur = '全部';
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('award', 18) + '</div><h4>成绩查询</h4><div style="margin-left:auto"><select id="termSel" class="btn btn-outline btn-sm" style="padding-right:8px">' + ['全部', ...terms].map(t => '<option value="' + esc(t) + '"' + (t === cur ? ' selected' : '') + '>' + esc(t === '全部' ? t : t) + '</option>').join('') + '</select></div></div><div id="gradeBody"></div></div></div>';
    contentEl().innerHTML = html;

    async function renderTerm(term) {
      const r = await API.get('/api/grades?term=' + encodeURIComponent(term));
      renderTable(r.data);
    }
    function renderTable(list) {
      let t = '';
      const avg = list.length ? (list.reduce((s, g) => s + g.score, 0) / list.length).toFixed(1) : '0';
      const credits = list.reduce((s, g) => s + g.credit, 0).toFixed(1);
      t += '<div class="grid grid-3" style="margin-bottom:14px">' + statCard('blue', 'chart', avg, '平均分', '') + statCard('orange', 'book', credits, '总学分', '') + statCard('green', 'crown', list.length ? (list.reduce((s, g) => s + gpaOf(g.score) * g.credit, 0) / list.reduce((s, g) => s + g.credit, 0)).toFixed(2) : '0', '平均绩点', '') + '</div>';
      t += '<div class="table-wrap"><table class="tbl"><thead><tr><th>课程代码</th><th>课程名称</th><th>类别</th><th>学分</th><th>成绩</th><th>绩点</th><th>考核方式</th><th>学期</th></tr></thead><tbody>';
      if (!list.length) t += '<tr><td colspan="8">' + empty('fileText', '该学期暂无成绩记录') + '</td></tr>';
      list.forEach(g => {
        t += '<tr><td>' + esc(g.courseCode) + '</td><td style="font-weight:600">' + esc(g.courseName) + '</td><td><span class="tag gray">' + esc(g.category) + '</span></td><td>' + g.credit + '</td><td class="' + scoreClass(g.score) + '" style="font-size:15px">' + g.score + '</td><td>' + gpaOf(g.score).toFixed(1) + '</td><td>' + esc(g.examType) + '</td><td>' + esc(g.term) + '</td></tr>';
      });
      t += '</tbody></table></div>';
      document.getElementById('gradeBody').innerHTML = t;
    }
    $('#termSel').addEventListener('change', function () { renderTerm(this.value); });
    renderTerm('全部');
  };

  /* 考试安排 */
  views.exams = async function () {
    const d = (await API.get('/api/exams')).data;
    const today = new Date();
    function daysLeft(dateStr) {
      const dt = new Date(dateStr); const diff = Math.ceil((dt - today) / 86400000);
      return diff;
    }
    let html = '<div class="page-enter"><div class="grid grid-2">';
    d.forEach(e => {
      const dl = daysLeft(e.date);
      html += '<div class="card card-hover"><div class="card-head"><div>' + icon('fileText', 18) + '</div><h4>' + esc(e.courseName) + '</h4>' + (dl >= 0 ? '<span class="tag ' + (dl <= 7 ? 'red' : 'blue') + '">' + dl + ' 天后</span>' : '') + '</div><div class="kv"><span class="k">考核类型</span><span class="v">' + esc(e.examType) + '</span></div><div class="kv"><span class="k">考试时间</span><span class="v">' + esc(e.date) + ' ' + esc(e.time) + '</span></div><div class="kv"><span class="k">考试地点</span><span class="v">' + esc(e.location) + '</span></div><div class="kv"><span class="k">座位号</span><span class="v">' + esc(e.seatNo) + ' 号</span></div><div class="kv"><span class="k">状态</span><span class="v"><span class="tag orange">' + esc(e.status) + '</span></span></div></div>';
    });
    html += '</div></div>';
    contentEl().innerHTML = html;
  };

  /* 选课中心 */
  views.selection = async function () {
    const d = (await API.get('/api/course-selection')).data;
    function render() {
      let html = '<div class="page-enter">';
      html += '<div class="grid grid-3" style="margin-bottom:18px">' + statCard('blue', 'bookOpen', d.available.length, '可选课程', '') + statCard('green', 'check', d.selected.length, '已选课程', '') + statCard('orange', 'book', d.totalCredits, '本学期学分', '') + '</div>';
      html += '<div class="card" style="margin-bottom:18px"><div class="card-head"><h4>已选课程</h4><span class="hint">本学期已选 ' + d.selected.length + ' 门</span></div>';
      if (d.selected.length) html += '<div class="grid grid-2">' + d.selected.map(c => '<div class="course-card" style="border:1.5px solid #cfe0ff;border-radius:12px;padding:14px"><div style="display:flex;justify-content:space-between;align-items:start"><div><div style="font-weight:700">' + esc(c.name) + '</div><div style="font-size:12px;color:#8494ae">' + esc(c.teacher) + ' · ' + c.credit + ' 学分</div></div><button class="btn btn-danger btn-sm" data-id="' + c.id + '">退课</button></div></div>').join('') + '</div>';
      else html += empty('book', '尚未选课，去下方挑选心仪的课程吧');
      html += '</div>';
      html += '<div class="card"><div class="card-head"><h4>可选课程</h4><span class="hint">点击选课即可加入课表</span></div><div class="grid grid-2">';
      d.available.forEach(c => {
        const full = c.enrolled >= c.capacity;
        const pct = Math.round(c.enrolled / c.capacity * 100);
        html += '<div class="card-card" style="border:1px solid var(--border);border-radius:14px;padding:16px"><div style="display:flex;justify-content:space-between;gap:8px"><div style="font-weight:700;font-size:15px">' + esc(c.name) + '</div><span class="tag ' + (c.category === '通识选修' ? 'purple' : 'blue') + '">' + esc(c.category) + '</span></div><div style="font-size:12px;color:#8494ae;margin:4px 0 8px">' + esc(c.note || '') + '</div><div style="font-size:12.5px;color:#4b5b78">' + icon('user', 14) + ' ' + esc(c.teacher) + '　' + icon('clock', 14) + ' 周' + ['一','二','三','四','五','六','日'][c.weekday - 1] + ' 第' + c.start + '-' + c.end + '节</div><div style="font-size:12.5px;color:#4b5b78;margin:4px 0 12px">' + icon('pin', 14) + ' ' + esc(c.location) + '　' + c.credit + ' 学分</div><div style="display:flex;align-items:center;gap:10px"><div class="progress" style="flex:1"><span style="width:' + pct + '%"></span></div><span style="font-size:11px;color:#8494ae;white-space:nowrap">' + c.enrolled + '/' + c.capacity + '</span><button class="btn ' + (c.selected ? 'btn-outline' : 'btn-primary') + ' btn-sm" data-id="' + c.id + '"' + ((full && !c.selected) ? ' disabled' : '') + '>' + (c.selected ? '已选' : full ? '已满' : '选课') + '</button></div></div>';
      });
      html += '</div></div></div>';
      contentEl().innerHTML = html;
      contentEl().querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', async function () {
          const id = this.dataset.id;
          const isSelected = d.available.find(c => c.id === id).selected;
          const res = await API.post('/api/course-selection/' + (isSelected ? 'drop' : 'select'), { courseId: id });
          if (res.ok) { toast(res.msg); const nd = (await API.get('/api/course-selection')).data; d.available = nd.available; d.selected = nd.selected; d.totalCredits = nd.totalCredits; render(); }
          else toast(res.msg, false);
        });
      });
    }
    render();
  };

  /* 考试报名 */
  views['exam-reg'] = async function () {
    const d = (await API.get('/api/exam-registration')).data;
    function render() {
      let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('clipboard', 18) + '</div><h4>考试报名</h4><span class="hint">网上报名 · 按时缴费</span></div><div class="grid grid-2">';
      d.forEach(r => {
        const st = r.status;
        const tagCls = st === '报名中' ? 'green' : st === '未开始' ? 'gray' : 'orange';
        html += '<div style="border:1px solid var(--border);border-radius:14px;padding:18px"><div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:8px"><div style="font-weight:700;font-size:15px">' + esc(r.examName) + '</div><span class="tag ' + tagCls + '">' + esc(st) + '</span></div><div style="font-size:12.5px;color:#8494ae;margin-bottom:10px">' + esc(r.desc) + '</div><div class="kv"><span class="k" style="width:88px">考试时间</span><span class="v">' + esc(r.examDate) + '</span></div><div class="kv"><span class="k" style="width:88px">报名截止</span><span class="v">' + esc(r.deadline) + '</span></div><div class="kv"><span class="k" style="width:88px">考试费用</span><span class="v">¥' + r.fee + '</span></div><div style="margin-top:14px">' + (r.registered ? '<button class="btn btn-danger btn-sm" data-id="' + r.id + '">取消报名</button> <span class="tag green" style="margin-left:6px">✓ 已报名</span>' : (st === '报名中' ? '<button class="btn btn-primary btn-sm" data-id="' + r.id + '">立即报名</button>' : '<button class="btn btn-outline btn-sm" disabled>未开放</button>')) + '</div></div>';
      });
      html += '</div></div></div>';
      contentEl().innerHTML = html;
      contentEl().querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', async function () {
          const id = this.dataset.id;
          const item = d.find(r => r.id === id);
          const res = await API.post('/api/exam-registration/' + id, { action: item.registered ? 'cancel' : 'register' });
          if (res.ok) { toast(res.msg); const nd = (await API.get('/api/exam-registration')).data; for (let i = 0; i < d.length; i++) d[i] = nd[i]; render(); }
          else toast(res.msg, false);
        });
      });
    }
    render();
  };

  /* 活动报名 */
  views.activity = async function () {
    const d = (await API.get('/api/activities')).data;
    function render() {
      let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('activity', 18) + '</div><h4>校园活动报名</h4><span class="hint">丰富课余生活</span></div><div class="grid grid-2">';
      d.forEach(a => {
        const pct = Math.round(a.enrolled / a.capacity * 100);
        html += '<div style="border:1px solid var(--border);border-radius:14px;padding:18px"><div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:6px"><div style="font-weight:700;font-size:15px">' + esc(a.name) + '</div><span class="tag ' + (a.category === '学科竞赛' ? 'blue' : a.category === '体育竞技' ? 'green' : 'purple') + '">' + esc(a.category) + '</span></div><div style="font-size:12.5px;color:#8494ae;margin-bottom:10px">' + esc(a.organizer) + '</div><div style="font-size:12.5px;color:#4b5b78;margin-bottom:10px">' + icon('clock', 14) + ' ' + esc(a.date) + '　' + icon('pin', 14) + ' ' + esc(a.location) + '</div><div style="font-size:12.5px;color:#4b5b78;margin-bottom:12px">' + esc(a.desc) + '</div><div style="display:flex;align-items:center;gap:10px"><div class="progress" style="flex:1"><span style="width:' + pct + '%"></span></div><span style="font-size:11px;color:#8494ae;white-space:nowrap">' + a.enrolled + '/' + a.capacity + '</span>' + (a.registered ? '<button class="btn btn-danger btn-sm" data-id="' + a.id + '">取消</button>' : '<button class="btn btn-primary btn-sm" data-id="' + a.id + '"' + (a.enrolled >= a.capacity ? ' disabled' : '') + '>' + (a.enrolled >= a.capacity ? '已满' : '报名') + '</button>') + '</div></div>';
      });
      html += '</div></div></div>';
      contentEl().innerHTML = html;
      contentEl().querySelectorAll('button[data-id]').forEach(btn => {
        btn.addEventListener('click', async function () {
          const id = this.dataset.id;
          const item = d.find(x => x.id === id);
          const res = await API.post('/api/activities/' + id, { action: item.registered ? 'cancel' : 'register' });
          if (res.ok) { toast(res.msg); const nd = (await API.get('/api/activities')).data; for (let i = 0; i < d.length; i++) d[i] = nd[i]; render(); }
          else toast(res.msg, false);
        });
      });
    }
    render();
  };

  /* 教学评价 */
  views.evaluation = async function () {
    const d = (await API.get('/api/evaluation')).data;
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('star', 18) + '</div><h4>教学评价</h4><span class="hint">你的反馈是教学改进的动力</span></div><div class="grid grid-2">';
    d.forEach(c => {
      html += '<div style="border:1px solid var(--border);border-radius:14px;padding:18px;display:flex;align-items:center;gap:14px"><div style="flex:1"><div style="font-weight:700;font-size:15px">' + esc(c.courseName) + '</div><div style="font-size:12.5px;color:#8494ae">' + esc(c.teacher) + ' · 课程均分 ' + c.avgScore + '</div></div>' + (c.evaluated ? '<span class="tag green">✓ 已评价</span>' : '<button class="btn btn-primary btn-sm" data-id="' + c.id + '" data-name="' + esc(c.courseName) + '">去评价</button>') + '</div>';
    });
    html += '</div></div></div>';
    contentEl().innerHTML = html;
    contentEl().querySelectorAll('button[data-id]').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.id, name = this.dataset.name;
        const dims = ['教学态度', '教学内容', '教学方法', '教学效果', '总体满意'];
        let starsHtml = dims.map((dm, i) => '<div class="form-row"><label>' + dm + '</label><div class="stars" data-d="' + i + '">' + [1, 2, 3, 4, 5].map(s => '<span class="star" data-v="' + s + '">' + icon('star', 24) + '</span>').join('') + '</div></div>').join('');
        window.App.openModal('<h4>' + icon('star', 19) + ' 评价《' + esc(name) + '》<button class="close-x" onclick="window.App.closeModal()">' + icon('x', 20) + '</button></h4>' + starsHtml + '<div class="m-actions"><button class="btn btn-ghost" onclick="window.App.closeModal()">取消</button><button class="btn btn-primary" id="evSubmit">提交评价</button></div>');
        const scores = {};
        document.querySelectorAll('.modal .stars').forEach(row => {
          row.addEventListener('click', function (e) {
            const star = e.target.closest('.star'); if (!star) return;
            const v = Number(star.dataset.v);
            scores[row.dataset.d] = v;
            row.querySelectorAll('.star').forEach(s => s.classList.toggle('on', Number(s.dataset.v) <= v));
          });
        });
        document.getElementById('evSubmit').addEventListener('click', async function () {
          if (Object.keys(scores).length < dims.length) return toast('请完成所有维度评分', false);
          const res = await API.post('/api/evaluation', { id, scores });
          if (res.ok) { window.App.closeModal(); toast(res.msg); views.evaluation(); } else toast(res.msg, false);
        });
      });
    });
  };

  /* 通知公告 */
  window.App.openNotice = function (id) {
    API.get('/api/notices').then(res => {
      const n = res.data.find(x => x.id === id);
      if (!n) return;
      window.App.openModal('<h4>' + icon('megaphone', 18) + ' ' + esc(n.title) + '<button class="close-x" onclick="window.App.closeModal()">' + icon('x', 20) + '</button></h4><div style="margin-bottom:10px"><span class="tag blue">' + esc(n.category) + '</span> <span style="color:#8494ae;font-size:12px;margin-left:6px">' + esc(n.date) + '</span></div><div style="line-height:1.9;color:#4b5b78">' + esc(n.content) + '</div>');
    });
  };
  views.notices = async function () {
    const d = (await API.get('/api/notices')).data;
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('megaphone', 18) + '</div><h4>通知公告</h4><span class="hint">共 ' + d.length + ' 条</span></div>';
    d.forEach(n => {
      html += '<div class="notice-item" onclick="window.App.openNotice(\'' + n.id + '\')"><div class="n-cat"><span class="tag ' + (n.top ? 'red' : 'blue') + '">' + esc(n.category) + '</span></div><div style="flex:1"><div class="n-title' + (n.top ? ' top' : '') + '">' + esc(n.title) + '</div></div><div class="n-date">' + esc(n.date) + '</div></div>';
    });
    html += '</div></div>';
    contentEl().innerHTML = html;
  };

  /* 个人中心 */
  views.settings = async function () {
    const user = API.user;
    let extra = '';
    if (user.role === 'student') { const d = (await API.get('/api/profile')).data; extra = '<div class="grid grid-2">' + [['学号', d.studentNo], ['姓名', d.name], ['学院', d.college], ['专业', d.major], ['班级', d.className], ['联系电话', d.phone], ['电子邮箱', d.email], ['宿舍', d.dormitory]].map(k => '<div class="kv"><span class="k">' + k[0] + '</span><span class="v">' + esc(k[1]) + '</span></div>').join('') + '</div>'; }
    else if (user.role === 'teacher') extra = '<div class="grid grid-2">' + [['工号', user.username], ['姓名', user.name], ['学院', user.college], ['职称', user.title]].map(k => '<div class="kv"><span class="k">' + k[0] + '</span><span class="v">' + esc(k[1]) + '</span></div>').join('') + '</div>';
    else extra = '<div class="kv"><span class="k">姓名</span><span class="v">系统管理员</span></div><div class="kv"><span class="k">部门</span><span class="v">教务处</span></div>';

    let html = '<div class="page-enter"><div class="grid grid-2">';
    html += '<div class="card"><div class="card-head"><div>' + icon('user', 18) + '</div><h4>账号信息</h4></div><div style="display:flex;align-items:center;gap:16px;margin-bottom:18px"><div class="avatar" style="width:66px;height:66px;font-size:26px">' + esc(user.name.slice(0, 1)) + '</div><div><div style="font-size:18px;font-weight:800">' + esc(user.name) + '</div><div style="color:#8494ae;font-size:13px">' + ({ student: '学生', teacher: '教师', admin: '管理员' })[user.role] + '</div></div></div>' + extra + '</div>';
    html += '<div class="card"><div class="card-head"><div>' + icon('key', 18) + '</div><h4>修改密码</h4></div><div class="form-row"><label>原密码</label><input type="password" id="oldPass" placeholder="请输入原密码"></div><div class="form-row"><label>新密码</label><input type="password" id="newPass" placeholder="至少 6 位"></div><div class="form-row"><label>确认新密码</label><input type="password" id="confirmPass" placeholder="再次输入新密码"></div><button class="btn btn-primary" id="pwdBtn">保存修改</button></div>';
    html += '</div></div>';
    contentEl().innerHTML = html;
    document.getElementById('pwdBtn').addEventListener('click', async function () {
      const oldPass = $('#oldPass').value, newPass = $('#newPass').value, confirmPass = $('#confirmPass').value;
      if (!oldPass || !newPass) return toast('请填写完整', false);
      if (newPass !== confirmPass) return toast('两次输入的新密码不一致', false);
      const res = await API.post('/api/password', { oldPass, newPass });
      if (res.ok) { toast(res.msg); $('#oldPass').value = ''; $('#newPass').value = ''; $('#confirmPass').value = ''; } else toast(res.msg, false);
    });
  };

  /* —— 教师端 —— */
  views['teacher-dashboard'] = async function () {
    const d = (await API.get('/api/teacher/dashboard')).data;
    let html = '<div class="page-enter"><div class="welcome"><h3>您好，' + esc(d.name) + ' ' + esc(d.title) + ' 👋</h3><p>' + esc(d.college) + '　当前学期 2026-2027 学年第一学期</p><div class="welcome-badges"><span class="wb">📚 授课 ' + d.courseCount + ' 门</span><span class="wb">👨‍🎓 学生 58 人</span></div></div>';
    html += '<div class="grid grid-4">' + statCard('blue', 'book', d.courseCount, '授课课程', '') + statCard('green', 'users', d.studentCount, '授课学生', '') + statCard('orange', 'star', d.evaluationAvg, '学生评教分', '') + statCard('purple', 'clipboard', d.entries.length, '已录成绩', '') + '</div>';
    html += '<div class="card" style="margin-top:18px"><div class="card-head"><div>' + icon('book', 18) + '</div><h4>我的课程</h4></div><div class="table-wrap"><table class="tbl"><thead><tr><th>课程名称</th><th>课程代码</th><th>学分</th><th>上课时间</th><th>地点</th></tr></thead><tbody>' + d.courses.map(c => '<tr><td style="font-weight:600">' + esc(c.name) + '</td><td>' + esc(c.code) + '</td><td>' + c.credit + '</td><td>' + esc(c.time) + '</td><td>' + esc(c.location) + '</td></tr>').join('') + '</tbody></table></div></div></div>';
    contentEl().innerHTML = html;
  };

  views['my-courses'] = async function () {
    const d = (await API.get('/api/teacher/dashboard')).data;
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('book', 18) + '</div><h4>我的课程</h4></div><div class="grid grid-2">';
    d.courses.forEach(c => {
      html += '<div style="border:1px solid var(--border);border-radius:14px;padding:18px"><div style="font-weight:700;font-size:15px">' + esc(c.name) + '</div><div style="font-size:12px;color:#8494ae;margin:4px 0 12px">' + esc(c.code) + ' · ' + c.credit + ' 学分</div><div class="kv"><span class="k" style="width:80px">上课时间</span><span class="v">' + esc(c.time) + '</span></div><div class="kv"><span class="k" style="width:80px">上课地点</span><span class="v">' + esc(c.location) + '</span></div><div class="kv"><span class="k" style="width:80px">选课人数</span><span class="v">58 人</span></div></div>';
    });
    html += '</div></div></div>';
    contentEl().innerHTML = html;
  };

  views['grade-entry'] = async function () {
    const d = (await API.get('/api/teacher/dashboard')).data;
    const sampleStudents = ['2023012345 张子墨', '2023012346 李晓彤', '2023012347 王浩然', '2023012348 赵梦琪'];
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon('edit', 18) + '</div><h4>成绩录入</h4><span class="hint">演示：录入后同步显示在下方</span></div>';
    html += '<div class="grid grid-3" style="margin-bottom:18px"><div class="form-row"><label>课程</label><select id="gCourse">' + d.courses.map(c => '<option value="' + c.id + '">' + esc(c.name) + '</option>').join('') + '</select></div><div class="form-row"><label>学生</label><select id="gStudent">' + sampleStudents.map(s => '<option value="' + s.split(' ')[0] + '">' + s + '</option>').join('') + '</select></div><div class="form-row"><label>成绩（0-100）</label><input id="gScore" type="number" min="0" max="100" placeholder="如 88"></div></div><button class="btn btn-primary" id="gAdd">' + icon('plus', 16) + ' 录入成绩</button>';
    html += '<div class="table-wrap" style="margin-top:18px"><table class="tbl"><thead><tr><th>课程</th><th>学号</th><th>成绩</th><th>录入时间</th></tr></thead><tbody id="gRows">';
    if (!d.entries.length) html += '<tr><td colspan="4" style="text-align:center;color:#8494ae">暂无录入记录</td></tr>';
    else html += d.entries.map(e => '<tr><td>' + esc((d.courses.find(c => c.id === e.courseId) || {}).name || e.courseId) + '</td><td>' + esc(e.sno) + '</td><td class="' + scoreClass(e.score) + '">' + e.score + '</td><td>' + e.time + '</td></tr>').join('');
    html += '</tbody></table></div></div></div>';
    contentEl().innerHTML = html;
    document.getElementById('gAdd').addEventListener('click', async function () {
      const courseId = $('#gCourse').value, sno = $('#gStudent').value, score = $('#gScore').value;
      if (!score || score === '') return toast('请输入成绩', false);
      const res = await API.post('/api/teacher/grade', { courseId, sno, score: Number(score) });
      if (res.ok) { toast(res.msg); $('#gScore').value = ''; views['grade-entry'](); } else toast(res.msg, false);
    });
  };

  /* —— 管理员端 —— */
  views['admin-dashboard'] = async function () {
    const d = (await API.get('/api/admin/dashboard')).data;
    let html = '<div class="page-enter"><div class="welcome"><h3>系统管理控制台 👋</h3><p>河南师范大学教务网络管理系统 · 全局数据概览</p><div class="welcome-badges"><span class="wb">🏫 ' + d.colleges + ' 个学院</span><span class="wb">📈 数据实时更新</span></div></div>';
    html += '<div class="grid grid-4">' + statCard('blue', 'users', d.studentCount, '在校学生', '') + statCard('green', 'user', d.teacherCount, '专任教师', '') + statCard('orange', 'book', d.courseCount, '课程总数', '') + statCard('purple', 'megaphone', d.notices, '通知公告', '') + '</div>';
    html += '<div class="grid grid-2" style="margin-top:18px"><div class="card"><div class="card-head"><div>' + icon('chart', 18) + '</div><h4>学生状态分布</h4></div><div class="chart-flex"><div style="width:120px;height:120px;border-radius:50%;background:conic-gradient(#2563eb 0 83%, #fbbf24 83% 100%);display:grid;place-items:center"><div style="width:88px;height:88px;border-radius:50%;background:#fff;display:grid;place-items:center;font-weight:800;color:#2563eb;font-size:18px">' + d.inSchool + '</div></div><div class="legend"><div class="lg"><span class="dot" style="background:#2563eb"></span>在学 ' + d.inSchool + ' 人</div><div class="lg"><span class="dot" style="background:#fbbf24"></span>休学 ' + (d.studentCount - d.inSchool) + ' 人</div></div></div></div><div class="card"><div class="card-head"><div>' + icon('building', 18) + '</div><h4>快速入口</h4></div><div style="display:flex;flex-direction:column;gap:10px"><button class="btn btn-outline" onclick="location.hash=\'#/students\'">' + icon('users', 16) + ' 学生管理</button><button class="btn btn-outline" onclick="location.hash=\'#/teachers\'">' + icon('user', 16) + ' 教师管理</button><button class="btn btn-outline" onclick="location.hash=\'#/notice-publish\'">' + icon('megaphone', 16) + ' 发布通知</button></div></div></div></div>';
    contentEl().innerHTML = html;
  };

  function adminTable(title, ic, cols, rows, rowFn) {
    let html = '<div class="page-enter"><div class="card"><div class="card-head"><div>' + icon(ic, 18) + '</div><h4>' + title + '</h4><span class="hint">共 ' + rows.length + ' 条</span></div><div class="table-wrap"><table class="tbl"><thead><tr>' + cols.map(c => '<th>' + c + '</th>').join('') + '</tr></thead><tbody>' + rows.map(rowFn).join('') + '</tbody></table></div></div></div>';
    contentEl().innerHTML = html;
  }

  views.students = async function () {
    const d = (await API.get('/api/admin/students')).data;
    adminTable('学生管理', 'users', ['学号', '姓名', '性别', '学院', '专业', '年级', '班级', '学籍状态'], d, s => '<tr><td>' + esc(s.sno) + '</td><td style="font-weight:600">' + esc(s.name) + '</td><td>' + esc(s.gender) + '</td><td>' + esc(s.college) + '</td><td>' + esc(s.major) + '</td><td>' + esc(s.grade) + '</td><td>' + esc(s.className) + '</td><td>' + (s.status === '在学' ? '<span class="tag green">在学</span>' : '<span class="tag orange">休学</span>') + '</td></tr>');
  };

  views.teachers = async function () {
    const d = (await API.get('/api/admin/teachers')).data;
    adminTable('教师管理', 'users', ['工号', '姓名', '学院', '职称', '授课课程'], d, t => '<tr><td>' + esc(t.tno) + '</td><td style="font-weight:600">' + esc(t.name) + '</td><td>' + esc(t.college) + '</td><td><span class="tag blue">' + esc(t.title) + '</span></td><td>' + esc(t.courses) + '</td></tr>');
  };

  views['notice-publish'] = async function () {
    let html = '<div class="page-enter"><div class="card" style="max-width:640px"><div class="card-head"><div>' + icon('megaphone', 18) + '</div><h4>发布通知</h4></div><div class="form-row"><label>通知标题</label><input id="nTitle" placeholder="请输入标题"></div><div class="form-row"><label>通知分类</label><select id="nCat"><option>选课通知</option><option>考试通知</option><option>教学检查</option><option>服务通知</option><option>评奖评优</option></select></div><div class="form-row"><label>通知内容</label><textarea id="nContent" placeholder="请输入通知内容…"></textarea></div><div class="m-actions"><button class="btn btn-primary" id="nSubmit">' + icon('check', 16) + ' 发布</button></div></div></div>';
    contentEl().innerHTML = html;
    document.getElementById('nSubmit').addEventListener('click', async function () {
      const title = $('#nTitle').value, category = $('#nCat').value, content = $('#nContent').value;
      if (!title || !content) return toast('标题和内容不能为空', false);
      const res = await API.post('/api/admin/notice', { title, category, content });
      if (res.ok) { toast(res.msg); $('#nTitle').value = ''; $('#nContent').value = ''; } else toast(res.msg, false);
    });
  };

  /* ---------- 路由 ---------- */
  function loadView() {
    if (!API.token || !API.user) { window.location.href = '/'; return; }
    const hash = (location.hash || '#/dashboard').replace('#/', '');
    const id = views[hash] ? hash : 'dashboard';
    const title = TITLES[id] || TITLES.dashboard;
    document.getElementById('pageTitle').innerHTML = title[0] + '<small>' + title[1] + '</small>';
    document.getElementById('nav').querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.id === id));
    views[id]().catch(err => { contentEl().innerHTML = empty('info', '加载失败：' + esc(err.message)); });
  }

  function renderNav() {
    const role = API.user.role;
    const items = NAV[role] || NAV.student;
    let html = '';
    items.forEach(item => {
      if (item.g) html += '<div class="nav-group"><div class="g-label">' + item.g + '</div></div>';
      else html += '<a class="nav-item" href="#/' + item.id + '" data-id="' + item.id + '">' + icon(item.i, 19) + '<span>' + item.label + '</span>' + (item.id === 'notices' ? '<span class="badge">3</span>' : '') + '</a>';
    });
    document.getElementById('nav').innerHTML = html;
  }

  window.App.initApp = function () {
    if (!API.token || !API.user) { window.location.href = '/'; return; }
    document.getElementById('sbAvatar').textContent = API.user.name.slice(0, 1);
    document.getElementById('sbName').textContent = API.user.name;
    document.getElementById('sbRole').textContent = ({ student: '学生', teacher: '教师', admin: '管理员' })[API.user.role];
    renderNav();
    window.addEventListener('hashchange', loadView);
    document.getElementById('logoutBtn').addEventListener('click', () => API.logout());
    document.getElementById('menuBtn').addEventListener('click', openSidebar);
    document.getElementById('bellBtn').addEventListener('click', () => { location.hash = '#/notices'; });
    document.getElementById('globalSearch').addEventListener('keydown', function (e) { if (e.key === 'Enter') toast('搜索为演示功能，可前往「通知公告」查看内容'); });
    if (!location.hash) location.hash = '#/dashboard';
    loadView();
  };

  window.App.initLogin = function () {
    const tabs = document.querySelectorAll('#roleTabs .role-tab');
    const userInput = document.getElementById('username');
    const passInput = document.getElementById('password');
    let role = 'student';
    tabs.forEach(t => t.addEventListener('click', function () {
      role = this.dataset.role;
      tabs.forEach(x => x.classList.toggle('active', x === this));
      userInput.placeholder = ({ student: '请输入学号', teacher: '请输入工号', admin: '请输入管理员账号' })[role];
    }));
    document.querySelectorAll('.demo-btn').forEach(b => b.addEventListener('click', function () {
      role = this.dataset.role;
      tabs.forEach(x => x.classList.toggle('active', x.dataset.role === role));
      userInput.value = this.dataset.u; passInput.value = this.dataset.p;
      userInput.placeholder = ({ student: '请输入学号', teacher: '请输入工号', admin: '请输入管理员账号' })[role];
    }));
    function doLogin() {
      const btn = document.getElementById('loginBtn');
      const username = userInput.value.trim(); const password = passInput.value;
      document.getElementById('authError').textContent = '';
      btn.disabled = true; btn.textContent = '登录中…';
      API.post('/api/login', { username, password }).then(res => {
        if (res.ok) {
          API.token = res.token; API.user = res.user;
          localStorage.setItem('henu_token', res.token);
          localStorage.setItem('henu_user', JSON.stringify(res.user));
          window.location.href = '/app';
        } else {
          document.getElementById('authError').textContent = res.msg || '登录失败';
          btn.disabled = false; btn.textContent = '登 录';
        }
      }).catch(() => { document.getElementById('authError').textContent = '网络错误，请稍后重试'; btn.disabled = false; btn.textContent = '登 录'; });
    }
    document.getElementById('loginBtn').addEventListener('click', doLogin);
    passInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
    userInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
  };
})();