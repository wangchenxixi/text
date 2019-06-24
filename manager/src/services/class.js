import request from '../utils/request';

export function getClassData(){
    return request({
        url:'/manger/grade',
        method:'GET'
    })
}

export function getClassNameData(){
    return request({
        url:'/manger/room',
        method:'GET'
    })
}

export function getExamType(){
    return request({
        url:'/exam/subject',
        method:'GET'
    })
}

export function addClass(params){
    return request({
        data:{
            grade_name:params.className,
            room_id:params.classRoomName,
            subject_id:params.curriculumName
        },
        url:'/manger/grade',
        method:'POST'
    })
}

export function updataClass(params){
    return request({
        data:{
            room_id:params.classRoomName,
            room_text:params.curriculumName
        },
        url:'/manger/room/update',
        method:'PUT'
    })
}

export function remoteClassRoom(params){
    return request({
        data:{
            room_id:params
        },
        url:'/manger/room/delete',
        method:'DELETE'
    })
}

export function addClassRoom(params){
    return request({
        data:{
            room_text:params.className
        },
        url:'/manger/room',
        method:'POST'
    })
}

export function remoteClassroom(params){
    return request({
        data:{
            room_id:params
        },
        url:'/manger/room/delete',
        method:'DELETE'
    })
}

export function getGradeDatas(){
    return request({
        url:'/manger/grade',
        method:'GET'
    })
}

export function getStudent(){
    return request({
        url:'/manger/student',
        method:'GET'
    })
}

export function remoteStuden(params){
    return request({
        data:{
            params:{id:params.student_id}
        },
        url:'/manger/student/:id=>student_id',
        method:'DELETE'
    })
}

export function getClassStued(params){
    return request({
        params:{
            grade_id:params
        },
        url:'exam/student',
        method:'GET'
    })
}