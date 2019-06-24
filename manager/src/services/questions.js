import request from '../utils/request';

// 添加试题
export function add(params){
    return request({
        url:'/exam/questions',
        method:'POST',
        data: params
    })
}
 
// 获取考试类型
export function examType(){
    return request({
        url:'/exam/examType',
        method:'GET'
    })
}

// 获取课程类型
export function subjectType(){
    return request({
        url:'/exam/subject',
        method:'GET'
    })
}

// 获取题目类型
export function getQuestionsType(){
    return request({
        url:'/exam/getQuestionsType',
        method:'GET'
    })
}

// 按条件获取试题
export function getQuestion(params){
    return request({
        url:'/exam/questions/condition',
        method:'GET',
        params: params
    })
}

// 获取单个试题
export function questionsOnly(params){
    return request({
        url:'/exam/questions/condition',
        method:'GET',
        params: params
    })
}

// 更新试题
export function questionsUpdate(params){
    return request({
        url:'/exam/questions/update',
        method:'PUT',
        data:params
    })
}

// 添加考试
export function examAdd(params){
    return request({
        url:'/exam/exam',
        method:'POST',
        data:params
    })
}

// 获取试卷列表
export function examList(params){
    return request({
        url:'/exam/exam',
        method:'GET',
        params
    })
}
// 获取试卷详情（教师端）接口
export function details(params) {
    // console.log(params)
    return request({
        url: `/exam/exam/${params}`,
        method: 'GET'
    })
}
//获取所有没有分班的学生接口
export function Newstudent(params) {
    return request({
        url: '/manger/student',
        method: 'GET',
        params
    })
}
//获取全部教室
export function Room1(params) {
    return request({
        url: '/manger/room',
        method: 'GET',
        params
    })
}
//全部班级
export function details11(params) {
    return request({
        url: '/manger/grade/new',
        method: 'GET',
        params
    })
}
//删除学生接口
export function delstudent(params) {
    console.log(params);
    return request({
        data:{
            student_id:params
        },
        url: `/manger/student/:id=>${params}`,
        method: 'DELETE',
        params
    })
}
//获取学生试卷列表
export function studentList(params) {
    return request({
        url: '/exam/student',
        method: 'GET',
        params
    })
}

