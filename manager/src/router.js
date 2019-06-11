import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/IndexPage';
import Products from './Products';
import Home from './views/home/home';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
