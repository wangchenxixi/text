import React, {useEffect} from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input ,Select, Button} from 'antd';
import  styles from './questionsAdd.scss';

const { Option } = Select;
function questionsAdd(props){  
    useEffect(()=>{
        props.add({
            questions_type_id: '1',
            questions_stem: '2',
            subject_id: '3',
            exam_id: '2',
            user_id: '2',
            questions_answer:'2',
            title: '2'
        })
        // 获取考试类型
        props.examType();
        // 获取课程类型
        props.subjectType();
        // 获取题目类型
        props.questionsType();
    }, []);
    return <div className={styles.content}>
    <h2 className={styles.title}>添加试题</h2>
    <div className={styles.main}>
        <div className={styles.markcont}>
            <p>题目信息</p>
            <Input placeholder="请输入题目标题,不超过20个" />
            <p>题目管理</p>
            <Markdown />
        </div>
        <div>
            <p>请选择考试类型：</p>
            <Select defaultValue='请选择考试类型' style={{ width: 160 }}>
            {                
                props.examTypeData.map(item=>(
                    <Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>
                ))
            }
            </Select>        
        </div>
        <div>
            <p>请选择课程类型：</p>
            <Select defaultValue="请选择课程类型" style={{ width: 160 }}>
            {                
                props.subjectTypeData.map(item=>(
                    <Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
                ))
            }
            </Select>
        </div>
        <div>
            <p>请选择题目类型：</p> 
            <Select defaultValue="请选择题目类型" style={{ width: 160 }}>
            {                
                props.questionsTypeData.map(item=>(
                    <Option value={item.questions_type_text} key={item.questions_type_id}>{item.questions_type_text}</Option>
                ))
            }
            </Select>
        </div>
        <div className={styles.markcont}>
            <h2 className={styles.daanTit}>答案信息</h2>
            <Markdown />
        </div>
        <Button type="primary" htmlType="submit" className={styles.submit_btn}>提交</Button>
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
        ...state.questions
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
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(questionsAdd)