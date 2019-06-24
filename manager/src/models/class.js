import { getClassData, getClassNameData, getExamType , addClass , updataClass , remoteClassRoom , addClassRoom , remoteClassroom , getGradeDatas , getStudent , remoteStuden , getClassStued} from '@/services'
import { message } from 'antd'
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
        getClassRoomData:[],
        getClassRoomDataS:[],
        getClassType:[],
        getGradeViewData:[],
        getStudentDatas:[],
        getStudentDatasAll: []
    },

    // 异步操作
    effects: {
        *getClassRoom({payload},{call,put}){
            let data = yield call(getClassData)
            yield put({
                type:'getClassData',
                action:data.data
            })
        },
        *getClassName({payload},{call,put}){
            let data = yield call(getClassNameData)
            yield put({
                type:'getClassRoomDatas',
                action:data.data
            })
        },
        *getExamTypeData({payload},{call,put}){
            let data = yield call(getExamType)
            yield put({
                type:'getExamData',
                action:data.data
            })
        },
        *addClassRoom({payload},{call,put}){
            let data=yield call(addClass,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *upData({payload},{call,put}){
            let data = yield call(updataClass,payload) 
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *setClassNum({payload},{call,put}){
            let data = yield call(remoteClassRoom,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *setClassData({payload},{call,put}){
            let data = yield call(addClassRoom,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *remoteRoom({payload},{call,put}){
            let data = yield call(remoteClassroom,payload)
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *getGradeData({payload},{call,put}){
            let data=yield call(getGradeDatas)
            yield put({
                type:'getGradeClass',
                action:data.data
            })
        },
        *getStudetS({payload},{call,put}){
            let data = yield call(getStudent)
            yield put({
                type:'getStudestData',
                action:data.data
            })
        },
        *remoteS({payload},{call,put}){
            let data=yield call(remoteStuden,payload);
            data.code===1?message.success(data.msg):message.error(data.msg)
        },
        *getClassStund({payload},{call,put}){
             yield call(getClassStued,payload)
        }
    },

    // 同步操作
    reducers: {
        getClassData(state,{action}){
            return {
                ...state,
                getClassRoomData:action
            }
        },
        getClassRoomDatas(state,{action}){
            return {
                ...state,
                getClassRoomDataS:action
            }
        },
        getExamData(state,{action}){
            return {
                ...state,
                getClassType:action
            }
        },
        getGradeClass(state,{action}){
            return {
                ...state,
                getGradeViewData:action
            }
        },
        getStudestData(state,{action}){
            return{
                ...state,
                getStudentDatas:action,
                getStudentDatasAll: action
            }
        },
        filterStudentData(state, {action}){
            console.log(action);
            
            return {
                ...state,
                getStudentDatas: state.getStudentDatasAll.filter(item => {
                    return item.student_name.includes(action.studentName) &&
                        item.room_text.includes(action.roomName) &&
                        item.grade_name.includes(action.classNames);
                })
            }
        }
    }
};