import React from 'react'
import { Radio, Select, Button } from 'antd';
import styleSee from './QuestionsSee.scss'

const { Option } = Select;

function QuestionsSee(){
    return <div className={styleSee.wrap}>
        <h2 className={styleSee.title}>查看试题</h2>
        <div className={styleSee.bottom}>
            <div className={styleSee.Bottom_top}>
                <div className={styleSee.Bottom_tit}>课程类型:</div>
                <Radio.Group defaultValue="a" buttonStyle="solid" className={styleSee.radio_list}>
                    <Radio.Button value="a" className={styleSee.radio_item}>All</Radio.Button>
                    <Radio.Button value="b" className={styleSee.radio_item}>Shanghai</Radio.Button>
                    <Radio.Button value="c" className={styleSee.radio_item}>Beijing</Radio.Button>
                    <Radio.Button value="d" className={styleSee.radio_item}>Chengdu</Radio.Button>
                    <Radio.Button value="e" className={styleSee.radio_item}>Shanghai</Radio.Button>
                    <Radio.Button value="f" className={styleSee.radio_item}>Beijing</Radio.Button>
                    <Radio.Button value="g" className={styleSee.radio_item}>Chengdu</Radio.Button>
                    <Radio.Button value="h" className={styleSee.radio_item}>Shanghai</Radio.Button>
                    <Radio.Button value="i" className={styleSee.radio_item}>Beijing</Radio.Button>
                    <Radio.Button value="j" className={styleSee.radio_item}>Chengdu</Radio.Button>
                </Radio.Group>
            </div>
            <div className={styleSee.top_search}>
                <div className={styleSee.Bottom_babel}>
                    <div className={styleSee.Bottom_tit}>考试类型:</div>
                    <Select defaultValue="lucy" style={{ width: '80%' }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className={styleSee.Bottom_babel}>
                    <div className={styleSee.Bottom_tit}>题目类型:</div>
                    <Select defaultValue="lucy" style={{ width: '80%' }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <Button type="primary" icon="search" >Search</Button>
            </div>
        </div>

        <div className={styleSee.see_context}>
            
        </div>
    </div>
}
export default QuestionsSee