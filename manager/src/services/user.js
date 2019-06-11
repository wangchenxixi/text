import request from '../utils/request';

export function login(params) {
    console.log(params)
  return request({
      method:'POST',
      data:params,
      url:'/user/login'
  });
}
