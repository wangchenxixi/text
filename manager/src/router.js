import React from 'react';
import { Router, Route, Switch,Redirect} from 'dva/router';
import Login from './views/login/index';
import Meun from './views/Meun/Menu';
import { connect } from 'dva'
//添加国际化
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import {IntlProvider, addLocaleData} from 'react-intl';
import zhCN from '@/lang/zh-CN.js'
import enUS from '@/lang/en-US.js'
import notFound404 from './views/404/index';
import notFound403 from './views/403/index';
// import indexPage from './views/IndexPage';
// import Home from './views/home';
function RouterConfig({ history }) {
  return (
    <RouterView history={history} />
  );
}
const localMap={
  en:enUS,
  zh:zhCN
}
addLocaleData([...en, ...zh]);
const mapStateToProps=(state)=>{
  return {
    locale:state.global.locale
  }
}
const RouterView = connect(mapStateToProps)(({locale,history})=>{
  return <IntlProvider locale={locale} messages={localMap[locale]}>
    <Router history={history}>
      <Switch>
          <Route path="/login"  component={Login} />
          <Route path="/" component={Meun} />
          {/* <Route path="/404" component={notFound404} />
          <Route path="/403" component={notFound403} /> */}
        </Switch>
    </Router>
   
  </IntlProvider>
})


export default RouterConfig