import React from 'react';
import { List } from 'antd';
import { Link } from 'dva/router'
import '../views/Meun/questionsManagement/QuestionsSee/Table.scss';

function TableView({props}){
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
                    <List.Item actions={[<Link to={`/questions/edit/${item.questions_id}`}>编辑</Link>] } style={{display:'flex',justifyContent:'space-between'}} className="table-list">
                        <Link to={`/questions/detail/${item.questions_id}`} className="table-href"> 
                        <div>
                            <p>{item.title}</p>
                            <div className="color">
                                <p className="content_every_cont_left_left_y">{item.questions_type_text}</p>
                                <p className="content_every_cont_left_center_y">{item.subject_text}</p>
                                <p className="content_every_cont_left_right_y">{item.exam_name}</p>
                            </div>
                            <p style={{color:'blue'}}>{item.user_name} 发布</p>
                        </div>
                        </Link>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default (TableView)
