import React,{useEffect} from 'react'
import { Button , Table, Select , Form , Input } from 'antd'
import { connect } from 'dva'
import studentStyle from './classStudent.scss' 
function ClassStudent(props){
    let { getFieldDecorator} = props.form
    let { getClassData , getGrade , getStudet , getGradeViewData ,getClassRoomDataS, getStudentDatas } = props
    useEffect(()=>{
        getClassData();
        getGrade();
        getStudet();     
    },[])

    const { Option } = Select;
    let remoteStudents=(text)=>{
        let { remoteStudent } = props;
        remoteStudent(text)
    }
    const columns = [
        {
          title: '姓名',
          dataIndex: 'student_name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '学号',
          dataIndex: 'student_id',
          key: 'age',
        },
        {
          title: '班级',
          dataIndex: 'grade_name',
          key: 'address',
        },
        {
          title: '教室',
          key: 'tags',
          dataIndex: 'room_text'
        },
        {
          title: '密码',
          key: 'action',
          dataIndex: 'student_pwd'
        },
        {
          title: '操作',
          key: 'detail',
          render: (text, record) => (
            <span>
              <a onClick={()=>{remoteStudents(text)}}>删除</a>
            </span>
          ),
        },
      ];
      
    const search=(type)=>{
        if(type==='submit'){
            props.form.validateFields((err, values) => {
                console.log('values...',values)
                props.filterStudentData(values)
            })
        }else{
            props.form.resetFields()
        }
    }
    let data = getStudentDatas;
    return (
        <div>
            <p className={studentStyle.title}>学生管理</p>
            <div className={studentStyle.bottom}>
                <div>
                    <Form className={studentStyle.form} >
                        <Form.Item>
                            {getFieldDecorator('studentName',{initialValue:''})(<Input placeholder="学生名" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('roomName',{initialValue:''})(
                                <Select placeholder="教室号" style={{width:'150px'}}>
                                    {
                                        getClassRoomDataS.map((item,index)=>{
                                            return  <Option key={item.room_id} value={item.room_text}>{item.room_text}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('classNames',{initialValue:''})(
                                <Select placeholder="班级名" style={{width:'150px'}}>
                                    {
                                        getGradeViewData.map((item)=>{
                                            return  <Option key={item.grade_id} value={item.grade_name}>{item.grade_name}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item style={{display:'flex'}}>
                            <Button type="primary" onClick={()=>{search('submit')}}>添加提交</Button>
                            <Button type="primary" style={{margin:'0 20px'}} onClick={()=>{search('sub')}}>取消</Button>
                        </Form.Item>
                    </Form>
                </div>
                <Table columns={columns} dataSource={data} rowKey={idx=>idx.student_id}/>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state.class)
    return {
        ...state.class
    }
}
const mapDispatchToprops=(dispatch)=>{
    return {
        getClassData(){
            dispatch({type:'class/getClassName'})
        },
        getGrade(){
            dispatch({type:'class/getGradeData'})
        },
        getStudet(){
            dispatch({type:'class/getStudetS'})
        },
        remoteStudent(payload){
            dispatch({type:'class/remoteS',payload:payload})
        },
        filterStudentData(payload){
            dispatch({
                type: 'class/filterStudentData',
                action: payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Form.create()(ClassStudent))