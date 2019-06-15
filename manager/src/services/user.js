import request from '../utils/request';

export function login(params){
    // console.log('params....',params)
    return request({
        url: '/user/login',
        method: 'POST',
        data: params
    })
}

export function exam(params){
    return request({
        data:params,
        url:'/exam/getQuestionsType',
        method:'GET'
    })
}
export function examadd(params){
    return request({
        url:`/exam/insertQuestionsType?text=${params.text}&sort=${params.sort}`,
    })
}
// 获取用户信息
export function userInfo(){
    return request({
        url:'/user/userInfo',
        method:'GET'
    })
}

export function getQuestions(){
    return request({
        url:'/exam/questions/new',
        method:'GET'
    })
}

export function getDetailData(params){
    return request({
        params:{
            questions_id:params
        },
        url:'/exam/questions/condition',
        method:'GET'
    })
}



