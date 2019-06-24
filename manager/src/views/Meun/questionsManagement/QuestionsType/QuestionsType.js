import  React, {Component} from 'react';
import typeStyle from './QuestionsType.css'
import { Button, Input, Table, Modal } from 'antd'
import { connect } from 'dva';

class QuestionsType extends Component{   
    constructor(props){
        super(props)
        this.state={
            visible: false,
            value:'',
            num:0,
            selectedRowKeys: [],
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
        let { examadd } = this.props;
        examadd({text:this.state.value,sort:Math.floor(Math.random()*100)})
        this.setState({
            visible: false
        })
    };
    componentDidMount(){
        let { exam } = this.props
        exam()
        console.log(this.props)
    }
    render(){
        const columns = [
            {
                
                title: '类型ID',
                dataIndex: 'questions_type_id',
                key:1
            },
            {
               
                title: '类型名称',
                dataIndex: 'questions_type_text',
                key:2
            },
            {
                
                title: '操作',
                dataIndex: '删除',
                key:3
            },
        ];
        let data=[];
        this.props.typeList&&this.props.typeList.map((item,index)=>{
            return data.push({...item,key:"'"+index+"'"})
        })
        return (
            <div className={typeStyle.wrap}>
                <p className={typeStyle.title}>试题分类</p>
                <div className={typeStyle.bottom}>
                    <div>
                        <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
                            添加类型
                        </Button>
                        <Modal
                            title="创建新类型"
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
const mapStateToProps=(state)=>{
    return {
        ...state.exam
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        exam(){
            dispatch({type:'exam/getQuestionsType'})
        },
        examadd(payload){
            console.log(payload)
            dispatch({type:'exam/insertQuestionsType',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuestionsType)