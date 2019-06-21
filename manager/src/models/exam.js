import { exam, examadd, getDetailData, examList, details, details22, details11, Room1, student, Newstudent, deletegrade, updateClass,addroom,deleteclass,delstudent,stList} from '@/services'
export default {
    // 命名空间
    namespace: 'exam',

    // 模块内部的状态
    state: {
        typeList: [],
        getDetailDates: [],
        examlist: [],
        detail: [],
        detail1: [],
        detail2: [],
        room: [],
        student1: [],
        newstudent: [],
        delgrade: [],
        updateclass: [],
        deleteclass: [],
        addrooms:[],
        delst:[],
        stlist:[]
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
        *getQuestionsType({ payload }, { call, put }) {
            let data = yield call(exam)
            yield put({
                type: 'save',
                action: data.data
            });
        },
        *insertQuestionsType({ payload }, { call, put }) {
            yield call(examadd, payload);
        },
        *detail({ payload }, { call, put }) {
            // console.log(payload)
            let data = yield call(getDetailData, payload);
            yield put({
                type: 'getDetailsData',
                action: data.data
            })
        },
        // 获取试卷列表
        *examList({ payload }, { call, put }) {
            let data = yield call(examList, payload)
            // console.log(data)
            yield put({
                type: 'examListData',
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
        *details11({ payload }, { call, put }) {
            let data = yield call(details11, payload)
            console.log(data)
            yield put({
                type: 'detailstData1',
                action: data.data
            });
        },
        //添加班级
        *details22({ payload }, { call, put }) {
            let data = yield call(details22, payload)
            console.log(data)
            yield put({
                type: 'detailsData2',
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
        *student({ payload }, { call, put }) {
            let data = yield call(student, payload)
            console.log(data)
            yield put({
                type: 'studentdata',
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
        *deletegrade({ payload }, { call, put }) {
            let data = yield call(deletegrade, payload)
            console.log(data)
            yield put({
                type: 'deletegradedata',
                action: data.data
            });
        },
        //更新班级
        *updateClass({ payload }, { call, put }) {
            let data = yield call(updateClass, payload)
            console.log(data)
            yield put({
                type: 'updateClassdata',
                action: data.data
            });

        },
        //删除班级
        *deleteclass({ payload }, { call, put }) {
            let data = yield call(deleteclass, payload)
            console.log(data)
            yield put({
                type: 'deleteclassdata',
                action: data.data
            });
        },
        //添加教师
        *addroom({ payload }, { call, put }) {
            let data = yield call(addroom, payload)
            console.log(data)
            yield put({
                type: 'addroomdata',
                action: data.data
            });
        },
        //删除学生
        *delstudent({ payload }, { call, put }) {
            let data = yield call(delstudent, payload)
            console.log(data)
            yield put({
                type: 'delstudentdata',
                action: data.data
            });
        },
        //批卷列表
        *stList({ payload }, { call, put }) {
            let data = yield call(stList, payload)
            console.log(data)
            yield put({
                type: 'stListdata',
                action: data.data
            });
        }
    },

    // 同步操作
    reducers: {
        save(state, { action }) {
            return {
                ...state,
                typeList: action
            };
        },
        getDetailsData(state, { action }) {
            return {
                ...state,
                getDetailDates: action
            };
        },
        examListData(state, { action }) {
            return {
                ...state,
                examlist: action
            };
        },
        detailstData(state, { action }) {
            return {
                ...state,
                detail: action
            };
        },
        detailstData1(state, { action }) {
            return {
                ...state,
                detail1: action
            };
        },
        detailsData2(state, { action }) {
            return {
                ...state,
                detail2: action
            };
        },
        Roomdata(state, { action }) {
            return {
                ...state,
                room: action
            };
        },
        studentdata(state, { action }) {
            return {
                ...state,
                student1: action
            };
        },
        Newstudentdata(state, { action }) {
            return {
                ...state,
                newstudent: action
            };
        },
        deletegradedata(state, { action }) {
            return {
                ...state,
                delgrade: action
            };
        },
        updateClassdata(state, { action }) {
            return {
                ...state,
                updateclass: action
            };
        },
        deleteclassdata(state, { action }) {
            return {
                ...state,
                deleteclass: action
            };
        },
        addroomdata(state, { action }) {
            return {
                ...state,
                addrooms: action
            };
        },
        delstudentdata(state, { action }) {
            return {
                ...state,
                delst: action
            };
        },
        stListdata(state, { action }) {
            return {
                ...state,
                stlist: action
            };
        },
    },
};
