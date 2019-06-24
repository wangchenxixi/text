import React,{useEffect} from 'react'
import MarkingStyle from './markingManagement.scss'
import { Table } from 'antd'
import { connect } from 'dva'
import { Link } from 'dva/router'
function Marking (props){
  let { getClass , getGradeViewData } = props
    useEffect(()=>{
      getClass()
    },[])
    const columns = [
        {
          title: '班级名',
          dataIndex: 'grade_name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '课程名称',
          dataIndex: 'subject_text',
          key: 'age',
        },
        {
          title: '阅卷状态',
          dataIndex: '',
          key: 'address',
        },
        {
          title: '教室号',
          key: 'tags',
          dataIndex: 'room_text'
        },
        {
          title: '操作',
          render: (text, record) => (
            <span>
              <Link to={`/class/marking/${text.grade_id}`}>批卷</Link>
            </span>
          ),
        },
      ];
      let data=getGradeViewData
    return (
        <div>
            <p className={MarkingStyle.title}>待批班级</p>
            <div className={MarkingStyle.bottom}>
                <Table columns={columns} dataSource={data} rowKey={data=>data.grade_id}/>
            </div>
        </div>
    )
} 
const mapStateToProps=(state)=>{
  return{
    ...state.class
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getClass(){
      dispatch({type:'class/getGradeData'})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Marking)