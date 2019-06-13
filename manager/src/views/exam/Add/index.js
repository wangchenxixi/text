import React, { Component,useEffect } from 'react';
import styles from "./index.css";
import {Form, Input, Select, Button } from 'antd';
import { connect } from 'dva';

const { TextArea } = Input;
const { Option } = Select;
function handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
}
function examAdd(props) {
    useEffect(()=>{
        props.examTypea()
        console.log(props.questions)
    })
    // render() {
    return (
        <div className={styles.box}>
            <p className={styles.p}>添加试题</p>
            <div className={styles.wrap}>
                <div>
                    <p>题目信息</p>
                    <p>题干</p>
                    <Input placeholder="Basic usage" />
                </div>
                <div className={styles.ipt}>
                    <p>题目主题</p>
                    <TextArea rows={6} />
                </div>
                <div className={styles.chose}>
                    <p>请选择考试类型</p>
                    <Select
                        labelInValue
                        defaultValue={{ key: '周考1' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                    >
                    {
                        // props.questions.examTypeData && props.questions.examTypeData.map(item=>{
                            // return <Option key={item.exam_id} value="周考1">{item.exam_name}</Option>
                        // })
                    }
                        
                    </Select>
                </div>
                <div className={styles.chose}>
                    <p>请选择课程类型</p>
                    <Select
                        labelInValue
                        defaultValue={{ key: 'javaScriptp1' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                    >
                        <Option value="周考1">周考1</Option>
                        <Option value="周考2">周考2</Option>
                    </Select>
                </div>
                <div className={styles.chose}>
                    <p>请选择题目类型</p>
                    <Select
                        labelInValue
                        defaultValue={{ key: '简答题' }}
                        style={{ width: 120 }}
                        onChange={handleChange}
                    >
                        <Option value="周考1">周考1</Option>
                        <Option value="周考2">周考2</Option>
                    </Select>
                </div>
                <div className={styles.ipt}>
                    <p>答案主题</p>
                    <TextArea rows={6} />
                </div>
                <Button type="primary">提交</Button>
            </div>
        </div>)
}

// }
const mapStateToProps = state => {
    console.log(state)
    return {
        ...state.user
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        examTypea(payload) {
            dispatch({
                type: 'questions/examType',
            })
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Form.create()(examAdd))