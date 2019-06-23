import {exam,examadd,getDetailData,examList,details,Newstudent,Room1,details11} from '@/services'
export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        typeList:[],
        getDetailDates:[],
        detail:[],
        newstudent:[],
        room:[],
        detail1:[]
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
            
            let data = yield call(getDetailData,payload);
            console.log(data)
            yield put({
                type:'getDetailsData',
                action:data.data
            })
        },
        // 获取试卷列表
        *examList({payload},{call,put}){
            let data = yield call(examList,payload)
            // console.log(data)
            yield put({
                type: 'save',
                action: data.exam
            });
        },
        *details({ payload }, { call, put }) {
            let data = yield call(details, payload)
            console.log(data)
            yield put({
                type: 'detailstData',
                action: data.data
            });
        },
        *Newstudent({ payload }, { call, put }) {
            let data = yield call(Newstudent, payload)
            console.log(data)
            yield put({
                type: 'Newstudentdata',
                action: data.data
            });
        },
        *Room1({ payload }, { call, put }) {
            let data = yield call(Room1, payload)
            console.log(data)
            yield put({
                type: 'Roomdata',
                action: data.data
            });
        },
        *details11({ payload }, { call, put }) {
            let data = yield call(details11, payload)
            console.log(data)
            yield put({
                type: 'detailstData1',
                action: data.data
            });
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
        detailstData(state, { action }) {
            return {
                ...state,
                detail: action
            };
        },
        Newstudentdata(state, { action }) {
            return {
                ...state,
                newstudent: action
            };
        },
        Roomdata(state, { action }) {
            return {
                ...state,
                room: action
            };
        },
        detailstData1(state, { action }) {
            return {
                ...state,
                detail1: action
            };
        },
    },
};
