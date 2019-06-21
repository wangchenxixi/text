import React,{ useState ,useEffect} from 'react'
import { Button , Icon , Table, Select , Form , Input ,  message} from 'antd'
import { connect } from 'dva'
import studentStyle from './classStudent.scss' 
function ClassStudent(props){
    let { getFieldDecorator} = props.form
    let { getClassData , getGrade , getStudet , getGradeViewData , getStudentDatas } = props
    useEffect(()=>{
        getClassData();
        getGrade();
        getStudet();
    },[])
    const { Option } = Select;
    let [data,]=useState(getStudentDatas)
    let remoteStudent=()=>{
        
    }
    const columns = [
        {
          title: '姓名',
          dataIndex: 'student_name',
          key: 'name',
          render: text => <a href="javascript:;">{text}</a>,
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
              <a onClick={()=>{remoteStudent()}}>删除</a>
            </span>
          ),
        },
      ];
      
      const search=(type)=>{
        if(type==='submit'){
            props.form.validateFields((err, values) => {
                if(values){
                    //请求接口
                }else{
                    message.error('请完善信息')
                }
            })
        }else{
            props.form.resetFields()
        }
      }
    console.log(props)
    return (
        <div>
            <p className={studentStyle.title}>学生管理</p>
            <div className={studentStyle.bottom}>
                <div>
                    <Form className={studentStyle.form} >
                        <Form.Item>
                            {getFieldDecorator('studentName',{
                                rules: [{required: true,message: '请填写班级名',}]
                            })(<Input placeholder="学生名" />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('roomName',{
                                rules: [{required: true,message: '请填写班级名',}]
                            })(
                                <Select placeholder="教室号" style={{width:'150px'}}>
                                    {
                                        getGradeViewData.map((item,index)=>{
                                            return  <Option key={index} value={index}>{item.room_text}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('classNames',{
                                rules: [{required: true,message: '请填写班级名',}]
                            })(
                                <Select placeholder="班级名" style={{width:'150px'}}>
                                    {
                                        getGradeViewData.map((item,index)=>{
                                            return  <Option key={index} value={index}>{item.grade_name}</Option>
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
                <Table columns={columns} dataSource={data} />
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
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(Form.create()(ClassStudent))