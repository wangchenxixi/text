import React from 'react';
import { Menu, Icon, Layout  } from 'antd';
import { Link } from 'dva/router';
//添加国际划
import { injectIntl } from 'react-intl'
const MenuView = (props) => {
    const { SubMenu }  = Menu;
    const { Sider } = Layout;
    return (
    <Sider style={{overflow: 'auto', height: '100%',left: 0, width:'100%'}}>
        <Menu theme="dark"
            defaultOpenKeys={['sub1']}
            mode="inline">
            <SubMenu
                key="sub1"
                title={
                <span>
                    <Icon type="project" />
                    <span>{props.intl.formatMessage({id:'router.questions'})}</span>
                </span>}>
                <Menu.Item key="1">
                    <Link to="/questions/add">{props.intl.formatMessage({id:'router.questions.add'})}</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/questions/type">{props.intl.formatMessage({id:'router.qusetions.Type'})}</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/questions/See">{props.intl.formatMessage({id:'router.questions.List'})}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                <span>
                    <Icon type="user" />
                    <span>{props.intl.formatMessage({id:'router.users'})}</span>
                </span>}>
                <Menu.Item key="4">
                    <Link to="/user/add">{props.intl.formatMessage({id:'router.user.userAdd'})}</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/user/see">{props.intl.formatMessage({id:'router.user.display'})}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                <span>
                    <Icon type="setting" />
                    <span>{props.intl.formatMessage({id:'router.exam'})}</span>
                </span>}>
                <Menu.Item key="6">
                    <Link to="/exam/add">{props.intl.formatMessage({id:'router.exam.ExamAdd'})}</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/exam/list">{props.intl.formatMessage({id:'router.exam.ExamList'})}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                <span>
                    <Icon type="desktop" />
                    <span>{props.intl.formatMessage({id:'router.class'})}</span>
                </span>}>
                <Menu.Item key="8">
                    <Link to="/class/management">{props.intl.formatMessage({id:'router.class.Class'})}</Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <Link to="/class/classroom">{props.intl.formatMessage({id:'router.class.classRoom'})}</Link>
                </Menu.Item>
                <Menu.Item key="10">
                    <Link to="/class/student">{props.intl.formatMessage({id:'router.class.Stundent'})}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub5"
                title={
                <span>
                    <Icon type="appstore" />
                    <span>{props.intl.formatMessage({id:'router.marking.Marking'})}</span>
                </span>}>
                <Menu.Item key="11">    
                    <Link to="/class/special">{props.intl.formatMessage({id:'router.marking.MarkingClass'})}</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
    );
};

MenuView.propTypes = {
};

export default injectIntl(MenuView);