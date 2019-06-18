import React, { useEffect, Component } from 'react';
import { connect } from 'dva';
import styles from "./addUser.css";
import { Tabs, Icon, Button, Form, Select, Input } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;

class addUser extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let { addusers } = this.props;
        addusers();
        console.log("props....", this.props)
    }
    handleSubmit = e => {
        e.preventDefault();
        this.propaddUsers.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <div className={styles.box}>
                    添加用户
                </div>
                <div className={styles.wrap}>
                    <div className={styles.case}>
                        <div>
                            <Tabs defaultActiveKey="2" >
                                <TabPane
                                    tab={
                                        <Button>添加用户</Button>
                                    }
                                    key="1"
                                >
                                    <div className={styles.ipt}>

                                        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} >
                                            <Form.Item>
                                                {getFieldDecorator('note', {
                                                    rules: [{ required: true, message: 'Please input your note!' }],
                                                })(<Input placeholder="请输入用户名" />)}
                                            </Form.Item>
                                            <Form.Item placeholder="请输入用户名">
                                                {getFieldDecorator('note', {
                                                    rules: [{ required: true, message: 'Please input your note!' }],
                                                })(<Input placeholder="请输入密码" />)}
                                            </Form.Item>

                                            <Form.Item>
                                                {getFieldDecorator('gender', {
                                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                                })(
                                                    <Select
                                                        placeholder="请选择视图权限id"
                                                        onChange={this.handleSelectChange}
                                                    >
                                                        <Option value="male">male</Option>
                                                        <Option value="female">female</Option>
                                                    </Select>,
                                                )}
                                            </Form.Item>
                                            <Form.Item >
                                                <Button type="primary" htmlType="submit" className={styles.yes}>
                                                    确定
                                                </Button>
                                                <Button className={styles.chongzhi}>重置</Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <Button>更新用户</Button>
                                    }
                                    key="2"
                                    className={styles.tab2}
                                >
                                    <div className={styles.ipt}>

                                        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                            <Form.Item>
                                                {getFieldDecorator('gender', {
                                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                                })(
                                                    <Select
                                                        placeholder="请选择视图权限id"
                                                        onChange={this.handleSelectChange}
                                                    >
                                                        <Option value="male">male</Option>
                                                        <Option value="female">female</Option>
                                                    </Select>,
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('note', {
                                                    rules: [{ required: true, message: 'Please input your note!' }],
                                                })(<Input placeholder="请输入用户名" />)}
                                            </Form.Item>
                                            <Form.Item placeholder="请输入用户名">
                                                {getFieldDecorator('note', {
                                                    rules: [{ required: true, message: 'Please input your note!' }],
                                                })(<Input placeholder="请输入密码" />)}
                                            </Form.Item>

                                            <Form.Item>
                                                {getFieldDecorator('gender', {
                                                    rules: [{ required: true, message: 'Please select your gender!' }],
                                                })(
                                                    <Select
                                                        placeholder="请选择身份id"
                                                        onChange={this.handleSelectChange}
                                                    >
                                                        <Option value="male">male</Option>
                                                        <Option value="female">female</Option>
                                                    </Select>,
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className={styles.yes}>
                                                    确定
                                                </Button>
                                                <Button className={styles.chongzhi}>重置</Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>

                    </div>


                    <div className={styles.case}>
                        <div>
                            <Button className={styles.btn}>添加身份</Button>
                        </div>
                        <div className={styles.ipt}>

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item >
                                    {getFieldDecorator('note', {
                                        rules: [{ required: true, message: 'Please input your note!' }],
                                    })(<Input placeholder="请输入用户名" />)}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" className={styles.yes}>
                                        确定
                                    </Button>
                                    <Button className={styles.chongzhi}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className={styles.case}>
                        <div>
                            <Button className={styles.btn}>添加api接口权限</Button>
                        </div>
                        <div className={styles.ipt}>

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item >
                                    {getFieldDecorator('note', {
                                        rules: [{ required: true, message: 'Please input your note!' }],
                                    })(<Input placeholder="请输入api接口权限名称" />)}
                                </Form.Item>
                                <Form.Item >
                                    {getFieldDecorator('note', {
                                        rules: [{ required: true, message: 'Please input your note!' }],
                                    })(<Input placeholder="请输入api接口权限url" />)}
                                </Form.Item>
                                <Form.Item >
                                    {getFieldDecorator('note', {
                                        rules: [{ required: true, message: 'Please input your note!' }],
                                    })(<Input placeholder="请输入api接口方法" />)}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className={styles.yes}>
                                        确定
                                    </Button>
                                    <Button className={styles.chongzhi}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className={styles.case1}>
                        <div>
                            <Button className={styles.btn}>添加视图接口权限</Button>
                        </div>
                        <div className={styles.ipt}>

                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="请选择身已有"
                                            onChange={this.handleSelectChange}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" className={styles.yes}>
                                        确定
                                    </Button>
                                    <Button className={styles.chongzhi}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className={styles.case1}>
                        <div>
                            <Button className={styles.btn}>给身份设置api接口权限</Button>
                        </div>
                        <div className={styles.ipt}>

                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="请选择身份id"
                                            onChange={this.handleSelectChange}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="请选择api接口权限"
                                            onChange={this.handleSelectChange}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" className={styles.yes}>
                                        确定
                                 </Button>
                                    <Button className={styles.chongzhi}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className={styles.case1}>
                        <div>
                            <Button className={styles.btn}>给身份设置视图权限</Button>
                        </div>
                        <div className={styles.ipt}>

                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="请选择身份id"
                                            onChange={this.handleSelectChange}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('gender', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="请选择视图权限id"
                                            onChange={this.handleSelectChange}
                                        >
                                            <Option value="male">male</Option>
                                            <Option value="female">female</Option>
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" className={styles.yes}>
                                        确定
                                    </Button>
                                    <Button className={styles.chongzhi}>重置</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addusers() {
            dispatch({
                type: "usecontrol/addusers"
            })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(addUser));