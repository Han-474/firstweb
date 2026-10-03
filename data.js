// 河南师范大学教务网络管理系统 - 演示种子数据
// 所有数据仅用于界面演示

const SCHOOL = {
  name: '河南师范大学',
  subName: '教务网络管理系统',
  motto: '明德 · 正学 · 倡和 · 出新',
  office: '教务处',
};

// 课程构建辅助
function c(id, code, name, credit, hours, category, teacher, weekday, start, end, weeks, location, capacity, enrolled, college, note) {
  return { id, code, name, credit, hours, category, teacher, weekday, start, end, weeks, location, capacity, enrolled, college, note: note || '' };
}

// 学生当前课表（2026-2027-1 秋季学期，已选课程）
const myCourses = [
  c('c1', 'CS30101', '操作系统', 4, 64, '专业必修', '李文博 教授', 1, 1, 2, '1-16周', '启智楼A203', 60, 58, '计算机与信息工程学院'),
  c('c2', 'CS30205', '计算机网络', 3, 48, '专业必修', '王慧敏 副教授', 2, 3, 4, '1-16周', '启智楼A305', 55, 55, '计算机与信息工程学院'),
  c('c3', 'CS30303', '机器学习', 3, 48, '专业必修', '陈立新 教授', 3, 1, 2, '1-16周', '明道楼B401', 50, 47, '计算机与信息工程学院'),
  c('c4', 'CS30402', '软件工程实践', 2, 32, '专业必修', '王慧敏 副教授', 4, 5, 6, '1-16周', '实验中心305机房', 50, 48, '计算机与信息工程学院'),
  c('c5', 'GE20101', '大学英语(五)', 2, 32, '公共必修', '刘芳 讲师', 2, 1, 2, '1-16周', '文渊楼C102', 60, 54, '外国语学院'),
  c('c6', 'GE20301', '形势与政策', 1, 16, '公共必修', '周建国 副教授', 5, 3, 4, '1-8周', '勤政楼报告厅', 200, 180, '马克思主义学院'),
  c('c7', 'PE20101', '大学体育(五)', 1, 32, '公共必修', '孙少华 讲师', 3, 7, 8, '1-16周', '西田径场', 40, 36, '体育学院'),
];

// 可选课程（选课中心）
const availableCourses = [
  c('a1', 'TS10101', '人工智能导论', 2, 32, '通识选修', '陈立新 教授', 4, 3, 4, '1-8周', '明道楼B302', 80, 62, '计算机与信息工程学院', '了解人工智能发展历程与前沿应用'),
  c('a2', 'TS10201', 'Python数据分析', 2, 32, '通识选修', '杨帆 副教授', 5, 5, 6, '1-8周', '实验中心201机房', 60, 58, '计算机与信息工程学院', '掌握 Python 数据分析基础'),
  c('a3', 'TS10301', '大学美育', 1, 16, '通识选修', '张雅文 讲师', 1, 9, 10, '1-8周', '美术学院B201', 100, 78, '美术学院', '提升审美与艺术修养'),
  c('a4', 'TS10401', '大学生心理健康教育', 1, 16, '通识选修', '赵春苗 副教授', 2, 9, 10, '1-8周', '文渊楼B105', 120, 95, '教育学部', '关注心理健康与自我成长'),
  c('a5', 'TS10501', '演讲与口才', 1, 16, '通识选修', '李志强 讲师', 3, 9, 10, '1-8周', '文渊楼A208', 60, 51, '文学院', '锻炼表达与公众演讲能力'),
  c('a6', 'TS10601', '中国传统文化概论', 2, 32, '通识选修', '王立群 教授', 4, 9, 10, '1-8周', '文渊楼B201', 100, 66, '历史文化学院', '领略中华优秀传统文化'),
];

