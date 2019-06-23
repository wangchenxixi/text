import React, { useEffect } from 'react'
import { Select, Form} from 'antd';
import { connect } from 'dva';
import './index.scss';
function QuestionsSee(props) {
    window.location.hash.split('=')[1]
    useEffect(() => {
        // 获取考试类型
        // 获取试卷列表
        props.detail(window.location.hash.split('=')[1])
    }, [])
    console.log("props..", props);

    const { getFieldDecorator } = props.form;
    return (

        <div className='exam-wrapper'>
            <Form className="login-form">
                <h2 className='user-title'>试卷详情</h2>
                <div className="mainbox">
                    {

                        props.exam.detail.questions&& props.exam.detail.questions.map(item => {
                           return  <div className="box">
                                    <p>{item.title}</p>
                                    <p>{item.questions_stem}</p>
                                    <p>{item.questions_answer}</p>
                            </div>
                        })

                    }
                </div>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state...", state)
    return {
        ...state

    }
}
const mapDispatchToProps = dispatch => {
    return {
        detail(payload) {
            dispatch({
                type: "exam/details",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(QuestionsSee))


