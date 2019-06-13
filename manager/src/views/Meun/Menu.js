import React from 'react';
import styles from './Meun.css';
import { Menu, Dropdown, Layout  } from 'antd';
import { Route, Switch, Redirect } from 'dva/router';
import MenuView from '@/components/Menu.js'
import QuestionsAdd from './questionsManagement/questionsAdd/questionsAdd'
import QuestionsType from './questionsManagement/QuestionsType/QuestionsType'
import QuestionsSee from './questionsManagement/QuestionsSee/QuestionsSee'

function ExaminationMenu(){
    const menu = (
        <Menu>
            <Menu.Item key="1">个人中心</Menu.Item>
            <Menu.Item key="2">我的班级</Menu.Item>
            <Menu.Item key="3">设置</Menu.Item>
            <Menu.Item key="4">退出登录</Menu.Item>
        </Menu>
    );
    const { Header, Content } = Layout;
    return (
        <Layout className={styles.wrap} style={{flexDirection:"column"}}>
            <Header className={styles.header} >
                <div className={styles.headerTop}>
                    <img className={styles.headerImg} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
                    <div className={styles.headerBottom}>
                        {
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#" className={styles.headerBottomList}>
                                  <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
                                  <span>chenmanjie</span>
                                </a>
                            </Dropdown>
                        }
                    </div>
                </div>
            </Header>
            <div className={styles.section}>
                <MenuView />
                <Content style={{ overflow: 'auto' }}>
                    <Switch>
                        <Redirect from="/" to="/questions/add" exact></Redirect>
                        <Route path="/questions/add" component={QuestionsAdd}></Route>
                        <Route path="/questions/type" component={QuestionsType}></Route>
                        <Route path="/questions/See" component={QuestionsSee}></Route>                      
                    </Switch>
                </Content>
            </div>
        </Layout>
    )
}

ExaminationMenu.propTypes = {

};

export default ExaminationMenu
