import Cookie from 'js-cookie';

const key = 'authorization';

// 获取token
export function getToken(){
    return Cookie.get(key);
}

// 设置token
export function setToken(val){
    // expires 设置有效期7天
    Cookie.set(key, val, { expires: 7 })
}