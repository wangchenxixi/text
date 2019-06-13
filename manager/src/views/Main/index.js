import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import React from 'react';
import styles from './index.css';
import { Route, Switch } from 'dva/router';
import MenuView from '../../components/menu'
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
          <MenuView/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
              <div className={styles.avatar}><Avatar size="large" icon="user" /></div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/questions/add" component={null}></Route>
              <Route path="/questions/type" component={null}></Route>
              <Route path="/questions/view" component={null}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default Home;