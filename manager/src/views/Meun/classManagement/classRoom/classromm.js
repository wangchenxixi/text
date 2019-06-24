import React,{ Component } from 'react'
import { connect } from 'dva'
import { Button , Icon , Table, Modal , Form , Input  , message} from 'antd'
import classRoomStyle from './classroom.scss'
class ClassRoom extends Component{
    constructor(props){
        super(props)
        this.state={
            visible: false,
        }
    }
    componentDidMount(){
        let { getClassData } = this.props;
        getClassData()
    }
    className(type){
        this.props.form.validateFields((err, values) => {
            let { setClass } = this.props
            if(values.className){
                if(type==='submit'){
                    this.setState({visible:false})
                    setClass(values)
                    this.props.form.resetFields()
                }else{
                    this.setState({visible:false})
                    this.props.form.resetFields()
                }
            }else{
                message.error('请完善信息')
                this.setState({visible:false})
            }
        })
    }
    remoteClassRoom(val){
        let { remoteClass } = this.props
        remoteClass(val.room_id)
    }
    render(){
        let { getClassRoomDataS } = this.props
        console.log(this.props)
        let { getFieldDecorator } = this.props.form
        const columns = [
            {
              title: 'Name',
              dataIndex: 'room_text',
              key: 'Name'
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                    <a onClick={()=>{this.remoteClassRoom(text)}}>删除</a>
                </span>
              ),
            },
          ];
          const data = getClassRoomDataS
        return (
            <div className={classRoomStyle.wrap}>
                <p className={classRoomStyle.title}>教室管理</p>
                <div className={classRoomStyle.bottom}>
                    <Button type="primary" onClick={()=>{this.setState({visible:true})}}><Icon type="plus" />添加教室</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                    >
                        <Form onSubmit={this.className}>
                            <Form.Item label="班级名" hasFeedback>
                                {getFieldDecorator('className',{
                                    rules: [{required: true,message: '请填写班级名',}]
                                })(<Input placeholder="班级名" />)}
                            </Form.Item>
                            <Form.Item style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                                <Button type="primary" onClick={()=>{this.className('submit')}}>添加提交</Button>
                                <Button type="primary"  onClick={()=>{this.className('sub')}} style={{margin:'0 20px'}}>取消</Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table columns={columns} dataSource={data} style={{marginTop:'20px'}} />
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
        setClass(payload){
            dispatch({type:'class/setClassData',payload:payload})
        },
        getClassData(){
            dispatch({type:'class/getClassName'})
        },
        remoteClass(payload){
            dispatch({type:'class/remoteRoom',payload:payload})
        }
    }
   
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(ClassRoom))