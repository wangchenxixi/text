import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { connect } from 'dva'
import Login from './views/login/index';
import Meun from './views/Meun/Menu';
import AccessForbiddenPage from '@/views/Other/403';
import NotFoundPage from '@/views/Other/404';

//添加国际化
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import {IntlProvider, addLocaleData} from 'react-intl';
import zhCN from '@/lang/zh-CN.js'
import enUS from '@/lang/en-US.js'

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
        <Route path="/login" component={Login} />
        <Route path="/403" component={AccessForbiddenPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/" component={Meun} />
      </Switch>
    </Router>
   
  </IntlProvider>
})

export default RouterConfig