import React, { useEffect } from 'react'
import { Select, Button, Form, Table } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import moment from "moment"
import './examList.scss';
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
        props.details();
    }, [])
    console.log("props..", props);

    // 查询
    let handleSearch = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    let click=(props)=>{
        console.log(props)
        hashHistory.push("http://localhost:8000/#/exam/list"+props.exam_exam_id)
        // window.location.href="http://localhost:8000/#/exam/list"+props.exam_exam_id
    //    this.props.history.push="http://localhost:8000/#/exam/list"+props.exam_exam_id
    }
    const columns = [
        {

            title: '试卷类型',
            dataIndex: 'title',
            key: 1
        },
        {

            title: '班级',
            data: "考试班级",
            dataIndex: 'grade_name',
            key: 2,      
        },
        {

            title: '创建人',
            dataIndex: 'user_name',
            key: 3
        },
        {

            title: '开始时间',
            dataIndex: new Date('start_time').toLocaleString(),
            key: 4
        },
        {

            title: '结束时间',
            dataIndex: 'end_time',
            key: 5
        },
        {

            title: '操作',
            key: 6,
            render: (props) => (
                // <Link to={path=`/exam/detail?id=${props.exam_exam_id}`}>详情</Link>
                <Link to={{pathname:"/exam/detail",search:`id=${props.exam_exam_id}`}}>详情</Link>
                // <Link to="/exam/detail">详情</Link>
            )
        },
    ];
    
    //moment(props.examlis.start_time).format('YYYY-MM-DD HH:mm:ss')

    // function getLocalTime(nS) {     
    //     return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
    //  }     
    //  alert(getLocalTime(1561012341559)); 
    const { getFieldDecorator } = props.form;
    return (

        <div className='exam-wrapper'>
            <Form onSubmit={handleSearch} className="login-form">
                <h2 className='user-title'>试卷列表</h2>
                <div className='bottom'>
                    <div className='top_search'>
                        <div className='Bottom_babel'>
                            <div className='Bottom_tit'>考试类型:</div>
                            <Form.Item>
                                {getFieldDecorator('exam_id', {
                                    initialValue: undefined
                                })(
                                    <Select style={{ width: 160 }}>
                                        {
                                            props.examTypeData.map(item => (
                                                <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                            ))
                                        }
                                    </Select>
                                )}
                            </Form.Item>
                        </div>
                        <div className='Bottom_babel'>
                            <div className='Bottom_tit'>课程:</div>
                            <Form.Item>
                                {getFieldDecorator('subject_id', {
                                    initialValue: undefined
                                })(
                                    <Select style={{ width: 160 }}>
                                        {
                                            props.subjectTypeData.map(item => (
                                                <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                            ))
                                        }
                                    </Select>
                                )}
                            </Form.Item>
                        </div>
                        <Button type="primary" htmlType="submit" icon="search">查 询</Button>
                    </div>
                </div>
                <div className="mainbox">
                    <div className="main-top">
                        <span>试卷列表</span>
                        <p><Button>全部</Button><Button>进行中</Button><Button>已结束</Button></p>
                    </div>
                    <div>
                        {
                            // console.log(new Date(parseInt(1560925939536) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '))
                            console.log(moment(props.examlist.start_time).format('YYYY-MM-DD HH:mm:ss'))
                        }
                        <Table columns={columns} dataSource={props.examlist} />
                    </div>
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
        details()
        {
            dispatch({
                type: "exam/details"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(QuestionsSee))
