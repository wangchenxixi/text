import {add,examType,subjectType,getQuestionsType,getQuestion,getQuestions,questionsOnly,questionsUpdate} from '@/services'

export default {
    // 命名空间
    namespace: 'questions',

    // 模块内部的状态
    state: {
        // 考试类型
        examTypeData: [],
        // 课程类型
        subjectTypeData: [],
        // 题目类型
        questionsTypeData: [],
        // 添加试题 状态
        addQuestionsFlag: 0,
        // 按条件获取的试题
        questionSearch: [],
        //获取全部类型
        getQuestionsData:[],
        // 单个试题
        questionsOnlyData: {},
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
            // console.log('payload...',payload)
            let data = yield call(add,payload)
            yield put({ 
                type: 'updateAdd' ,
                action: data.code === 1 ? 1 : -1
            });
        },
        // 获取考试类型
        *examType({payload},{call,put}){
            let data = yield call(examType)
            yield put({ 
                type: 'getExamType' ,
                action: data.data
            });
        },
        // 获取课程类型
        *subjectType({payload},{call,put}){
            let data = yield call(subjectType)
            yield put({ 
                type: 'getSubjectType' ,
                action: data.data
            });
        },
        // 获取题目类型
        *questionsType({payload},{call,put}){





            
            let data = yield call(getQuestionsType)
            yield put({ 
                type: 'getQuestionsType' ,
                action: data.data
            });
        },
        // 按条件获取试题
        *getQuestion({payload},{call,put}){
            let data = yield call(getQuestion,payload)
            yield put({ 
                type: 'getQuestionSearch' ,
                action: data.data
            });
        },
        // 获取所有试题
        *getQuestions({payload},{call,put}){
            let data = yield call(getQuestions)
            yield put({
                type:'getQuestionsAll',
                action:data.data
            })
        },
        // 获取单个试题
        *questionsOnly({payload},{call,put}){
            let data = yield call(questionsOnly,payload);
            yield put({
                type:'getQuestionsOnly',
                action:data.data[0]
            })
        },
        // 更新试题
        *questionsUpdate({payload},{call,put}){
            let data = yield call(questionsUpdate,payload);
            console.log('更新试题.....',data);
            // yield put({
            //     type:'getQuestionsOnly',
            //     action:data.data[0]
            // })
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
        updateAdd(state, {action}){
            return {
                ...state,
                addQuestionsFlag: action
            };
        },
        getQuestionSearch(state, {action}){
            return {
                ...state,
                getQuestionsData: action
            };
        },
        getQuestionsAll(state, {action}){
            return {
                ...state,
                getQuestionsData: action
            };
        },
        getQuestionsOnly(state, {action}){
            return {
                ...state,
                questionsOnlyData: action
            };
        },
    },
};
