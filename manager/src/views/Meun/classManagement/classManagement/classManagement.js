import React, {Component} from 'react'
import { connect } from 'dva'
import { Button, Icon,Table, Divider, Modal, Input, Select, Form, message} from 'antd'
import classManagementStyle from './classManagement.scss'

class ClassManagement extends Component{
    constructor(props){
        super(props)
        this.state={
            visible: false,
            visibleUpdata: false,
            value:'',
            num:0,
            selectedRowKeys: []
        }
    }
    componentDidMount(){
        let { getClassRoomName , getClassData , getExamType} = this.props
        getClassRoomName()
        getClassData()
        getExamType()
    }
    remote=(val)=>{
        let { getClassRoomNum } = this.props
        getClassRoomNum(val.room_id)
    }   
    addClass(type){
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if(type==='submit'){
                this.setState({
                    visible:false
                })
                let { addClass } = this.props
                values.classRoomName&&values.curriculumName?(addClass(values),this.props.form.resetFields()):message.error('请将参数填写完整');
            }else{
                this.setState({
                    visible:false
                })
                this.props.form.resetFields();
            }       
        })
    }
    updata(type){
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if(type==='submit'){
                this.setState({
                    visibleUpdata:false
                })
                let { updataClass } = this.props
                values.classRoomName&&values.curriculumName?(updataClass(values),this.props.form.resetFields()):message.error('请将参数填写完整');
            }else{
                this.setState({
                    visibleUpdata:false
                })
                this.props.form.resetFields();
            }       
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form
        const { Option } = Select;
        console.log(this.props)
        let { getClassRoomData , getClassRoomDataS , getClassType } = this.props
        const columns = [
            {
              title: '班级名',
              dataIndex: 'grade_name',
              key: 'grade_name'
            },
            {
              title: '课程名',
              dataIndex: 'subject_text',
              key: 'subject_text',
            },
            {
              title: '教室号',
              dataIndex: 'room_text',
              key: 'room_text',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a onClick={()=>{this.setState({visibleUpdata:true})}}>修改</a>
                  <Divider type="vertical" />
                  <a onClick={()=>{this.remote(text)}}>删除</a>
                </span>
              ),
            },
          ];
          const data = getClassRoomData
        return (
            <div className={classManagementStyle.wrap}>
                <p className={classManagementStyle.title}>班级管理</p>
                <div className={classManagementStyle.bottom}>
                    <Button type="primary" onClick={()=>{  this.setState({visible: true})}}><Icon type="plus" />添加班级</Button>
                    <Modal
                        title="创建新类型"
                        visible={this.state.visible?this.state.visible:this.state.visibleUpdata}
                    >
                        <Form onSubmit={this.addClass}>
                            <Form.Item label="班级名" hasFeedback>
                                {getFieldDecorator('className')(this.state.visible?<Input placeholder="班级名" />:<Input placeholder="班级名" disabled={true}/>)}
                            </Form.Item>
                            <Form.Item label="教室号">
                                {getFieldDecorator('classRoomName', {
                                    rules: [{required: true,message: '请选择教室号',}]
                                })(<Select placeholder="教室号">
                                        {
                                            getClassRoomDataS.map((item,index)=>{
                                                return  <Option key={index} value={item.room_id}>{item.room_text}</Option>
                                            })
                                        }
                                    </Select>)}
                            </Form.Item>
                            <Form.Item label="课程名">
                                {getFieldDecorator('curriculumName', {
                                    rules: [{ required: true, message: '请选择课程'}],
                                })(<Select placeholder="课程名">
                                         {
                                            getClassType.map((item,index)=>{
                                                return  <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                            })
                                        }
                                    </Select>)}
                            </Form.Item>
                            <Form.Item style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                                <Button type="primary" onClick={()=>{this.state.visibleUpdata?this.updata('submit'):this.addClass('submit')}}>添加提交</Button>
                                <Button type="primary"  onClick={()=>{this.state.visibleUpdata?this.updata('sub'):this.addClass('sub')}} style={{margin:'0 20px'}}>取消</Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table columns={columns} dataSource={data} style={{marginTop:'20px'}} rowKey={record=>`${record.grade_id}`}/>
                </div>  
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        ...state.class
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        //获取所有班级名称和课程
        getClassRoomName(){
            dispatch({type:'class/getClassRoom'})
        },
        //获取教室号数据
        getClassData(){
            dispatch({type:'class/getClassName'})
        },
        //获取课程类型
        getExamType(){
            dispatch({
                type:"class/getExamTypeData"
            })
        },
        //添加班级
        addClass(payload){
            dispatch({type:'class/addClassRoom',payload:payload})
        },
        //修改班级
        updataClass(payload){
            dispatch({type:'class/upData',payload:payload})
        },
        getClassRoomNum(payload){
            console.log(payload)
            dispatch({type:'class/setClassNum',payload:payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(ClassManagement) )