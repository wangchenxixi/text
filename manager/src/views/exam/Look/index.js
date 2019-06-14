import React, { Component,useEffect } from 'react';
import styles from "./index.css";
import { Button, Table, Modal, Input } from 'antd';
import { connect } from 'dva';
const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: <input placeholder="请输入类型名称" />,
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() { },
  });
}

function Look(props) {
  useEffect(()=>{
    console.log(props)
  },[])
    const columns = [
      {
        title: '类型ID',
        dataIndex: 'questions_type_id'
      },
      {
        title: '类型名称',
        dataIndex: 'questions_type_text'
      },
      {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
      }
    ];
    return (

      <div className={styles.box}>
        <p className={styles.p}> 试题分类</p>
        <div className={styles.wrap}>
          <Button onClick={showConfirm}>+添加试题</Button>
          <div className={styles.type}>
            <Table columns={columns} dataSource={props.typeList} />
          </div>
        </div>

      </div>
    )
  

}

const mapStateToProps = state => {
  return {
    ...state.exam
  }
}
const mapDisaptchToProps = dispatch => {
  return {
    exam() {
      dispatch({
        type: 'questions/Allquestions'
      })
    }
  }
}
export default connect(mapStateToProps, mapDisaptchToProps)(Look)