// 成绩数据（历史学期）
const grades = [
  // 2025-2026-2 大三下
  { courseCode: 'CS30601', courseName: '信息安全概论', credit: 2, score: 85, category: '专业选修', term: '2025-2026-1', examType: '考试' },
  { courseCode: 'CS30602', courseName: '大数据技术', credit: 3, score: 88, category: '专业选修', term: '2025-2026-1', examType: '考试' },
  { courseCode: 'CS30603', courseName: '软件工程', credit: 3, score: 83, category: '专业必修', term: '2025-2026-1', examType: '考试' },
  { courseCode: 'CS30604', courseName: 'Web开发技术', credit: 3, score: 91, category: '专业必修', term: '2025-2026-1', examType: '考试' },
  { courseCode: 'CS30605', courseName: '计算机图形学', credit: 3, score: 86, category: '专业选修', term: '2025-2026-1', examType: '考查' },
  { courseCode: 'GE30601', courseName: '毛泽东思想与中国特色社会主义', credit: 3, score: 84, category: '公共必修', term: '2025-2026-1', examType: '考试' },
  // 2025-2026-1 大三上
  { courseCode: 'CS30501', courseName: '编译原理', credit: 3, score: 84, category: '专业必修', term: '2025-2026-2', examType: '考试' },
  { courseCode: 'CS30502', courseName: '人工智能', credit: 3, score: 88, category: '专业必修', term: '2025-2026-2', examType: '考试' },
  { courseCode: 'CS30503', courseName: '算法设计与分析', credit: 3, score: 89, category: '专业必修', term: '2025-2026-2', examType: '考试' },
  { courseCode: 'CS30504', courseName: '数据库系统原理', credit: 3, score: 90, category: '专业必修', term: '2025-2026-2', examType: '考试' },
  { courseCode: 'GE30501', courseName: '形势与政策(四)', credit: 0.5, score: 92, category: '公共必修', term: '2025-2026-2', examType: '考查' },
  // 2024-2025-2 大二下
  { courseCode: 'CS30401', courseName: '操作系统', credit: 4, score: 84, category: '专业必修', term: '2024-2025-2', examType: '考试' },
  { courseCode: 'CS30402', courseName: '计算机网络', credit: 3, score: 87, category: '专业必修', term: '2024-2025-2', examType: '考试' },
  { courseCode: 'CS30403', courseName: '概率论与数理统计', credit: 3, score: 85, category: '学科基础', term: '2024-2025-2', examType: '考试' },
  { courseCode: 'CS30404', courseName: '离散数学', credit: 3, score: 88, category: '学科基础', term: '2024-2025-2', examType: '考试' },
  { courseCode: 'GE30401', courseName: '大学英语(四)', credit: 3, score: 86, category: '公共必修', term: '2024-2025-2', examType: '考试' },
  // 2024-2025-1 大二上
  { courseCode: 'CS30301', courseName: '计算机组成原理', credit: 4, score: 86, category: '专业必修', term: '2024-2025-1', examType: '考试' },
  { courseCode: 'CS30302', courseName: '数字逻辑', credit: 3, score: 89, category: '学科基础', term: '2024-2025-1', examType: '考试' },
  { courseCode: 'CS30303', courseName: '数据结构', credit: 4, score: 91, category: '专业必修', term: '2024-2025-1', examType: '考试' },
  { courseCode: 'GE30301', courseName: '马克思主义基本原理', credit: 3, score: 85, category: '公共必修', term: '2024-2025-1', examType: '考试' },
  { courseCode: 'GE30302', courseName: '大学英语(三)', credit: 3, score: 87, category: '公共必修', term: '2024-2025-1', examType: '考试' },
  // 2023-2024-2 大一下
  { courseCode: 'CS20201', courseName: '程序设计基础(C语言)', credit: 4, score: 90, category: '专业必修', term: '2023-2024-2', examType: '考试' },
  { courseCode: 'CS20202', courseName: '高等数学(下)', credit: 5, score: 82, category: '学科基础', term: '2023-2024-2', examType: '考试' },
  { courseCode: 'CS20203', courseName: '线性代数', credit: 3, score: 87, category: '学科基础', term: '2023-2024-2', examType: '考试' },
  { courseCode: 'GE20201', courseName: '大学英语(二)', credit: 3, score: 86, category: '公共必修', term: '2023-2024-2', examType: '考试' },
  { courseCode: 'GE20202', courseName: '中国近现代史纲要', credit: 3, score: 84, category: '公共必修', term: '2023-2024-2', examType: '考试' },
  // 2023-2024-1 大一上
  { courseCode: 'CS20101', courseName: '计算机导论', credit: 2, score: 92, category: '专业必修', term: '2023-2024-1', examType: '考查' },
  { courseCode: 'CS20102', courseName: '高等数学(上)', credit: 5, score: 88, category: '学科基础', term: '2023-2024-1', examType: '考试' },
  { courseCode: 'GE20101', courseName: '大学英语(一)', credit: 3, score: 85, category: '公共必修', term: '2023-2024-1', examType: '考试' },
  { courseCode: 'GE20102', courseName: '思想道德与法治', credit: 3, score: 86, category: '公共必修', term: '2023-2024-1', examType: '考试' },
  { courseCode: 'PE20101', courseName: '大学体育(一)', credit: 1, score: 90, category: '公共必修', term: '2023-2024-1', examType: '考查' },
];

