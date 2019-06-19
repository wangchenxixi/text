import {exam,examadd,getDetailData} from '@/services'
export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        typeList:[],
        getDetailDates:[]
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
            yield call(examadd,payload);
        },
        *detail({payload},{call,put}){
            console.log(payload)
            let data = yield call(getDetailData,payload);
            yield put({
                type:'getDetailsData',
                action:data.data
            })
        }
    },

    // 同步操作
    reducers: {
        save(state, {action}) {
            return {
                ...state,
                typeList: action
            };
        },
        getDetailsData(state, {action}) {
            return {
                ...state,
                getDetailDates: action
            };
        },
    },
};
