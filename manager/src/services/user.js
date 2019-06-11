<<<<<<< HEAD
import request from '../utils/request';

export function login(params) {
    console.log(params)
  return request({
      method:'POST',
      data:params,
      url:'/user/login'
  });
}
=======
import request from "../utils/request";
export function login(params) {
    return request({
        url: "/user/login",
        method: "POST",
        data: params
    })
}
>>>>>>> d02081af8710a8781c163202b8129d7709d06d2a
