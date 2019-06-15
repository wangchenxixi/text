import React, {useEffect} from 'react'
import { Radio, Select, Button, Form } from 'antd';
import { connect } from 'dva';
import styleSee from './QuestionsSee.scss'
import TableView from  '../../../../components/Table.js'
const { Option } = Select;

function QuestionsSee(props){
    useEffect(()=>{
         // 获取考试类型
         props.examType();
         // 获取课程类型
         props.subjectType();
         // 获取题目类型
         props.questionsType();
         // 获取所有试题
         props.questions()
    },[])
    
    // 查询
    let handleSearch = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // 按条件获取试题
                props.getQuestion(values) 
            }
        });        
    }

    const { getFieldDecorator } = props.form; 
    return (
        <div className={styleSee.wrap}>
            <Form onSubmit={handleSearch} className="login-form">
                <h2 className={styleSee.title}>查看试题</h2>
                <div className={styleSee.bottom}>
                    <div className={styleSee.Bottom_top}>
                        <div className={styleSee.Bottom_tit}>课程类型:</div>
                        {getFieldDecorator('subject_id', {
                            valuePropName: 'checked',
                            initialValue: undefined,
                        })(
                            <Radio.Group defaultValue="a" buttonStyle="solid" className={styleSee.radio_list}>
                                <Radio.Button value={undefined} className={styleSee.radio_item}>All</Radio.Button>
                                {                
                                    props.subjectTypeData.map((item)=>(
                                        <Radio.Button value={item.subject_id} key={item.subject_id} className={styleSee.radio_item}>{item.subject_text}</Radio.Button>
                                    ))
                                }
                            </Radio.Group>
                        )}
                        
                    </div>
                    <div className={styleSee.top_search}>
                        <div className={styleSee.Bottom_babel}>
                            <div className={styleSee.Bottom_tit}>考试类型:</div>
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
                        <div className={styleSee.Bottom_babel}>
                            <div className={styleSee.Bottom_tit}>题目类型:</div>
                            <Form.Item>
                                {getFieldDecorator('questions_type_id', {
                                    initialValue: undefined
                                })(
                                    <Select style={{ width: 160 }}>
                                    {                
                                        props.questionsTypeData.map(item=>(
                                            <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                        ))
                                    }
                                    </Select>
                                )}
                            </Form.Item>                           
                        </div>
                        <Button type="primary" htmlType="submit" icon="search">查 询</Button>
                    </div>
                </div>
                <div className={styleSee.see_context}>
                {
                    props.getQuestionsData.length ? <TableView props={props.getQuestionsData}/> : null 
                }                  
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
        // 获取题目类型
        questionsType(){
            dispatch({
                type:"questions/questionsType"
            })
        },
        // 按条件获取试题
        getQuestion(payload){
            dispatch({
                type:"questions/getQuestion",
                payload
            })
        },
        // 获取所有试题
        questions(){
            dispatch({type:'questions/getQuestions'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(QuestionsSee))
