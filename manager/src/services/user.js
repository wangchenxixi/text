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

// 用户数据
export function userShow(){
    return request({
        url:'/user/user',
    })
}
export function getUserId(){
    return request({
        url:'/user/identity',
        method:'GET'
    })
}


// 身份数据
export function userIdentity(){
    return request({
        url:'/user/identity',
        method:'GET'
    })
}
export function getData(){
    return request({
        url:'/user/user',
        method:'GET'
    })
}

export function userAdd(params){
    return request({
        data:{
            user_name:params.userName,
            user_pwd:params.userPwd,
            identity_id:params.userId
        },
        url:'/user',
        method:'POST'
    })
}

export function editAdd(params){
    return request({
        params:{
            identity_text:params.identityName,
        },
        url:'/user/identity/edit',
        method:'GET'
    })
}

export function apiAdd(params){
    console.log(params)
    return request({
        params:{
            api_authority_text:params.apiIdentity,
            api_authority_url:params.apiIdentityUr,
            api_authority_method:params.apiIdentityFunc
        },
        url:'/user/authorityApi/edit',
        method:'GET'
    })
}

export function getAddViews(){
    return request({
        url:'/user/view_authority',
        method:'GET'
    })
}

export function setAddViews(params){
    return request({
        params:{
            view_authority_text:params.addView,
            view_id:params.addView
        },
        url:'/user/authorityView/edit',
        method:'GET'
    })
}

export function getApiData(){
    return request({
        url:'/user/identity_api_authority_relation',
        method:'GET'
    })
}

export function getApiView(params){
    console.log(params)
    return request({
        params:{
            api_authority_text:params.setPower,
            api_authority_url:params.setID,
            api_authority_method:params.setPower
        },
        url:'/user/authorityApi/edit',
        method:'GET'
    })
}

export function getApiViewStatus(params){
    console.log(params)
    return request({
        params:{
            identity_id:params.statusId,
            view_authority_id:params.viewId
        },
        url:'/user/setIdentityView',
        method:'GET'
    })
}

export function upDateUserId(params){
    console.log(params)
    return request({
        params:{
            user_id:params.userId,
            user_name:params.userName,
            user_pwd:params.userPwd,
            identity_id:params.upData
        },
        url:'/user/setIdentityView',
        method:'GET'
    })
}


// api接口权限
export function userApi(){
    return request({
        url:'/user/api_authority',
        method:'GET'
    })
}

// 身份和api权限关系
export function userIdentity_api(){
    return request({
        url:'/user/identity_api_authority_relation',
        method:'GET'
    })
}

// 视图接口权限
export function userView_authority(){
    return request({
        url:'/user/view_authority',
        method:'GET'
    })
}

// 身份和视图权限关系
export function userIdentity_view(){
    return request({
        url:'/user/identity_view_authority_relation',
        method:'GET'
    })
}

// 获取用户权限
export function getViewAuthority(user_id){
    return request({
      url: '/user/new?user_id='+user_id
    })
  }
  