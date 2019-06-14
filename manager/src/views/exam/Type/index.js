import React, { Component } from 'react';
import styles from "./index.css"
import { Select, Button, List, Skeleton } from 'antd';
import reqwest from 'reqwest';
import { connect } from "dva"
const { Option } = Select;
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
function handleChange(value) {
    console.log(`selected ${value}`);
}


class Look extends Component {
    constructor(props) {
        super(props);
        props.subjectType1();
        props.examType1();
        props.exam22();
        props.Allquestions();
        console.log("props.....", this.props)
    }
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };
    componentDidMount() {

        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            }
        });
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {

                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };
    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;
        return (
            <div className={styles.box}>
                <p className={styles.p}>查看试题</p>
                <div className={styles.wrap}>
                    <p>课程类型</p>
                    <div className={styles.nav}>  <p>课程类型</p>
                        <div className={styles.select}>
                            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>

{
    this.props.typeList.map(item=>{
        return <Option value={item.questions_type_text}>{item.questions_type_text}</Option>
    })
}

                            </Select>
                        </div>
                    </div>

                    <div className={styles.nav}>  <p>题目类型</p>
                        <div className={styles.select}>
                            <Select  style={{ width: 120 }} onChange={handleChange}>
                                {
                                this.props.typeList.map(item=>{
                                    return <Option value={item.questions_type_text}>{item.questions_type_text}</Option>
                                })
                            }
                            </Select>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <Button type="primary">+添加试题</Button>
                    </div>

                </div>

                <div className={styles.more}>

                    <List
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={item => (
                            <List.Item actions={[<a>编辑</a>]}>
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta

                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description="1"
                                    />
                                </Skeleton>
                            </List.Item>
                        )}
                    />


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.exam
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        exam22() {
            dispatch({
                type: 'exam/getQuestionsType'
            })
            
        },
        subjectType1(payload) {
            dispatch({
                type: 'questions/subjectType'
            })

        },
        examType1(payload) {
            dispatch({
                type: 'questions/examType'
            })

        },
        Allquestions(payload) {
            dispatch({
                type: 'questions/getAllquestions'
            })

        },
        
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Look)