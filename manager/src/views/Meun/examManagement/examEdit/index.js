import React, {useState, useEffect} from 'react';
import { Button, Drawer } from 'antd';
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import TableView from  '@/components/questionList.js'
import style from './examEdit.scss';

function examEdit(props){
    useEffect(()=>{
        // 获取所有试题
        props.questions()
    },[]);
    let [visible,showDrawer] = useState(false);  

    // 创建试卷到试卷列表
    let createExamFn = () => {
        let question_ids = [];
        props.createpaperList.questions.forEach(item => {
            question_ids.push(item.questions_id)
        })
        let str = JSON.stringify(question_ids.join(','));
        // console.log(str.replace(/\"/g,"'"));
        let params = {question_ids:str};
        console.log(params,props.createpaperList.exam_exam_id);
        props.createExamGet(params,props.createpaperList.exam_exam_id)
    }
    return <div className={style.exap_wrapper}>
        <h2 className='user-title'>创建试卷</h2>
        <div className={style.exam_main}>
            <Button onClick={()=>showDrawer(true)}>添加新题</Button>
            <div className={style.exam_content}>
                <h2>{props.createpaperList.title}</h2>
                <p>考试时间：1小时30分钟  监考人：刘于  开始考试时间：2018.9.10  10:00  阅卷人：刘于</p>
                <div className={style.exam_question_box}>
                    {
                        props.createpaperList.questions.map((item,index) => (
                            <div className={style.exam_item} key={item.questions_id}>
                                <h4>
                                    <p>{index+1}: {item.title}</p>
                                    <Button type="link">删除</Button>
                                </h4> 
                                <div>
                                    <ReactMarkdown source={item.questions_stem} />
                                </div>
                            </div>
                        ))
                    }  
                </div>
                <Button type="primary" onClick={createExamFn}>创建试卷</Button>
            </div>
        </div>
        <Drawer
            title="所有题目"
            placement="right"
            closable={false}
            width="520"
            onClose={()=>showDrawer(false)}
            visible={visible}
            style={{padding:0}}
        >
            {
                props.getQuestionsData.length ? <TableView props={props.getQuestionsData}/> : null 
            } 
        </Drawer>
    </div>
}

const mapState = state => {
    console.log(state)
    return {
        ...state.questions
    }
}
const mapDispatch = dispatch => {
    return {
        // 获取所有试题
        questions(){
            dispatch({type:'questions/getQuestions'})
        },
        createExamGet(params,id){
            dispatch({
                type:'exam/createExamGet',
                params,
                id
            })
        }
    }
}
export default connect(mapState,mapDispatch)(examEdit);