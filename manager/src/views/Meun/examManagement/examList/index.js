import React, {useEffect} from 'react'
import { Select, Button, Form } from 'antd';
import { connect } from 'dva';
import './examList.scss';
const { Option } = Select;

function QuestionsSee(props){
    useEffect(()=>{
         // 获取考试类型
         props.examType();
         // 获取课程类型
         props.subjectType();
        // 获取试卷列表
        props.examList();
    },[])
    
    // 查询
    let handleSearch = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                 
            }
        });        
    }

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
                                        props.examTypeData.map(item=>(
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
                                        props.subjectTypeData.map(item=>(
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
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state...",state)
    return{
        ...state.questions
    }
}
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
        // 获取试卷列表
        examList(payload){
            dispatch({
                type: "exam/examList",
                payload
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(QuestionsSee))
