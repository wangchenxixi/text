import  React, {Component} from 'react';
import typeStyle from './classList.css'
import { Button, Input , Icon, Table, Modal, Divider, Tag  } from 'antd'
import { connect } from 'dva';

class classList extends Component{   
    constructor(props){
        super(props)
        this.state={
            visible: false,
            value:'',
            num:9
        }
    }
    handleCancel = e => {
        this.setState({
            visible: false
        })
    };
    typeAdd = () => {
        this.setState({
            visible: true
        }) 
    };
    handleOk = e => {

        this.setState({
            visible: false
        })
    };
    componentDidMount(){
    }
    render(){
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
          ];  const columns = [
            {
              title: '类型ID',
              dataIndex: 'questions_type_id',
            },
            {
              title: '类型名称',
              dataIndex: 'questions_type_text',
            },
            {
              title: '操作',
              dataIndex: "",
            },
        ];
        return (
            <div className={typeStyle.wrap}>
                <p className={typeStyle.title}>试题分类</p>
                <div className={typeStyle.bottom}>
                    <div>
                        <Button type="primary" onClick={this.typeAdd} icon="plus" size="large" style={typeStyle.btn}>
                            班级管理
                        </Button>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <Input placeholder="请输入类型名称" value={this.state.value}
                                onChange={(e)=>{this.setState({value:e.target.value})}}
                            />
                        </Modal>
                    </div>
                    <div className={typeStyle.list}>
                    <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default classList