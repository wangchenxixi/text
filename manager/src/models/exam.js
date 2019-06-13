import {exam,examadd} from '@/services'
export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        typeList:[]
    },

    // 订阅路由跳转
    subscriptions: {
        setup({
            dispatch,
            history
        }) { // eslint-disable-line},
        }
    },

    // 异步操作
    effects: {
        *getQuestionsType({payload},{call,put}){
            let data = yield call(exam)
            yield put({
                type: 'save',
                action: data.data
            });
        },
        *insertQuestionsType({payload},{call,put}){
            let data = yield call(examadd,payload);
            console.log(data)
        }
    },

    // 同步操作
    reducers: {
        save(state, {action}) {
            console.log(action)
            return {
                ...state,
                typeList: action
            };
        },
    },
};
