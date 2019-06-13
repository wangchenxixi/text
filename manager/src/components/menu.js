import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'dva/router';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function MenuComp(props){
    let collapsed=false;
    
      let onCollapse = collapsed => {
        console.log(collapsed);
        return collapsed
      };
  return <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
  <div className="logo" />
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    <Menu.Item key="4">
      <Link to="/questions/shouye">
        <Icon type="pie-chart" />
        <span>首页</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link to="/questions/shouye">
      <Icon type="desktop" />
      <span>Option</span>
      </Link>
      
    </Menu.Item>
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="user" />
          <span>试题管理</span>
        </span>
      }
    >
      <Menu.Item key="1">
        <Link to="/questions/add">添加试题</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/questions/type">试题分类</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/questions/view">查看试题</Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="team" />
          <span>Team</span>
        </span>
      }
    >
      <Menu.Item key="6">Team 1</Menu.Item>
      <Menu.Item key="8">Team 2</Menu.Item>
    </SubMenu>
    <Menu.Item key="9">
      <Icon type="file" />
      <span>File</span>
    </Menu.Item>
  </Menu>
</Sider>
}

export default MenuComp;
