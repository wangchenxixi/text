import React, { useEffect } from 'react'
import { Select, Button, Form, Table } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import moment from "moment"
import './index.scss';
import hashHistory from "react-router"
const { Option } = Select;

function QuestionsSee(props) {

    useEffect(() => {
        // 获取考试类型
        props.examType();
        // 获取课程类型
        props.subjectType();
        // 获取试卷列表
        props.examList();
        props.detail()
    }, [])
    console.log("props..", props);

    const { getFieldDecorator } = props.form;
    return (

        <div className='exam-wrapper'>
            <Form className="login-form">
                <h2 className='user-title'>试卷详情</h2>
                <div className="mainbox">
                {
                //    props.detail.questions
                  
                }             
                </div>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state...", state)
    return {
        ...state.questions,
        ...state.exam
    }
}
const mapDispatchToProps = dispatch => {
    return {
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
        // 获取试卷列表
        examList() {
            dispatch({
                type: "exam/examList"
            })
        },
        detail()
        {
            dispatch({
                type: "exam/details"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(QuestionsSee))


