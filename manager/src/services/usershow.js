import request from '../utils/request';

export function userData(params){
    // console.log('params....',params)
    return request({
        url: '/user/user',
        method: 'GET'
    })
}
export function liderData(params){
    console.log('params....',params)
    return request({
        url: '/user/identity',
        method: 'GET'
    })
}  
export function apiData(params){
    // console.log('params....',params)
    return request({
        url: '/user/api_authority',
        method: 'GET'
    })
}
export function identityData(params){
    // console.log('params....',params)
    return request({
        url: '/user/identity_api_authority_relation',
        method: 'GET'
    })
}

export function viewData(params){
    // console.log('params....',params)
    return request({
        url: '/user/view_authority',
        method: 'GET'
    })
}
export function andData(params){
    // console.log('params....',params)
    return request({
        url: '/user/identity_view_authority_relation',
        method: 'GET'
    })
}