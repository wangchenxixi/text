import Cookie from 'js-cookie';

const key = 'authorization';
// 获取token
export function getToken(){
  return Cookie.get(key)
}

// 设置token
export function setToken(value){
  Cookie.set(key, value, {expires: 7})
}
