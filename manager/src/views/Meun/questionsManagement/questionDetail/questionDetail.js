import React, {useEffect}from 'react';
import detailStyle from'./questionDetail.scss';
import {connect} from 'dva'

function questionDetail(props){
    let { detail } = props
    let detailData = props.match.params.id
    let getDetailData = props.exam.getDetailDates  
    useEffect(()=>{
        detail(detailData)
    },[])
    console.log(props)
    return (
        <div className={detailStyle.wrap}>
            <p className={detailStyle.title}>试题详情</p>
                    {
                        getDetailData.map((item,index)=>{
                          return <div key={index} className={detailStyle.bottom}>
                                    <div className={detailStyle.left}>
                                        <p>出题人:dingshaoshan</p>
                                        <p>题目信息</p>
                                        <div className="color">
                                            <p className={detailStyle.content_every_cont_left_left_y}>{item.user_name}</p>
                                            <p className={detailStyle.content_every_cont_left_center_y}>{item.subject_text}</p>
                                            <p className={detailStyle.content_every_cont_left_right_y}>{item.questions_type_text}</p>
                                        </div>
                                        <div className={detailStyle.titleBox}>
                                            <p>{item.title}</p>
                                            <p>{item.questions_stem}</p>
                                        </div>
                                        <p>{item.questions_answer}</p>
                                        <div>
                                            <p>请根据题意在横线处填写合适的代码</p>
                                        </div>    
                                    </div>
                                <div className={detailStyle.right}>
                                    <p>答案信息</p>
                                    <p>{item.questions_answer}</p>
                                </div>
                        </div>
                    })
                }
        </div>        
    )
}
const mapStateToProps=(state)=>{
    return {
        ...state
    }
}   
const mapDispatchToProps=(dispatch)=>{
    return{
        detail(payload){
            dispatch({type:'exam/detail',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(questionDetail)