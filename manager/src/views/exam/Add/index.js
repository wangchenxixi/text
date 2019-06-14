import React, { useEffect } from 'react';
import styles from "./index.css";
import { Form, Input, Select, Button, Modal } from 'antd';
import { connect } from 'dva';
import ReactDOM from 'react-dom'
import Editor from 'for-editor'
const { TextArea } = Input;
const { Option } = Select;
const confirm = Modal.confirm;

function Add(props) {

    useEffect(() => {
        props.subjectType1();
        props.examType1();
        props.questionsType1();
        props.add();
           console.log(props);
        //    console.log("111",props.userInfoData.user_id)
    }, [])
    function showConfirm() {
        confirm({
            title: '确定提交吗?',
            content: '真的要添加这道题吗',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() { },
        });
    }
    function handleChange(value) {
        console.log(`selected ,`,value);
    }
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    let handleSelectChange = value => {
        console.log(value);
        props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };
       
    //   console.log(this.props)
    // render() {
    const { getFieldDecorator } = props.form;
    return (

        <div className={styles.box}>

            <p className={styles.p}>添加试题</p>
            <div className={styles.wrap}>
                <div>
                    <p>题目信息</p>
                    <p>题干</p>

                    <Form onSubmit={handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </div>
                <div className={styles.ipt}>
                    <p>题目主题</p>
                    <Editor/>
                </div>
                <div className={styles.chose}>
                    <p>请选择考试类型</p>
                    <Select onChange={handleChange}
                        defaultValue={1}
                        labelInValue
                        style={{ width: 120 }}
                    >
                        {
                            props.examTypeData && props.examTypeData.map(item => {
                                return <Option value={item.exam_name}>{item.exam_name}</Option>
                            })
                        }


                    </Select>
                </div>
                <div className={styles.chose}>
                    <p>请选择课程类型</p>
                    <Select onChange={handleChange}
                        labelInValue
                        style={{ width: 120 }}
                    >
                        {
                            props.subjectTypeData && props.subjectTypeData.map(item => {
                                return <Option key={item.questions_type_id} value={item.subject_text}>{item.subject_text}</Option>
                            })
                        }
                    </Select>
                </div>
                <div className={styles.chose}>
                    <p>请选择题目类型</p>
                    <Select onChange={handleChange}
                        labelInValue
                        style={{ width: 120 }}
                    >
                        {
                            props.questionsTypeData && props.questionsTypeData.map(item => {
                                return <Option key={item.questions_type_text} value={item.questions_type_text}>{item.questions_type_text}</Option>
                            })
                        }
                    </Select>
                </div>
                <div className={styles.ipt}>
                    <p>答案主题</p>
                    <TextArea rows={6} />
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
          </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>)

}

// }
const mapStateToProps = state => {
    return {
        ...state.questions
    }
}

const mapDisaptchToProps = dispatch => {
    return {

        subjectType1(payload) {
            dispatch({
                type: 'questions/subjectType'
            })

        },
        examType1(payload) {
            dispatch({
                type: 'questions/examType'
            })

        },
        questionsType1(payload) {
            dispatch({
                type: 'questions/questionsType'
            })

        },
        add(payload)
        {
            dispatch({
                type: 'questions/add',
                payload
            })
        }

    }

}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(Add))