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
        }
        console.log(props.exam)
    }


    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

            }
        });
    };
    handleCancel = e => {
        this.setState({
            visible: false
        })
    };
    typeAdd = () => {
        this.setState({
            visible: true
        })
    };
    handleOk = e => {
        let { examadd } = this.props;
        examadd({ text: this.state.value, sort: Math.floor(Math.random() * 100) })
        this.setState({
            visible: false
        })
    };
    //删除学生
    remove=(val)=>{
        console.log(val)
        let {delstudent}=this.props;
        delstudent(val.student_id)
        
    }
    componentDidMount() {
        let { details11 } = this.props;
        let { subjectType } = this.props;
        let { Room1 } = this.props;
        let { student } = this.props;
        let { Newstudent } = this.props;
        Newstudent()
        subjectType()
        details11()
        Room1()
        student()
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const columns = [
            {

                title: '姓名',
                dataIndex: 'student_name',
                key: 11
            },
            {

                title: '学号',
                dataIndex: 'student_id',
                key: 33
            },
            {

                title: '班级',
                dataIndex: 'grade_name',
                key: 334
            }, {

                title: '教室',
                dataIndex: 'room_text',
                key: 333
            },
            {

                title: '密码',
                dataIndex: 'student_pwd',
                key: 335
            },
            {

                title: '操作',
                key: 34,
                render: (text) => (
                    <span>
                        <a>修改</a>
                        |
                        <a onClick={() => { this.remove(text) }}>删除</a>
                    </span>
                )

            }
        ];
        let data = [];
        this.props.student1 && this.props.student1.map((item, index) => {
            return data.push({ ...item, key: "'" + index + "'" })
        })
        this.props.newstudent && this.props.newstudent.map((item, index) => {
            return data.push({ ...item, key: "'" + index + "'" })
        });

        return (
            <div className={typeStyle.wrap}>
                <p className={typeStyle.title}>学生管理</p>
                <div className={typeStyle.bottom}>
                    <div>
                        <div>
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit} style={{display:"flex"}}>
                                <Form.Item>
                                    {getFieldDecorator('note', {
                                        rules: [{ required: true, message: 'Please input your note!' }],
                                    })(<Input style={{ width: 200,marginLeft:20}} placeholder="输入学生姓名"/>)}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('room_text', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="请选择教室号"
                                            onChange={this.handleSelectChange} style={{ width: 200}} 
                                        >
                                            {
                                           this.props.room.map(item=>{
                                            return <Option value={item.room_text}>{item.room_text}</Option>
                                        })
                                    }
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('grade_name', {
                                        rules: [{ required: true, message: 'Please select your gender!' }],
                                    })(
                                        <Select
                                            placeholder="班级名"
                                            onChange={this.handleSelectChange} style={{ width: 200}} 
                                        >
                                           {
                                                // console.log(this.props.exam)
                                                this.props.detail1.map(item=>{
                                                    return <Option value={item.grade_name}>{item.grade_name}</Option>
                                                })
                                            
                                            } 

                                          
                                        </Select>
                                    )}
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        搜索
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <Modal
                            title="添加班级"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                                <Form.Item label="班级名">
                                    {getFieldDecorator('grade_name', {
                                        rules: [{ required: true, message: 'Please input your note!' }],

                                    })(<Input placeholder="班级名" />)}
                                </Form.Item>
                                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        确定
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
        ...state.room,
        ...state.detail1
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
        subjectType(payload) {
            console.log(payload)
            dispatch({ type: 'questions/subjectType', payload })
        },
        Room1(payload) {
            console.log(payload)
            dispatch({ type: 'exam/Room1', payload })
        },
        student(payload) {
            console.log(payload)
            dispatch({ type: 'exam/student', payload })
        },
        Newstudent(payload) {
            console.log(payload)
            dispatch({ type: 'exam/Newstudent', payload })
        },
        delstudent(payload) {
            console.log(payload)
            dispatch({ type: 'exam/delstudent', payload })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(QuestionsType))