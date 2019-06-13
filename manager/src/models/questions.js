import {add,examType,subjectType,getQuestionsType} from '@/services'

export default {
    // 命名空间
    namespace: 'questions',

    // 模块内部的状态
    state: {
        examTypeData: [],
        subjectTypeData: [],
        questionsTypeData: []
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
        // 添加试题
        *add({payload},{call,put}){
            console.log('payload...',payload)
            // let data = yield call(add,payload)
            // console.log('data...',data)
            
        },
        // 获取考试类型
        *examType({payload},{call,put}){
            let data = yield call(examType)
            // console.log('data...',data)
            yield put({ 
                type: 'getExamType' ,
                action: data.data
            });
        },
        // 获取课程类型
        *subjectType({payload},{call,put}){
            let data = yield call(subjectType)
            console.log('data...',data)
            yield put({ 
                type: 'getSubjectType' ,
                action: data.data
            });
        },
        // 获取题目类型
        *questionsType({payload},{call,put}){
            let data = yield call(getQuestionsType)
            console.log('data...',data)
            yield put({ 
                type: 'getQuestionsType' ,
                action: data.data
            });
        },
    },

    // 同步操作
    reducers: {
        getExamType(state, {action}) {
            return {
                ...state,
                examTypeData: action
            };
        },
        getSubjectType(state, {action}){
            return {
                ...state,
                subjectTypeData: action
            };
        },
        getQuestionsType(state, {action}){
            return {
                ...state,
                questionsTypeData: action
            };
        },

    },
};
