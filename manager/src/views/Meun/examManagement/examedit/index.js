import React, { useEffect, Component } from 'react'
import { Select, Form, Drawer, Button } from 'antd';
import { connect } from 'dva';
import './index.scss';
class QuestionsSee extends Component {
    constructor(props) {
        super(props)
        this.state = { visible: false };
        let { getQuestion } = this.props;
        getQuestion()
    }
    add = () => {

        let arr = {
            questions_type_id: this.props.questions.examAddData.questions[0].questions_type_id,
            questions_stem: this.props.questions.examAddData.questions[0].questions_stem,
            subject_id: this.props.questions.examAddData.questions[0].subject_id,
            exam_id: this.props.questions.examAddData.questions[0].exam_id,
            user_id: this.props.questions.examAddData.questions[0].user_id,
            questions_answer: this.props.questions.examAddData.questions[0].questions_answer,
            title: this.props.questions.examAddData.questions[0].title
        }
        let { add } = this.props;
        add()
        this.props.history.push('/exam/list')
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div>
                <div className="title">创建试卷</div>
                <Button type="primary" onClick={this.showDrawer} style={{ marginLeft: 20 }}>
                    添加新新题
            </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <div className="bottom">
                    {
                        console.log("props...........", this.props.questions.examAddData)
                    }
                    {/* <div className="wrap-box">{this.props.questions.examAddData.title&&this.props.questions.examAddData.title}</div> */}
                    <div>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</div>
                    <div>{
                        // console.log(this.props.questions.getQuestionsData)
                        this.props.questions.examAddData.questions && this.props.questions.examAddData.questions.map(item => {
                            return (
                                <div className="live">
                                    <p>{item.title}</p>
                                    <p>{item.questions_stem}</p>
                                </div>
                            )
                        })
                    }</div>
                    <Button onClick={() => { this.add() }}>创建试卷</Button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("state...", state)
    return {
        ...state

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getQuestion(payload) {
            dispatch({
                type: "questions/getQuestion",
                payload
            })
        },
        examAdd(payload) {
            dispatch({
                type: "questions/add",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(QuestionsSee))


