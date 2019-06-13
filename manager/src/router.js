import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/login/index';
import Meun from './views/Meun/Menu';
// import indexPage from './views/IndexPage';
// import Home from './views/home';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login"  component={Login} />
        <Route path="/" component={Meun} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
