import React, { useEffect} from 'react';
import { connect } from 'dva';
import styles from "./showUser.css";
import { Tabs, Button, Table } from 'antd';
const { TabPane } = Tabs;

function showUser(props) {

  let columns = [
    {
      title: '用户名',
      dataIndex: "user_name",

    },
    {
      title: '密码',
      dataIndex: 'user_pwd',
    },
    {
      title: '身份',
      key: '身份',
      dataIndex: "identity_text"
    },
  ];
  let columns1 = [
    {
      title: '用户名',
      dataIndex: "api_authority_text",

    },
    {
      title: '密码',
      dataIndex: 'api_authority_url',
    },
    {
      title: '身份',
      key: '身份',
      dataIndex: "api_authority_method"
    },
  ];
  let column = [
    {
      title: '用户名',
      dataIndex: "identity_text",

    }
  ];
  let columns2 = [
    {
      title: '用户名',
      dataIndex: "api_authority_text",

    },
    {
      title: '密码',
      dataIndex: 'api_authority_url',
    },
    {
      title: '身份',
      key: '身份',
      dataIndex: "api_authority_method"
    },
  ];
  let columns3 = [
    {
      title: '身份名称',
      dataIndex: "identity_text",

    },
    {
      title: 'api权限名称',
      dataIndex: 'api_authority_text',
    },
    {
      title: 'api权限url',
      dataIndex: "api_authority_url"
    },
    {
      title: 'api权限方法',
      dataIndex: "api_authority_method"
    },
  ];
  let columns4 = [
    {
      title: '视图权限名称',
      dataIndex: "view_authority_text",

    },
    {
      title: '视图id',
      dataIndex: 'view_id',
    }
  ];
  let columns5 = [
    {
      title: '身份',
      dataIndex: "identity_text",

    },
    {
      title: '视图名称',
      dataIndex: 'view_authority_text'
    },
    {
      title: '视图id',
      dataIndex: 'view_id',
    }
  ];
  useEffect(() => {
    props.userData();
    props.liderData();
    props.apiData();
    props.identityData();
    props.viewData();
    props.andData();
  }, [])
  console.log("现在打印一下", props);
  return (
    <div>
      <div className={styles.title}>用户展示</div>
      <div className={styles.box}>
        <Tabs defaultActiveKey="3">
          <TabPane
            tab={
              <Button className={styles.btn}>用户数据</Button>
            }
            key="11"

          >
            <div style={{ marginTop: 20 }}>

              <Table columns={columns} dataSource={props.data.userData} size="middle" />
            </div>

          </TabPane>
          <TabPane
            tab={
              <Button className={styles.btn}>身份数据</Button>
            }
            key="22"

          >
            <div style={{ marginTop: 20 }}>

              <Table columns={column} dataSource={props.data.liderData} size="middle" />
            </div>

          </TabPane>
          <TabPane
            tab={
              <Button>api接口权限</Button>
            }
            key="33"
          >
            <Table columns={columns1} dataSource={props.data.apiData && props.data.apiData} size="middle" />
          </TabPane>
          <TabPane
            tab={
              <Button>身份和api接口关系</Button>
            }
            key="44"
          >
            <Table columns={columns3} dataSource={props.data.identityData && props.data.identityData} size="middle" />
          </TabPane>
          <TabPane
            tab={
              <Button>视图接口权限</Button>
            }
            key="55"
          >
            <Table columns={columns4} dataSource={props.data.viewData && props.data.viewData} size="middle" />
          </TabPane>
          <TabPane
            tab={
              <Button>身份和视图权限关系</Button>
            }
            key="66"
          >
            <Table columns={columns5} dataSource={props.data.andData && props.data.andData} size="middle" />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
  console.log(state)
}
const mapDispatchToProps = (dispatch) => {
  return {
    userData() {
      dispatch({
        type: "data/userData"
      })

    },

    liderData() {
      dispatch({
        type: "data/liderData"
      })
    },
    apiData() {
      dispatch({
        type: "data/apiData"
      })
    },
    identityData(){
      dispatch({
        type: "data/identityData"
      })
    },
    viewData()
    {
      dispatch({
        type: "data/viewData"
      })
    },
    andData()
    {
      dispatch({
        type: "data/andData"
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(showUser);