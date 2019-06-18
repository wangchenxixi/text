import request from '../utils/request';

export function addusers(params){
    // console.log('params....',params)
    return request({
        url: '/user/new',
        method: 'GET'
    })
}



