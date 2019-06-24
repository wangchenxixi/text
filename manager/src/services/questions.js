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

// 创建试卷
export function createExamGet(params,id){
    console.log(params,id)
    return request({
        url:'/exam/exam/'+id,
        method:'PUT',
        data:params
    })
}
