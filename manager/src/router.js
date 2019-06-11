import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Products from './Products';
import Home from './views/home/home';
import IndexPage from "./views/IndexPage";
import LoginPage from "./views/login/index";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
