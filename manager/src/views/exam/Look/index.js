import React, { Component } from 'react';
import styles from "./index.css";
import { Button, Table } from 'antd';
const columns = [
  {
    title: '类型ID',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: '类型名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
class examType extends Component {

  render() {
    return (
      <div className={styles.box}>
        <p className={styles.p}> 试题分类</p>
        <div className={styles.wrap}>
          <Button type="primary">+添加试题</Button>
          <div className={styles.type}>
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    )
  }
}
export default examType