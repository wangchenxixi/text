import { userData, liderData, apiData, identityData, viewData, andData } from '@/services'

export default {
    // 命名空间
    namespace: 'data',

    // 模块内部的状态
    state: {
        userData: [],
        liderData: [],
        apiData: [],
        identityData: [],
        viewData: [],
        andData: []

    },

    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }) { }
    },

    // 异步操作
    effects: {
        *userData({ payload }, { call, put }) {

            let data = yield call(userData);
            console.log('data...', data)

            // 设置登录态到cookie里
            yield put({
                type: 'userDatas',
                action: data.data
            });
        },
        *liderData({ payload }, { call, put }) {
            // console.log('payload...',payload)
            let data = yield call(liderData);


            // 设置登录态到cookie里
            yield put({
                type: 'liderDatas',
                action: data.data
            });
        },
        *apiData({ payload }, { call, put }) {
            console.log('payload...', payload)
            let data = yield call(apiData);


            // 设置登录态到cookie里
            yield put({
                type: 'apiDatas',
                action: data.data
            });
        },
        *identityData({ payload }, { call, put }) {
            let data = yield call(identityData);
            console.log('payload...', payload)
            // 设置登录态到cookie里
            yield put({
                type: 'identityDatas',
                action: data.data
            });
        },
        *viewData({ payload }, { call, put }) {
            let data = yield call(viewData);
            console.log('payload...', payload)
            // 设置登录态到cookie里
            yield put({
                type: 'viewDatas',
                action: data.data
            });
        },
        *andData({ payload }, { call, put }) {
            let data = yield call(andData);
            console.log('payload...', payload)
            // 设置登录态到cookie里
            yield put({
                type: 'andDatas',
                action: data.data
            });
        },
    },
    // 同步操作
    reducers: {
        userDatas(state, { action }) {
            return {
                ...state,
                userData: action
            };
        },
        liderDatas(state, { action }) {
            return {
                ...state,
                liderData: action
            };
        },
        apiDatas(state, { action }) {
            return {
                ...state,
                apiData: action
            };
        },
        identityDatas(state, { action }) {
            return {
                ...state,
                identityData: action
            };
        },
        viewDatas(state, { action }) {
            return {
                ...state,
                viewData: action
            };
        },
        andDatas(state, { action }) {
            return {
                ...state,
                andData: action
            };
        }
    }

}