// 考试安排（当前学期）
const exams = [
  { id: 'e1', courseName: '操作系统', date: '2026-12-28', time: '09:00-11:00', location: '启智楼A203', seatNo: '12', status: '待考', examType: '期末考试' },
  { id: 'e2', courseName: '计算机网络', date: '2026-12-29', time: '09:00-11:00', location: '启智楼A305', seatNo: '18', status: '待考', examType: '期末考试' },
  { id: 'e3', courseName: '机器学习', date: '2026-12-30', time: '14:30-16:30', location: '明道楼B401', seatNo: '07', status: '待考', examType: '期末考试' },
  { id: 'e4', courseName: '大学英语(五)', date: '2027-01-04', time: '09:00-11:00', location: '文渊楼C102', seatNo: '23', status: '待考', examType: '期末考试' },
  { id: 'e5', courseName: '软件工程实践', date: '2027-01-05', time: '14:30-17:30', location: '实验中心305机房', seatNo: '15', status: '待考', examType: '期末考核' },
];

// 考试报名
const examRegistrations = [
  { id: 'r1', examName: '全国大学英语四级考试(CET-4)', examDate: '2026-12-12', deadline: '2026-11-10', fee: 30, category: '等级考试', status: '报名中', registered: false, desc: '面向在校本科生组织的全国性英语水平考试' },
  { id: 'r2', examName: '全国大学英语六级考试(CET-6)', examDate: '2026-12-13', deadline: '2026-11-10', fee: 32, category: '等级考试', status: '报名中', registered: true, desc: '已通过四级的同学可报名参加' },
  { id: 'r3', examName: '全国计算机等级考试(二级Python)', examDate: '2027-03-14', deadline: '2027-02-01', fee: 120, category: '等级考试', status: '未开始', registered: false, desc: '全国计算机等级考试二级 Python 语言程序设计' },
  { id: 'r4', examName: '普通话水平测试', examDate: '2026-11-21', deadline: '2026-10-31', fee: 25, category: '资格测试', status: '报名中', registered: false, desc: '国家普通话水平等级测试' },
  { id: 'r5', examName: '中小学教师资格考试(笔试)', examDate: '2027-03-14', deadline: '2027-01-31', fee: 70, category: '资格测试', status: '未开始', registered: false, desc: '面向有志从教的在校学生' },
];

// 活动报名
const activities = [
  { id: 'act1', name: '2026 秋季校园马拉松挑战赛', organizer: '校团委 / 体育学院', date: '2026-10-18', location: '东区田径场', capacity: 500, enrolled: 386, category: '体育竞技', registered: false, desc: '挑战自我，跑出青春，全体师生均可报名' },
  { id: 'act2', name: '“编程之美”程序设计竞赛', organizer: '计算机与信息工程学院', date: '2026-11-02', location: '实验中心三楼机房', capacity: 120, enrolled: 108, category: '学科竞赛', registered: true, desc: '以赛促学，锻炼算法与程序设计能力' },
  { id: 'act3', name: '大学生创新创业大赛校园选拔', organizer: '创新创业学院', date: '2026-11-16', location: '大学生活动中心', capacity: 200, enrolled: 165, category: '创新创业', registered: false, desc: '点燃创新梦想，展示创业风采' },
  { id: 'act4', name: '师范生教学技能大赛', organizer: '教务处 / 教师教育学院', date: '2026-11-24', location: '明道楼报告厅', capacity: 150, enrolled: 97, category: '专业技能', registered: false, desc: '三尺讲台，展示未来教师风采' },
  { id: 'act5', name: '“书香师大·经典诵读”读书会', organizer: '图书馆 / 文学院', date: '2026-10-25', location: '图书馆二楼报告厅', capacity: 80, enrolled: 64, category: '文化活动', registered: false, desc: '共读经典，品味书香' },
];

// 教学评价（待评课程）
const evaluationCourses = [
  { id: 'ev1', courseName: '操作系统', teacher: '李文博 教授', evaluated: false, avgScore: 4.6 },
  { id: 'ev2', courseName: '计算机网络', teacher: '王慧敏 副教授', evaluated: false, avgScore: 4.5 },
  { id: 'ev3', courseName: '机器学习', teacher: '陈立新 教授', evaluated: false, avgScore: 4.7 },
  { id: 'ev4', courseName: '软件工程实践', teacher: '王慧敏 副教授', evaluated: false, avgScore: 4.4 },
  { id: 'ev5', courseName: '大学英语(五)', teacher: '刘芳 讲师', evaluated: false, avgScore: 4.3 },
];

