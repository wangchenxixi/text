import { login, userInfo, getUserId, getData, userAdd,editAdd,apiAdd,getAddViews,setAddViews,getApiData,getApiView,getApiViewStatus,upDateUserId,userShow,userIdentity,userApi,userIdentity_api,userView_authority,userIdentity_view,getViewAuthority} from '@/services'
import { setToken, getToken } from '@/utils/user';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
// 引入路由表
import allView from '@/router/config.js';

export default {
    // 命名空间
    namespace: 'user',

    // 模块内部的状态
    state: {
        isLogin: 0,
        userInfoData: {},
        // 用户数据
        userData: [],
        // 身份数据 
        userIdentityData: [],
        // api接口权限
        userApiData: [],
        // 身份和api权限关系  
        userIdentity_apiData: [],
        // 视图接口权限   
        userView_authorityData: [],
        // 身份和视图权限关系
        userIdentity_viewData: [],

        getUserIDs:[],
        getUserDatas:[],
        addUserCode:0,
        viewData:[],
        getApiViewData:[],

        viewAuthority: [],  // 用户所拥有的视图权限
        myView: [],  // 拥有权限的前端路由
        forbiddenView: [] //没有权限访问的路由
    },

    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }) { // eslint-disable-line
            return history.listen(({ pathname }) => {
                // 1. 判断去的页面是否是登录页
                if(pathname.indexOf('/login') === -1){
                    // 不去登录页；做token检测
                    // 如果没有登录跳到登录页
                    if(!getToken()){
                        // 1.1 有登录态，利用redux做路由跳转
                        dispatch(routerRedux.replace({
                            pathname: `/login`,
                            search: `?redirect=${encodeURIComponent(pathname)}`
                        }))
                    }else{
                        // 1.2 有登录态，请求用户信息，请求用户权限
                        dispatch({
                            type: 'getUserInfoAll'
                        })
                    }
                }else{
                    // 去登录页，如果已经登录跳回首页
                    if(getToken()){
                        dispatch(routerRedux.replace({
                            pathname: '/'
                        }))
                    }
                }
            })
        },
    },

    // 异步操作
    effects: {
        *login({payload},{call,put}){
            let data = yield call(login,payload)
            // 设置登录态到cookie里
            if(data.code === 1){
                setToken(data.token)
            }

            yield put({
                type: 'save',
                action: data.code === 1 ? 1 : -1
            });
        },
        *userInfo({payload},{call,put}){
            let data = yield call(userInfo);
            yield put({
                type: 'getUserInfo',
                action: data.data
            });
        },
        // 用户数据
        *userShow({payload},{call,put}){
            let data = yield call(userShow);
            yield put({
                type: 'getUserShow',
                action: data.data
            });
        },
        // 身份数据
        *userIdentity({payload},{call,put}){
            let data = yield call(userIdentity);
            yield put({
                type: 'getUserIdentity',
                action: data.data
            });
        },
        // api接口权限
        *userApi({payload},{call,put}){
            let data = yield call(userApi);
            yield put({
                type: 'getUserApi',
                action: data.data
            });
        },
        // 身份和api权限关系  
        *userIdentity_api({payload},{call,put}){
            let data = yield call(userIdentity_api);
            yield put({
                type: 'getUserIdentity_api',
                action: data.data
            });
        },
        // 视图接口权限   
        *userView_authority({payload},{call,put}){
            let data = yield call(userView_authority);
            yield put({
                type: 'getUserView_authority',
                action: data.data
            });
        },
        // 身份和视图权限关系
        *userIdentity_view({payload},{call,put}){
            let data = yield call(userIdentity_view);
            yield put({
                type: 'getUserIdentity_view',
                action: data.data
            });
        },

        *userID({payload},{call,put}){
            let data = yield call(getUserId);
            yield put({
                type:'getUserID',
                action:data.data
            })
        },
        *userData({payload},{call,put}){
            let data = yield call(getData)
            yield put({
                type:'getUserData',
                action:data.data
            })
        },
        *addUsers({payload},{call,put}){
            let data = yield call(userAdd,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *editData({payload},{call,put}){
            let data = yield call(editAdd,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *ApiData({payload},{call,put}){
            let data = yield call(apiAdd,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *getView({payload},{call,put}){
            let data = yield call(getAddViews)
            yield put({
                type:'getViews',
                action:data.data
            })
        },
        *addViews({payload},{call,put}){
            let data = yield call(setAddViews,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *getApiViews({payload},{call,put}){
            let data = yield call(getApiData)
            yield put({
                type:'getApiViewS',
                action:data.data
            })
        },
        *getApiViewData({payload},{call,put}){
            let data=yield call(getApiView,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *getApiStatus({payload},{call,put}){
            let data=yield call(getApiViewStatus,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *upDataUser({payload},{call,put}){
            let data=yield call(upDateUserId,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        // 请求用户信息，请求用户权限
        *getUserInfoAll({payload},{call, put, select}){
            // 1. 判断是否有权限信息
            let myView = yield select(state=>state.user.myView);
            // console.log('请求用户信息...',myView)
            if(myView.length){
                return;
            }
            // 2. 获取用户信息
            let datas = yield call(userInfo);
            // console.log('获取用户信息...',datas);
            yield put({
                type: 'getUserInfo',
                action: datas.data
            });
            // 3. 根据id获取视图权限
            let viewAuthority = yield call(getViewAuthority, datas.data.user_id);
            // console.log('根据id获取视图权限...',viewAuthority)
            yield put({
                type: 'updateViewAuthority',
                action: viewAuthority.data
            })
        }
    },

    // 同步操作
    reducers: {
        save(state, {action}) {
            return {
                ...state,
                isLogin: action
            };
        },
        getUserInfo(state, {action}){
            return {
                ...state,
                userInfoData: action
            };
        },
        // 用户数据
        getUserShow(state, {action}){
            return {
                ...state,
                userData: action
            }
        },
        // 身份数据
        getUserIdentity(state, {action}){
            return {
                ...state,
                userIdentityData: action
            }
        },
        // api接口权限
        getUserApi(state, {action}){
            return {
                ...state,
                userApiData: action
            }
        },
        // 身份和api权限关系  
        getUserIdentity_api(state, {action}){
            return {
                ...state,
                userIdentity_apiData: action
            }
        },
        // 视图接口权限   
        getUserView_authority(state, {action}){
            return {
                ...state,
                userView_authorityData: action
            }
        },
        // 身份和视图权限关系
        getUserIdentity_view(state, {action}){
            return {
                ...state,
                userIdentity_viewData: action
            }
        },
        getUserID(state,{action}){
            return {
                ...state,
                getUserIDs:action
            }
        },
        getUserData(state,{action}){
            return {
                ...state,
                getUserDatas:action
            }
        },
        getViews(state,{action}){
            return {
                ...state,
                viewData:action
            }
        },
        getApiViewS(state,{action}){
            return {
                ...state,
                getApiViewData:action
            }
        },
        // 3. 根据id获取视图权限
        updateViewAuthority(state,{action}){
            // 筛选出所有的前端路由权限
            let myView = allView.routes;
            let forbiddenView = [];
            myView.forEach(item => {
                item.children = item.children.filter(value => {
                    if(action.findIndex(id => id.view_id===value.id) !== -1){
                        return true;
                    }else{
                        forbiddenView.push(value.path);
                        return false;
                    }
                })
            })
            return {
                ...state,
                viewAuthority: action,
                myView,
                forbiddenView
            }
        }
    },
};
