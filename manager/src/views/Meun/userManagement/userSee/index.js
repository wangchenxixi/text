import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Table , Tabs } from "antd";
import { connect } from "dva";
import './index.scss';

function AddUser(props) {
  const [key, updataKey] = useState("tab1");
  useEffect(()=>{
    // 用户数据
    props.userShow()
    // 身份数据
    props.userIdentity()
    // api接口权限
    props.userApi()
    // 身份和api权限关系
    props.userIdentity_api()
    // 视图接口权限
    props.userView_authority()
    // 身份和视图权限关系
    props.userIdentity_view()
  },[])
  const tabList = [
    {
      key: "tab1",
      tab: "用户数据"
    },
    {
      key: "tab2",
      tab: "身份数据"
    },
    {
      key: "tab3",
      tab: "api接口权限"
    },
    {
      key: "tab4",
      tab: "身份和api接口关系"
    },
    {
      key: "tab5",
      tab: "视图接口权限"
    },
    {
      key: "tab6",
      tab: "身份和视图权限关系"
    }
  ];

  const contentList = {
    tab1: (
      <div>
        <h2>用户数据</h2>
        <Table
          columns={[
            {
              title: "用户名",
              key:"name",
              render: text => <>{text.user_name}</>
            },
            {
              title: "密码",
              key:"pwd",
              render: text => <>{text.user_pwd}</>
            },
            {
              title: "身份",
              key:"text",
              render: text => <>{text.identity_text}</>
            }
          ]}
          dataSource = {props.userData}
          rowKey={record => `${record.user_id}`}
        />
      </div>
    ),
    tab2: (
      <div>
        <h2>身份数据</h2>
        <Table
          columns={[
            {
              title: "身份名称",
              key:"identTexts",
              render: text => <>{text.identity_text}</>
            }
          ]}
          dataSource = {props.userIdentityData}    
          rowKey={record => `${record.identity_id}`}
        />
      </div>
    ),
    tab3: (
      <div>
        <h2>api接口权限</h2>
        <Table
          columns={[
            {
              title: "api权限名称",
              key:"apiText",
              render: text => <>{text.api_authority_text}</>
            },
            {
              title: "api权限url",
              key:"apiUrl",
              render: text => <>{text.api_authority_url}</>
            },{
              title: "api权限方法",
              key:"apiMrthod",
              render: text => <>{text.api_authority_method}</>
            }
          ]}
          dataSource = {props.userApiData}    
          rowKey={record => `${record.api_authority_id}`}
        />
      </div>
    ),
    tab4:(
      <div>
        <h2>身份和api接口关系</h2>
        <Table
          columns={[
            {
              title: "身份名称",
              key:"textIdent",
              render: text => <>{text.identity_text}</>
            },{
              title: "api权限名称",
              key:"textAuth",
              render: text => <>{text.api_authority_text}</>
            },{
              title: "api权限url",
              key:"textUrl",
              render: text => <>{text.api_authority_url}</>
            },{
              title: "api权限方法",
              key:"textMethod",
              render: text => <>{text.api_authority_method}</>
            }
          ]}
          dataSource = {props.userIdentity_apiData}              
          rowKey={record => `${record.identity_api_authority_relation_id}`}
        />
      </div>
    ),
    tab5:(
      <div>
        <h2>视图接口权限</h2>
        <Table
          columns={[
            {
              title: "视图权限名称",
              key:"viewText",
              render: text => <>{text.view_authority_text}</>
            },
            {
              title: "视图id",
              key:"viewId",
              render: text => <>{text.view_id}</>
            }
          ]}
          dataSource = {props.userView_authorityData}   
          rowKey={record => `${record.view_authority_id}`}
        />
      </div>
    ),
    tab6: (
      <div>
        <h2>身份和视图权限关系</h2>
        <Table
          columns={[
            {
              title: "身份",
              key:"identText",
              render: text => <>{text.identity_text}</>
            },
            {
              title: "视图名称",
              key:"viewAuther",
              render: text => <>{text.view_authority_text}</>
            },
            {
              title: "视图id",
              key:"textView",
              render: text => <>{text.view_id}</>
            }
          ]}
          dataSource = {props.userIdentity_viewData} 
          rowKey={record => `${record.identity_view_authority_relation_id}`}
        />
      </div>
    )
  };

  const { TabPane } = Tabs;
  function callback(key) {
    updataKey(key);
  }

  return (
    <Layout>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <h2 className="user-title">用户展示</h2>
              <Tabs defaultActiveKey="tab1" onChange={callback} className="tab_box">
                {
                  tabList.map(item => (
                    <TabPane tab={item.tab} key={item.key}>
                      {contentList[key]}
                    </TabPane>
                  ))
                }
              </Tabs>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Layout>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return state.user;
};

const mapDispatchToProps = dispatch => {
  return {
    // 用户数据
    userShow(){
      dispatch({
        type: 'user/userShow',
      })
    },
    // 身份数据
    userIdentity(){
      dispatch({
        type: 'user/userIdentity',
      })
    },
    // api接口权限
    userApi(){
      dispatch({
        type: 'user/userApi',
      })
    },
    // 身份和api权限关系 
    userIdentity_api(){
      dispatch({
        type: 'user/userIdentity_api',
      })
    },
    // 视图接口权限
    userView_authority(){
      dispatch({
        type: 'user/userView_authority',
      })
    },
    // 身份和视图权限关系
    userIdentity_view(){
      dispatch({
        type: 'user/userIdentity_view',
      })
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
