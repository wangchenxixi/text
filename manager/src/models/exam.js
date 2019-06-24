import {exam,examadd,getDetailData,examList,createExamGet} from '@/services'
export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        typeList:[],
        getDetailDates:[],
        // 试卷列表
        examListData: [],
        
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
            // console.log(payload)
            let data = yield call(getDetailData,payload);
            yield put({
                type:'getDetailsData',
                action:data.data
            })
        },
        // 获取试卷列表
        *examList({payload},{call,put}){
            let data = yield call(examList,payload)
            console.log(data)
            yield put({
                type: 'getExamList',
                action: data.exam
            });
        },
        // 创建试卷到试卷列表
        *createExamGet({params,id},{call,put}){
            console.log(params,id)
            let data = yield call(createExamGet,params,id);
            console.log('创建试题.....',data);
            // yield put({
            //     type:'getQuestionsUpdate',
            //     action:data.code === 1 ? 1 : -1
            // })
        },
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
        // 获取试卷列表
        getExamList(state, {action}){
            return {
                ...state,
                examListData: action
            };
        }
    },
};
