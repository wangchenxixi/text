import React, { Component } from "react";
import { connect } from "dva";
import userAddStyle from './userAdd.scss'
import { Form, Input, Button, Radio, Select,message} from 'antd';

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state={
            formLayout:'horizontal',
            flag:true,
            success:null,
            viewText:''
        }
    }
    componentDidMount(){
        let { choiceID , userData , getADddView , getApiView} = this.props 
        choiceID()
        userData()
        getADddView()
        getApiView()
    }
    handleFormLayoutChange = e => {
        this.setState({
            formLayout:e.target.value
        })
        this.state.formLayout==='horizontal'?this.setState({flag:false}):this.setState({flag:true})
    }
    upDataUser=(type)=>{
        console.log(type)
       type==='submit'?
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    let { upDataId } = this.props
                    values.upData&&values.userId&&values.userName&&values.userPwd?upDataId(values):message.error('请输入身份')
                }
            }):this.props.form.resetFields();
    }
    addEdit=(type)=>{
        type==='submit'?
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { addEdit } = this.props
                values.identityName?addEdit(values):message.error('请输入身份')
            }
        }):this.props.form.resetFields();
    }
    addUser = (type) => {
        type==='submit'?
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { addUser} = this.props
                addUser(values)
            }
        }):this.props.form.resetFields();
    }; 
    addView=(type)=>{
        type==='submit'?
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { addViewData} = this.props
                values.identityName? addViewData(values):message.error('请选择身份id')
            }
        }):this.props.form.resetFields();
    }
    addApi = (type) =>{
        type==='submit'?
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let { addApi } = this.props
                values.apiIdentity&&values.apiIdentityUr&&values.apiIdentityFunc?addApi(values):message.error('请完善输入框的内容')
            }
        }):this.props.form.resetFields();
    }
    statusId = (type)=>{
        type==='submit'?
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    let { setStatusView } = this.props;
                    values.statusId&&values.viewId?setStatusView(values):message.error('请完善输入框的内容')
                }
            }):this.props.form.resetFields();
    }
    power=(type)=>{
        type==='submit'?
            this.props.form.validateFields((err, values) => {
                if (!err) {
                let { setApiView } = this.props
                values.setID&&values.setPower?setApiView(values):message.error('请完善输入框的内容')
            }
        }):this.props.form.resetFields();
    }
    render(){
        const { Option } = Select;
        let { getUserIDs , getUserDatas , viewData , getApiViewData} = this.props;
        console.log(this.props)
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={userAddStyle.wrap}>
                <p className={userAddStyle.title}>添加用户</p>
                <div className={userAddStyle.bottom}>
                    <div className={userAddStyle.bottom_Top}>
                        <div className={userAddStyle.bottom_Center}>
                            <Form onSubmit={this.addUser}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange} >
                                        <Radio.Button value="horizontal">添加用户</Radio.Button>
                                        <Radio.Button value="vertical">更新用户</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                {
                                    this.state.flag ? null : 
                                    <Form.Item>
                                    {
                                        getFieldDecorator('upData')(
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="请选则身份id"
                                                optionFilterProp="children"
                                            >
                                                {
                                                    getUserDatas.map((item,index)=>{
                                                        return <Option value={item.user_id} key={index}>{item.user_name}</Option>
                                                    })
                                                }
                                            </Select>
                                        )
                                    }
                                    </Form.Item>
                                }
                                
                                <Form.Item>
                                    {
                                        getFieldDecorator('userName')(
                                            <Input placeholder="请输入用户名" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('userPwd',{
                                            rules:[{pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/,message: '请输入正确的密码!'}]
                                        })(
                                            <Input placeholder="请输入密码" />
                                        )
                                    }
                                </Form.Item >
                                <Form.Item>
                                    {
                                        getFieldDecorator('userId')(
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="请选则身份id"
                                                optionFilterProp="children"
                                            >      
                                            {
                                                getUserIDs.map((item,index)=>{
                                                    return <Option value={item.identity_id} key={index}>{item.identity_text}</Option>
                                                })
                                            }
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" onClick={()=>{this.state.flag?this.addUser('submit'):this.upDataUser('submit')}}>提交</Button>
                                    <Button type="primary" className={userAddStyle.reset} onClick={()=>{this.state.flag?this.addUser('sub'):this.upDataUser('sub')}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className={userAddStyle.bottom_Center}>
                            <Form onSubmit={this.addEdit}>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal">
                                        <Radio.Button value="horizontal">添加身份</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item >
                                    {
                                        getFieldDecorator('identityName')(
                                            <Input placeholder="请输入身份名称" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" onClick={()=>{this.addEdit('submit')}}>提交</Button>
                                    <Button type="primary" className={userAddStyle.reset} onClick={()=>{this.addEdit('sub')}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className={userAddStyle.bottom_Center}>
                            <Form >
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal" >
                                        <Radio.Button value="horizontal">添加api接口权限</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('apiIdentity')(
                                            <Input placeholder="请输入api接口权限名" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('apiIdentityUr')(
                                            <Input placeholder="请输入api接口权限ur" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('apiIdentityFunc')(
                                            <Input placeholder="请输入api接口权限方法" />
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" onClick={()=>{this.addApi('submit')}}>提交</Button>
                                    <Button type="primary" className={userAddStyle.reset} onClick={()=>{this.addApi('sub')}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className={userAddStyle.bottom_Bottom}>
                        <div className={userAddStyle.bottom_Center}>
                            <Form>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal">
                                        <Radio.Button value="horizontal">添加视图接口</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('addView')(
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="请选择已有视图"
                                                optionFilterProp="children"
                                                onChange={this.select}
                                            >      
                                            {
                                                viewData.map((item,index)=>{
                                                    return <Option value={item.view_authority_id} key={index}>{item.view_authority_text}</Option>
                                                })
                                            }
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" onClick={()=>{this.addView('submit')}}>提交</Button>
                                    <Button type="primary" className={userAddStyle.reset} onClick={()=>{this.addView('sub')}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className={userAddStyle.bottom_Center}>
                            <Form>
                            <Form.Item>
                                    <Radio.Group defaultValue="horizontal">
                                        <Radio.Button value="horizontal">给身份设置api接口权限</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('setID')(
                                            <Select
                                                showSearch
                                                placeholder="请选择身份id"
                                                optionFilterProp="children"
                                            >
                                                {
                                                     getUserIDs.map((item,index)=>{
                                                        return <Option value={item.identity_id} key={index}>{item.identity_text}</Option>
                                                    })
                                                }
                                            </Select>
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('setPower')(
                                            <Select
                                                showSearch
                                                placeholder="请选择api接口权限"
                                                optionFilterProp="children"
                                            >
                                                {
                                                    getApiViewData.map((item,index)=>{
                                                        return <Option value={item.identity_api_authority_relation_id} key={index}>{item.api_authority_text}</Option>
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" onClick={()=>{this.power('submit')}}>提交</Button>
                                    <Button type="primary" className={userAddStyle.reset} onClick={()=>{this.power('sub')}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className={userAddStyle.bottom_Center}>
                            <Form>
                                <Form.Item>
                                    <Radio.Group defaultValue="horizontal">
                                        <Radio.Button value="horizontal">给身份设置视图</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('statusId')(
                                            <Select
                                                showSearch
                                                placeholder="请选择身份id"
                                                optionFilterProp="children"
                                            >
                                                {
                                                     getUserIDs.map((item,index)=>{
                                                        return <Option value={item.identity_id} key={index}>{item.identity_text}</Option>
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    {
                                        getFieldDecorator('viewId')(
                                            <Select
                                                showSearch
                                                placeholder="请选择视图权限id"
                                                optionFilterProp="children"
                                            >
                                                {
                                                viewData.map((item,index)=>{
                                                        return <Option value={item.view_authority_id} key={index}>{item.view_authority_text}</Option>
                                                    })
                                                }
                                            </Select>,
                                        )
                                    }
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" onClick={()=>{this.statusId('submit')}}>提交</Button>
                                    <Button type="primary" className={userAddStyle.reset} onClick={()=>{this.statusId('sub')}}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        ...state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        choiceID(){
            dispatch({type:'user/userID'})
        },
        addUser(payload){
            dispatch({type:'user/addUsers',payload:payload})
        },
        userData(){
            dispatch({type:'user/userData'})
        },
        addEdit(payload){
            dispatch({type:'user/editData',payload:payload})
        },
        addApi(payload){
            dispatch({type:'user/ApiData',payload:payload})
        },
        getADddView(){
            dispatch({type:'user/getView'})
        },
        addViewData(payload){
            dispatch({type:'user/addViews',payload:payload})
        },
        getApiView(){
            dispatch({type:'user/getApiViews'})
        },
        setApiView(payload){
            dispatch({type:'user/getApiViewData',payload:payload})
        },
        setStatusView(payload){
            dispatch({type:'user/getApiStatus',payload:payload})
        },
        upDataId(payload){
            dispatch({type:'user/upDataUser',payload:payload})
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(AddUser));