// 通知公告
const notices = [
  { id: 'n1', title: '关于2026-2027学年第一学期学生网上选课的通知', date: '2026-10-02', category: '选课通知', top: true, content: '本学期选课分为预选、正选、补退选三个阶段，请同学们在规定时间内登录系统完成选课，逾期不再受理。' },
  { id: 'n2', title: '关于开展2026年秋季学期期中教学检查的通知', date: '2026-10-01', category: '教学检查', top: false, content: '学校将于第9-10周开展期中教学检查，请各教学单位做好相关准备工作。' },
  { id: 'n3', title: '全国大学英语四、六级考试报名通知', date: '2026-09-28', category: '考试通知', top: true, content: '2026年下半年四六级考试报名已开始，请同学们于11月10日前完成报名与缴费。' },
  { id: 'n4', title: '关于做好2027届本科毕业生图像信息采集工作的通知', date: '2026-09-25', category: '毕业相关', top: false, content: '请2027届毕业生按规定时间到指定地点完成图像信息采集。' },
  { id: 'n5', title: '河南师范大学奖学金评定结果公示', date: '2026-09-20', category: '评奖评优', top: false, content: '2025-2026学年奖学金评定结果已公示，如有异议请于公示期内反馈。' },
  { id: 'n6', title: '图书馆关于延长开放时间的通知', date: '2026-09-15', category: '服务通知', top: false, content: '为方便学生备考，图书馆自本周起延长开放至22:30。' },
];

// 学生列表（管理员端）
const studentList = [
  { sno: '2023012345', name: '张子墨', gender: '男', college: '计算机与信息工程学院', major: '计算机科学与技术', grade: '2023级', className: '计科2301班', status: '在学' },
  { sno: '2023012346', name: '李晓彤', gender: '女', college: '计算机与信息工程学院', major: '软件工程', grade: '2023级', className: '软工2301班', status: '在学' },
  { sno: '2023012347', name: '王浩然', gender: '男', college: '文学院', major: '汉语言文学', grade: '2023级', className: '中文2301班', status: '在学' },
  { sno: '2023012348', name: '赵梦琪', gender: '女', college: '外国语学院', major: '英语', grade: '2023级', className: '英语2302班', status: '在学' },
  { sno: '2023012349', name: '刘一鸣', gender: '男', college: '数学与信息科学学院', major: '数学与应用数学', grade: '2023级', className: '数学2301班', status: '休学' },
  { sno: '2023012350', name: '陈雨桐', gender: '女', college: '物理学院', major: '物理学', grade: '2023级', className: '物理2301班', status: '在学' },
];

// 教师列表（管理员端）
const teacherList = [
  { tno: '10101', name: '李文博', college: '计算机与信息工程学院', title: '教授', courses: '操作系统 / 人工智能导论' },
  { tno: '10102', name: '王慧敏', college: '计算机与信息工程学院', title: '副教授', courses: '计算机网络 / 软件工程实践' },
  { tno: '10103', name: '陈立新', college: '计算机与信息工程学院', title: '教授', courses: '机器学习 / 人工智能导论' },
  { tno: '20101', name: '刘芳', college: '外国语学院', title: '讲师', courses: '大学英语(五)' },
  { tno: '30101', name: '周建国', college: '马克思主义学院', title: '副教授', courses: '形势与政策' },
];

// 当前登录使用的学生
const currentStudent = {
  id: 'stu_2023012345',
  sno: '2023012345',
  username: '2023012345',
  name: '张子墨',
  gender: '男',
  role: 'student',
  password: '123456',
  avatarColor: '#2563eb',
  college: '计算机与信息工程学院',
  major: '计算机科学与技术',
  grade: '2023级',
  className: '计科2301班',
  profile: {
    studentNo: '2023012345',
    name: '张子墨',
    gender: '男',
    birthDate: '2004-06-18',
    idCard: '41078220040618****',
    ethnicity: '汉族',
    politics: '共青团员',
    college: '计算机与信息工程学院',
    major: '计算机科学与技术',
    grade: '2023级',
    className: '计科2301班',
    enterYear: '2023',
    studentStatus: '在学',
    educationLevel: '本科',
    campus: '本部校区',
    dormitory: '桂园3号楼 215室',
    phone: '138 **** 5678',
    email: 'zhangzimo@stu.htu.edu.cn',
    totalCredits: 118,
    requiredCredits: 160,
    gpa: 3.6,
    ranking: '12 / 156',
  },
  selectedCourseIds: [], // 用户选课新增的课程 id
};

const teacher = {
  id: 'tea_10101',
  username: '10101',
  name: '李文博',
  role: 'teacher',
  password: '123456',
  avatarColor: '#0ea5e9',
  college: '计算机与信息工程学院',
  title: '教授',
  profile: { tno: '10101', name: '李文博', college: '计算机与信息工程学院', title: '教授', phone: '139 **** 1234', email: 'liwenbo@htu.edu.cn' },
};

const admin = {
  id: 'admin',
  username: 'admin',
  name: '系统管理员',
  role: 'admin',
  password: 'admin123',
  avatarColor: '#1d4ed8',
  profile: { name: '系统管理员', dept: '教务处' },
};

module.exports = {
  SCHOOL,
  currentStudent,
  teacher,
  admin,
  myCourses,
  availableCourses,
  grades,
  exams,
  examRegistrations,
  activities,
  evaluationCourses,
  notices,
  studentList,
  teacherList,
};