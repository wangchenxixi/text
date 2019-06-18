import React, {useEffect} from 'react';
import { connect } from 'dva';
import { Input ,Select, Button, Form, message} from 'antd';
import  styles from './questionsAdd.scss';
import Editor from 'for-editor'

const { Option } = Select;
function questionsAdd(props){  
    useEffect(()=>{
        // 获取用户信息
        props.userInfo();
        // 获取考试类型
        props.examType();
        // 获取课程类型
        props.subjectType();
        // 获取题目类型
        props.questionsType();

        if(props.addQuestionsFlag === 1){
            // 添加成功
            message.success('添加成功！')
            
        }else if(props.addQuestionsFlag === -1){
            // 添加失败
            message.error('添加失败！')
        }  
    }, [props.addQuestionsFlag]);

    // 表单提交
    let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
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
    <h2 className={styles.title}>添加试题</h2>
    <div className={styles.main}>
    <Form onSubmit={handleSubmit} className="login-form">
        <div className={styles.markcont}>
            <p>题目信息</p>
            <Form.Item>
                {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入题目标题!' }],
                })(
                    <Input placeholder="请输入题目标题,不超过20个"/>
                )}
            </Form.Item>
            <p>题目管理</p>
            <Form.Item>
                {getFieldDecorator('questions_stem', {
                    initialValue: ''
                })(
                    <Editor height="auto" />
                )}
            </Form.Item>        
        </div>
        <div>
            <p>请选择考试类型：</p>
            <Form.Item>
                {getFieldDecorator('exam_id', {
                    rules: [{ required: true, message: '请输入题目标题!' }],
                    initialValue: '请选择考试类型'
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
        <div>
            <p>请选择课程类型：</p>
            <Form.Item>
                {getFieldDecorator('subject_id', {
                    rules: [{ required: true, message: '请输入题目标题!' }],
                    initialValue: '请选择课程类型'
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
        <div>
            <p>请选择题目类型：</p> 
            <Form.Item>
                {getFieldDecorator('questions_type_id', {
                    rules: [{ required: true, message: '请输入题目标题!' }],
                    initialValue: '请选择题目类型'
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
        <div className={styles.markcont}>
            <h2 className={styles.daanTit}>答案信息</h2>
            <Form.Item>
                {getFieldDecorator('questions_answer', {
                    initialValue: ''
                })(
                    <Editor height="auto" />
                )}
            </Form.Item> 
        </div>
        <Button type="primary" htmlType="submit" className={styles.submit_btn} >提交</Button>
        </Form>
    </div>
</div> 
}
//props的类型检查
questionsAdd.propTypes={

}
//props的默认值
questionsAdd.defaultProps={
    
}
const mapStateToProps=state=>{
    console.log("state...",state)
    return{
        ...state.questions,
        ...state.user
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        // 添加试题
        add(payload){
            console.log(payload)
            dispatch({
                type:"questions/add",
                payload
            })
        },
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
        // 获取用户信息
        userInfo(){
            dispatch({
                type: "user/userInfo"
            })
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(questionsAdd))