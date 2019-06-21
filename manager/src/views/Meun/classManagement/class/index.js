import React, { Component } from 'react';
import typeStyle from './index.css'
import { Form, Button, Input, Table, Modal, Select } from 'antd'
import { connect } from 'dva';
class Class extends Component {
    constructor(props) {
        super(props)
        this.state = { visible: false };

    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            let {addroom}=this.props;
            addroom(values.grade_name)
          }
        });
      };
    typeAdd = e => {
        this.setState({
            visible: true
        })
    }
    click = (val) => {
        let { deletegrade } = this.props;
        let roomid = val.room_id;
        console.log(roomid)
        deletegrade(roomid)
    };
    componentDidMount() {
        let { details11 } = this.props;
        let { Room1 } = this.props;
        let { student } = this.props;
        details11()
        Room1()
        student()
        console.log(this.props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {

                title: '教室号',
                dataIndex: 'room_text',
                key: 33
            },
            {

                title: '操作',
                key: 34,
                render: (text, record) => (
                    <span>
                        <a onClick={() => { this.click(text) }}>删除</a>
                    </span>
                ),

            }
        ];

        let data = [];
        this.props.exam.room && this.props.exam.room.map((item, index) => {
            return data.push({ ...item, key: "'" + index + "'" })
        })
        return (
            <div className={typeStyle.wrap}>
                <p className={typeStyle.title}>教室管理</p>
                <div className={typeStyle.bottom}>
                    <div>
                        <Button type="primary" onClick={this.showModal} icon="plus" size="large">
                            添加班级
                        </Button>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item label="班级名">
                                    {getFieldDecorator('grade_name', {
                                        rules: [{ required: true, message: 'Please input your note!' }],

                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        {/* <Modal
                            title="Basic Modal"
                            visible={this.state.visible1}
                            // onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item label="班级名">
                                    {getFieldDecorator('grade_name', {
                                        rules: [{ required: true, message: 'Please input your note!' }],

                                    })(<Input />)}
                                </Form.Item>

                            </Form>
                        </Modal> */}
                    </div>
                    <div className={typeStyle.list}>
                        <Table columns={columns} dataSource={data} />
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

        details11(payload) {
            console.log(payload)
            dispatch({ type: 'exam/details11', payload })
        },
        details22(payload) {
            console.log(payload)
            dispatch({ type: 'exam/details22', payload })
        },
        Room1(payload) {
            console.log(payload)
            dispatch({ type: 'exam/Room1', payload })
        },
        student(payload) {
            console.log(payload)
            dispatch({ type: 'exam/student', payload })
        },
        deletegrade(payload) {
            console.log(payload)
            dispatch({ type: 'exam/deletegrade', payload: payload })
        },
        addroom(payload) {
            console.log(payload)
            dispatch({ type: 'exam/addroom', payload: payload })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Class))