import React from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { asyncComponent } from './LazyComponents';
import App from './components/App/App';

const childRoutes = [

  <IndexRoute
    getComponent={asyncComponent('Landing')}
    key="home"
  />,

  <Route
    getComponent={asyncComponent('Info')}
    key="info"
    path="info"
  />,

];

export default (
  <Router history={window.history.pushState ? browserHistory : hashHistory}>
    <Route component={App} path="/">
      {childRoutes}
    </Route>
  </Router>
);
