import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import './login.scss';

function Login(props){
    // 判断是否登录
    // console.log(props);
    useEffect(()=>{
        // console.log(props);
        if(props.isLogin === 1){
            // 登录成功
            message.success('登录成功！')
            // 跳主页面
            // let pathname = decodeURIComponent(props.history.location.search.split('=')[1]);
            // props.history.replace(pathname || '/');
            props.history.replace('/');
        }else if(props.isLogin === -1){
            // 登录失败
            message.error('用户名或密码错误！')
        }      
    }, [props.isLogin]);
    
    // 表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.login({
                    user_name: values.username,
                    user_pwd: values.password
                });
            }
        });
    }
    const { getFieldDecorator } = props.form;
    return <div className='login_wrapper'>
        <div className='login_form'>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入您的用户名!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                            className='login_input'
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        validateTrigger: 'onBlur',
                        rules: [{ required: true, message: '请输入您的密码!' },
                        {pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/,message: '请输入正确的密码!'}],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                            className='login_input'
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div className='login_form_remember'>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                    </div>                    
                    <Button type="primary" htmlType="submit" className='login_form_button'>
                        登 录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}
// props的类型检测
Login.propTypes = {

}
// props的默认值
Login.defaultProps = {
    
}

const mapState = state => {
    console.log('atate...',state)
    return {
        ...state.user
    };
}
const mapDispatch = dispatch => ({
    login(payload){
        dispatch({
            type: 'user/login',
            payload
        })
    }

})
export default connect(mapState,mapDispatch)(Form.create()(Login));
