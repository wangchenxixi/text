import React, { useEffect } from "react";
import { connect } from "dva";
import { Form, Input, Button, Select, InputNumber, DatePicker,message } from 'antd';
// import moment from 'moment';
import './examAdd.scss';

function examCompile(props) {
    useEffect(()=>{
         // 获取考试类型
         props.examType();
         // 获取课程类型
         props.subjectType();

        if(props.examAddFlag === 1){
            message.success('添加考试成功！')
        }else if(props.examAddFlag === -1){
            message.success('添加考试失败！')
        }
    },[props.examAddFlag]);
    // 表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                values.start_time = +values.start_time._d;
                values.end_time = +values.end_time._d;
                values.number = values.number * 1;
                console.log('Received values of form: ', values);
                // 添加考试
                props.examAdd(values);
                props.history.push('/exam/compile')
            }
        });
    }
    const { Option } = Select;
    // const dateFormat = 'YYYY/MM/DD';
    const { getFieldDecorator } = props.form;
    return <div className="exam-wrapper">
        <h2 className="user-title">添加考试</h2>
        <div className="exam-add-box">
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item label="试卷名称：">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: '请输入试卷名称!' }],
                    })(
                        <Input
                            style={{ width: '50%' }}
                            className='exam-title'
                        />,
                    )}
                </Form.Item>
                <Form.Item label="选择考试类型：">
                    {getFieldDecorator('exam_id', {
                        rules: [{ required: true, message: '请选择考试类型!' }],
                        initialValue: ''
                    })(
                        <Select style={{ width: 160 }}>
                        {                
                            props.examTypeData.map(item=>(
                                <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                            ))
                        }                       
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="选择课程：">
                    {getFieldDecorator('subject_id', {
                        rules: [{ required: true, message: '请选择课程!' }],
                        initialValue: ''
                    })(
                        <Select style={{ width: 160 }}>
                        {                
                            props.subjectTypeData.map(item=>(
                                <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                            ))
                        }
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="设置题量：">
                    {getFieldDecorator('number', {
                        rules: [{ required: true, message: '请设置题量!' }],
                        initialValue: '4'
                    })(
                        <InputNumber
                            style={{ width: 150 }}
                        />,
                    )}
                </Form.Item>

                <Button type="primary" htmlType="submit" className='login_form_button'>
                    创建试卷
                </Button>
            </Form>
        </div>
    </div>
}

const mapStateToProps = state => {
    return state.questions;
};

const mapDispatchToProps = dispatch => {
    return {
        // 获取考试类型
        examType(){
            dispatch({
                type:"questions/examType"
            })
        },
        // 获取课程类型
        subjectType(){
            dispatch({
                type:"questions/subjectType"
            })
        },
        // 添加考试
        examAdd(payload){
            dispatch({
                type: "questions/examAdd",
                payload
            })
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(examCompile));