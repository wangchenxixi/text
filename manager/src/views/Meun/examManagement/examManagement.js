import React, { useEffect } from 'react';
// import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input, Select, Button, Form, InputNumber, DatePicker } from 'antd';
import styles from './examManagement.scss';

const { Option } = Select;
function examAdd(props) {
    console.log(props)
    useEffect(() => {
        //     //获取用户信息
        //     props.userInfo();
        // 获取考试类型
        props.examType();
        // 获取课程类型
        props.subjectType();
        //     // 获取题目类型
        //     props.questionsType();
        //     if(props.addQuestionsFlag === 1){
        //         message.success('添加成功')
        //     }else if(props.addQuestionsFlag === -1){
        //         message.success('添加失败')            
        //     }
    }, [
            // props.addQuestionsFlag
        ]);
    const { RangePicker } = DatePicker;
    let onChange = (value) => {
        console.log(value)
    }
    let onOk = (value) => {
        console.log(value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                // console.log('Received values of form: ', values);
                let params = values;
                params.user_id = props.userInfoData.user_id;
                console.log(params);
                props.add(params)
            }
        });
    }
    const { getFieldDecorator } = props.form;
    return <div className={styles.content}>
        <h2 className={styles.title}>添加考试</h2>
        <div className={styles.main}>
            <Form onSubmit={handleSubmit} className="login-form" style={{ marginTop: 0, float: "left" }}>
                <div className={styles.markcont}>
                    <p>试卷名称</p>
                    <Form.Item>
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: '请输入试卷名称！' }]
                        })(
                            <Input placeholder="请输入试卷名称，不超过20字！" />,
                        )}
                    </Form.Item>
                </div>
                <div>
                    <p>请选择考试类型：</p>
                    <Form.Item>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: '' }],
                            initialValue: '请选择考试类型'
                        })(
                            <Select style={{ width: 160 }}>
                                {
                                    props.examTypeData.map(item => (
                                        <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>
                </div>
                <div>
                    <p>请选择课程类型：</p>
                    <Form.Item>
                        {getFieldDecorator('subject_id', {
                            rules: [{ required: true, message: '' }],
                            initialValue: '请选择课程类型'
                        })(
                            <Select style={{ width: 160 }}>
                                {
                                    props.subjectTypeData.map(item => (
                                        <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </Form.Item>
                </div>
                <div>
                    <p>设置题量:</p>
                    <Form.Item>
                        {getFieldDecorator('number', {
                            rules: [{ required: true, message: '' }],
                            initialValue: '1'
                        })(
                            <InputNumber min={1} max={4} onChange={onChange} />
                        )}
                    </Form.Item>
                </div>
                <div className={styles.time}>
                    <p>考试时间:</p>
                    <div style={{ display: "flex" }}>
                        <Form.Item >
                            {getFieldDecorator('start_time', {
                                rules: [{ required: true, message: '' }],
                            })(
                                <DatePicker showTime placeholder="Start Time" onChange={onChange} onOk={onOk} />
                            )}
                        </Form.Item>
                        -----
                    <Form.Item>
                            {getFieldDecorator('end_time', {
                                rules: [{ required: true, message: '' }],
                            })(
                                <DatePicker showTime placeholder="End Time" onChange={onChange} onOk={onOk} />
                            )}
                        </Form.Item>
                    </div>

                </div>
                <div className={styles.markcont}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.submit_btn} >创建试卷</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    </div>
}
//props的类型检查
examAdd.propTypes = {

}
//props的默认值
examAdd.defaultProps = {

}
const mapStateToProps = state => {
    console.log("state...", state)
    return {
        ...state.questions,
        ...state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // // 添加试题
        // add(payload){
        //     console.log(payload)
        //     dispatch({
        //         type:"questions/add",
        //         payload
        //     })
        // },
        // 获取考试类型
        examType() {
            dispatch({
                type: "questions/examType"
            })
        },
        // 获取课程类型
        subjectType() {
            dispatch({
                type: "questions/subjectType"
            })
        },
        // // 获取题目类型
        // questionsType(){
        //     dispatch({
        //         type:"questions/questionsType"
        //     })
        // },
        // //获取用户信息
        // userInfo(){
        //     dispatch({
        //         type:"user/userInfo"
        //     })
        // }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(examAdd))