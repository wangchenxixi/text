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
        url:'/exam/questions/condition',
        method:'PUT',
        params
    })
}