import React, { Component } from 'react';
import typeStyle from './index.css'
import { Form, Button, Input, Table, Modal, Select } from 'antd'
import { connect } from 'dva';
const { Option } = Select;
class QuestionsType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            value: '',
            num: 0,
            selectedRowKeys: [],
            visible1: false,
        }
        console.log(props.exam)
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let parms = values;
                // parms.subject_id = this.props.subjectTypeData.subject_id;;
                this.props.details22({
                    grade_name: values.grade_name,
                    subject_id: "fqtktr-1lq5u"
                })
            }
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible1: false,
        });
        let { updateclass } = this.props;
        // updateclass(e.grade_id)
    };

    handleCancel = e => {
        this.setState({
            visible: false
        })
    };
    showModa = (change) => {
        this.setState({
            visible1: true
        })
        let { updateclass } = this.props;
        updateclass(change.grade_id)
        console.log(change);
    };
    remove = (change) => {
        let { deleteclass } = this.props;
        deleteclass(change.grade_id)
        console.log(change);
    };
    typeAdd = () => {
        this.setState({
            visible: true
        })
    };
    componentDidMount() {
        let { details11 } = this.props;
        let { Room1 } = this.props;
        let { subjectType } = this.props;
        let {stList}=this.props;
        subjectType();
        details11()
        Room1()
        stList()
        console.log(this.props)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {

                title: '班级名',
                dataIndex: 'grade_name',
                key: 11
            },
            {

                title: '课程名称',
                dataIndex: 'subject_text',
                key: 22
            },
            {

                title: '阅卷状态',
                dataIndex: 'room_text',
                key: 335
            },
            {

                title: '课程名称',
                dataIndex: 'room_text',
                key: 336
            },
            {

                title: '成材率',
                dataIndex: 'room_text',
                key: 33
            },
            {

                title: '操作',
                key: 34,
                render: (text) => (
                    <span>
                        <a onClick={() => { this.showModa(text) }}>批卷</a>
                    </span>
                )

            }
        ];
        let data = [];
        this.props.detail1 && this.props.detail1.map((item, index) => {
            return data.push({ ...item, key: "'" + index + "'" })
        })
        return (
            <div className={typeStyle.wrap}>
                <p className={typeStyle.title}>待批班级</p>
                <div className={typeStyle.bottom}>
                    <div>
                        <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
                            添加班级
                        </Button>
                        <Modal
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

                                <Form.Item label="教室号">
                                    {getFieldDecorator('room_text', {
                                        rules: [{ required: true, message: '2' }],

                                    })(
                                        <Select
                                            placeholder="请选择教室号"
                                            onChange={this.handleSelectChange1}
                                        >
                                            {
                                                // console.log(this.props.detail1)
                                                this.props.room.map((item, index) => {
                                                    return <Option value={item.room_text} id={item.room_id}>{item.room_text}</Option>
                                                })
                                            }

                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item label="课程名" >
                                    {getFieldDecorator('subject_text', {
                                        rules: [{ required: true, message: '1' }],

                                    })(
                                        <Select
                                            placeholder="课程名"
                                            onChange={this.handleSelectChange}
                                        >
                                            {
                                                // console.log(this.props.detail1)
                                                this.props.subjectTypeData.map((item, index) => {
                                                    return <Option value={item.subject_text} id={item.subject_id}>{item.subject_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )}
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Modal
                            title="添加班级"
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                        >
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item label="班级名">
                                    {getFieldDecorator('grade_name', {
                                        rules: [{ required: true, message: 'Please input your note!' }],

                                    })(<Input placeholder="班级名" />)}
                                </Form.Item>

                                <Form.Item label="教室号">
                                    {getFieldDecorator('room_text', {
                                        rules: [{ required: true, message: '2' }],

                                    })(
                                        <Select
                                            placeholder="请选择教室号"
                                            onChange={this.handleSelectChange1}
                                        >
                                            {
                                                // console.log(this.props.detail1)
                                                this.props.room.map((item, index) => {
                                                    return <Option value={item.room_text} id={item.room_id}>{item.room_text}</Option>
                                                })
                                            }

                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item label="课程名" >
                                    {getFieldDecorator('subject_text', {
                                        rules: [{ required: true, message: '1' }],

                                    })(
                                        <Select
                                            placeholder="课程名"
                                            onChange={this.handleSelectChange}
                                        >
                                            {
                                                // console.log(this.props.detail1)
                                                this.props.subjectTypeData.map((item, index) => {
                                                    return <Option value={item.subject_text} id={item.subject_id}>{item.subject_text}</Option>
                                                })
                                            }
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        确定
                                    </Button>
                                    <Button>
                                        取消
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
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
        ...state.exam,
        ...state.questions,
        ...state.updateclass,
        ...state.deleteclass,
        ...state.stList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        details11(payload) {
            console.log(payload)
            dispatch({ type: 'exam/details11', payload })
        },
        details22(payload) {
            // console.log(payload)
            dispatch({ type: 'exam/details22', payload })
        },
        Room1(payload) {
            // console.log(payload)
            dispatch({ type: 'exam/Room1', payload })
        },
        subjectType(payload) {
            console.log(payload)
            dispatch({ type: 'questions/subjectType', payload })
        },
        updateclass(payload) {
            console.log(payload)
            dispatch({ type: 'exam/updateClass', payload })
        },
        deleteclass(payload) {
            console.log(payload)
            dispatch({ type: 'exam/deleteclass', payload })
        },
        stList(payload) {
            console.log(payload)
            dispatch({ type: 'exam/stList', payload })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(QuestionsType))