import React from 'react';
import { Menu, Icon, Layout  } from 'antd';
import { Link } from 'dva/router';

const MenuView = () => {
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
                    <span>试题管理</span>
                </span>}>
                <Menu.Item key="1">
                    <Link to="/questions/add">添加试题</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/questions/type">试题分类</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/questions/See">查看试题</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                <span>
                    <Icon type="user" />
                    <span>用户管理</span>
                </span>}>
                <Menu.Item key="4">
                    <Link to="/user/add">添加用户</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/user/see">用户展示</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                <span>
                    <Icon type="setting" />
                    <span>考试管理</span>
                </span>}>
                <Menu.Item key="6">
                    <Link to="/exam/add">添加考试</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/exam/list">试卷列表</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                <span>
                    <Icon type="desktop" />
                    <span>班级管理</span>
                </span>}>
                <Menu.Item key="8">
                    <Link to="/class/management">班级管理</Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <Link to="/class/classroom">教室管理</Link>
                </Menu.Item>
                <Menu.Item key="10">
                    <Link to="/class/student">学生管理</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub5"
                title={
                <span>
                    <Icon type="appstore" />
                    <span>阅卷管理</span>
                </span>}>
                <Menu.Item key="11">    
                    <Link to="/class/special">特批班级</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
    );
};

MenuView.propTypes = {
};

export default MenuView;