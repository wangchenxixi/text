import React from 'react';
import { List, Button } from 'antd';
import '../views/Meun/questionsManagement/QuestionsSee/Table.scss';

function QuestionList({props}){
    // console.log(props)
    return (
        <div>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={props&&props}
                style={{padding:20}}
                pagination={{
                    pageSize: 6,
                }}
                renderItem={item => (                
                    <List.Item actions={[<Button type="primary">添加</Button>] } style={{display:'flex',justifyContent:'space-between'}} className="table-list">
                        <div>
                            <p>{item.title}</p>
                            <div className="color">
                                <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                                <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                                <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                            </div>
                            <p style={{color:'blue'}}>{item.user_name} 发布</p>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default (QuestionList)
