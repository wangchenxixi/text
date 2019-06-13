import  React, {Component} from 'react';
import typeStyle from './QuestionsType.css'
import { Button, Input , Icon, Table, Modal } from 'antd'
import { connect } from 'dva';

class QuestionsType extends Component{   
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
        let { examadd } = this.props;
        console.log(this.state.num)
        examadd({text:this.state.value,sort:this.state.num})
        this.setState({
            visible: false
        })
    };
    componentDidMount(){
        let { exam } = this.props
        exam()
    }
    render(){
        const columns = [
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
                        <Button type="primary" onClick={this.typeAdd} icon="plus" size="large">
                            添加类型
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
                        <Table columns={columns} dataSource={this.props.typeList&&this.props.typeList} size="middle" />
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
            dispatch({type:'exam/insertQuestionsType',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuestionsType)