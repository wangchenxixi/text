import dynamic from 'dva/dynamic';

// 引入路由
// 
const QuestionsAdd =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/questionsAdd/questionsAdd'),
});
const QuestionsType =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/QuestionsType/QuestionsType'),
});
const QuestionsSee =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/QuestionsSee/QuestionsSee'),
});
const QuestionsEdit =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/questionsEdit/questionsEdit'),
});
const QuestionDetail =  dynamic({
    component: () => import('@/views/Meun/questionsManagement/questionDetail/questionDetail'),
});
// 用户管理
const UserAdd =  dynamic({
    component: () => import('@/views/Meun/userManagement/userAdd'),
});
const UserSee =  dynamic({
    component: () => import('@/views/Meun/userManagement/userSee'),
});
// 考试管理
const ExamAdd =  dynamic({
    component: () => import('@/views/Meun/examManagement/examAdd'),
});
const ExamList =  dynamic({
    component: () => import('@/views/Meun/examManagement/examList'),
});
const ExamEdit =  dynamic({
    component: () => import('@/views/Meun/examManagement/examEdit'),
});
// 班级管理
const ClassManagement =  dynamic({
    component: () => import('@/views/Meun/classManagement/classManagement/classManagement'),
});
const ClassRoom =  dynamic({
    component: () => import('@/views/Meun/classManagement/classRoom/classromm'),
});
const ClassStudent =  dynamic({
    component: () => import('@/views/Meun/classManagement/classStudent/classStudent'),
});
// 批卷管理
const MarkingManagement =  dynamic({
    component: () => import('@/views/Meun/markingManagement/markingManagement/markingManagement'),
});
const MarkingMark =  dynamic({
    component: () => import('@/views/Meun/markingManagement/markingMarking/makingMarking'),
});

export default {
    routes: [{ // 试题管理
        name: 'router.questions',
        children: [{
            name: 'router.questions.add',
            id: 'main-addQuestions',
            path: '/questions/add',
            component: QuestionsAdd
        },{
            name: 'router.questions.List',
            id: 'main-watchQuestions',
            path: '/questions/See',
            component: QuestionsSee
        },{
            name: 'router.questions.Type',
            id: 'main-questionsType',
            path: '/questions/type',
            component: QuestionsType
        },{
            name: '编辑试题',
            id: 'main-editQuestions',
            path: '/questions/edit/:id',
            component: QuestionsEdit
        },{
            name: '试题详情',
            id: 'main-questionsDetail',
            path: '/questions/detail/:id',
            component: QuestionDetail
        },]
    },{  // 用户管理
        name: '用户管理',
        children: [{
            name: '添加用户',
            id: 'main-addUser',
            path: '/user/add',
            component: UserAdd
        },{
            name: '用户展示',
            id: 'main-showUser',
            path: '/user/see',
            component: UserSee
        }]
    },{ // 考试管理
        name: '考试管理',
        children: [{
            name: '添加考试',
            id: 'main-addExam',
            path: '/exam/add',
            component: ExamAdd
        },{
            name: '试卷列表',
            id: 'main-examList',
            path: '/exam/list',
            component: ExamList
        },{
            name: '创建试卷',
            id: 'main-examEdit',
            path: '/exam/edit',
            component: ExamEdit
        }]
    },{ // 班级管理
        name: '班级管理',
        children: [{
            name: '班级管理',
            id: 'main-grade',
            path: '/class/management',
            component: ClassManagement
        },{
            name: '教室管理',
            id: 'main-room',
            path: '/class/classroom',
            component: ClassRoom
        },{
            name: '学生管理',
            id: 'main-student',
            path: '/class/student',
            component: ClassStudent
        }]
    },{ // 批卷管理
        name: '批卷管理',
        children: [{
            name: '待批班级',
            id: 'main-examPaperClassList',
            path: '/class/special',
            component: MarkingManagement
        },{
            name: '待批试卷',
            id: 'main-examPaperClassmate',
            path: '/class/marking/:grade_id',
            component: MarkingMark
        }]
    }]
}