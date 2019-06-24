import React from 'react';
import styles from './Meun.css';
import { Menu, Dropdown, Layout , Button } from 'antd';
import { Route, Switch, Redirect } from 'dva/router';
import { connect } from 'dva'
import MenuView from '@/components/Menu.js'

function ExaminationMenu(props){
    let menu = (
        <Menu>
            <Menu.Item key="1">个人中心</Menu.Item>
            <Menu.Item key="2">我的班级</Menu.Item>
            <Menu.Item key="3">设置</Menu.Item>
            <Menu.Item key="4">退出登录</Menu.Item>
        </Menu>
    );
    const { Header, Content } = Layout;
    if (!props.myView.length){
        return null;
    }
    return (
        <Layout className={styles.wrap} style={{flexDirection:"column"}}>
            <Header className={styles.header} >
                <div className={styles.headerTop}>
                    <img className={styles.headerImg} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/>
                    <div className={styles.headerBottom}>
                        {
                            <Dropdown overlay={menu}>
                                <a className={["ant-dropdown-link",styles.headerBottomList]}>
                                  <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
                                  <span>{props.userInfoData.user_name}</span>
                                </a>
                            </Dropdown>
                        }
                        <Button onClick={()=>{props.changeLocal(props.locale==='zh'?'en':'zh')}}>{props.locale==='zh'?'英文':'中文'}</Button>
                    </div>
                </div>
                
            </Header>
            <div className={styles.section}>
                <MenuView />
                <Content style={{ overflow: 'auto' }} className={styles.main}>
                    <Switch>
                        <Redirect exact from="/" to="/questions/add"/> 
                        {/* 渲染该用户拥有的路由 */}
                        {
                            props.myView.map(item=>{
                                if(item.children){
                                    return item.children.map((value,key)=>{
                                        return <Route key={key} path={value.path} component={value.component}/>
                                    })
                                }else{
                                    return false;
                                }                               
                            })
                        }
                        {/* 403路由 */}
                        {
                            props.forbiddenView.map((item)=>{
                                return <Redirect key={item} from={item} to="/403"/>
                            })
                        }
                        {/* 剩余路由去404 */}
                        <Redirect to="/404"/>
                    </Switch>
                </Content>
            </div>
        </Layout>
    )
}
const mapStateToProps=state=>{
    // console.log('main..state..',state)
    return {
        ...state.user,
        locale:state.global.locale
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        changeLocal(payload){
            dispatch({type:'global/changeLocale',payload})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExaminationMenu)
