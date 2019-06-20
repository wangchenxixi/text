import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'dva/router';
import { injectIntl } from 'react-intl'
const MenuView = (props) => {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    return (
        <Sider style={{ overflow: 'auto', height: '100%', left: 0, width: '100%' }}>
            <Menu theme="dark"
                mode="inline"
                defaultOpenKeys={['questions']}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="project" />
                            {props.intl.formatMessage({ id: 'router.questions' })}
                        </span>}>
                    <Menu.Item key="1">
                        <Link to="/questions/add">{props.intl.formatMessage({ id: 'router.questions.add' })}</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/questions/type">{props.intl.formatMessage({ id: 'router.questions.add' })}</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/questions/See">{props.intl.formatMessage({ id: 'router.questions.add' })}</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="user" />
                            {props.intl.formatMessage({ id: 'router.user' })}
                        </span>}>
                    <Menu.Item key="4">
                        <Link to="/user/add">{props.intl.formatMessage({ id: 'router.user.add' })}</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/user/see">{props.intl.formatMessage({ id: 'router.user.show' })}</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="setting" />
                            {props.intl.formatMessage({ id: 'router.exam' })}
                        </span>}>
                    <Menu.Item key="6">
                        <Link to="/exam/add">{props.intl.formatMessage({ id: 'router.exam.add' })}</Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to="/exam/list">{props.intl.formatMessage({ id: 'router.examlist' })}</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <Icon type="desktop" />
                            {props.intl.formatMessage({ id: 'router.class' })}
                        </span>}>
                    <Menu.Item key="8">
                        <Link to="/class/management">{props.intl.formatMessage({ id: 'router.class.grade' })}</Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to="/class/classroom">{props.intl.formatMessage({ id: 'router.class.teacher' })}</Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to="/class/student">{props.intl.formatMessage({ id: 'router.class.students' })}</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub5"
                    title={
                        <span>
                            <Icon type="appstore" />
                            {props.intl.formatMessage({ id: 'router.look' })}
                        </span>}>
                    <Menu.Item key="11">
                        <Link to="/class/special">{props.intl.formatMessage({ id: 'router.Awaiting' })}</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

MenuView.propTypes = {
};

export default injectIntl(MenuView);