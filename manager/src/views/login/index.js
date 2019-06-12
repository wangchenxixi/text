import React, { Component, useEffect } from 'react';
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import styles from "./index.scss"

function LoginPage(props) {
    let { login } = props;
    useEffect(() => {
        login({
            user_name: 'chenmanjie',
            user_pwd: "Chenmanjie123!"
        });
    }, [])

let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form:', values);
            login({
                user_name: values.username,
                user_pwd: values.password
            });
        }
    })
};
//表单验证
const { getFieldDecorator } = props.form;
return <div className="nomal">
    <div className="loginbox">
    <Form onSubmit={handleSubmit} className="login-form">
    <Form.Item>
        {getFieldDecorator('username', {
            validateTrigger:"onBlur",
            rules: [{ required: true, message: '请输入正确的用户名!' }],
        })(
            <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
            />,
        )}
    </Form.Item>
    <Form.Item>
        {getFieldDecorator('password', {
            rules: [{ pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/, message: '请输入正确的密码' }],
        })(
            <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
            />,
        )}
    </Form.Item>
    <Form.Item>
        {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="">
            Forgot password
        </a>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
        Or <a href="">register now!</a>
    </Form.Item>
</Form>
</div>
</div>;
};


    LoginPage.prototype={

    };
    LoginPage.defaultProps={

    }


const mapStateToProps = state => {
    console.log('state...', state);
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        login(payload) {
            dispatch({
                type: "user/login",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginPage))