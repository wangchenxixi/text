import { addusers} from '@/services'

export default {
    // 命名空间
    namespace: 'usecontrol',

    // 模块内部的状态
    state: {
        addusers: []
    },

    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }){}
    },

    // 异步操作
    effects: {
        *addusers({payload},{call,put}){
            // console.log('payload...',payload)
            let data = yield call(addusers);
            console.log('data...',data)

            // 设置登录态到cookie里
            yield put({
                type: 'addusers',
                action: data.data
            });
        }
    },

    // 同步操作
    reducers: {
        addusers(state, {action}) {
            return {
                ...state,
                addusers: action
            };
        }
    }
};
