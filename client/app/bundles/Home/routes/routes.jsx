import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RouterLayout from '../containers/RouterLayout';
import Home from '../containers/Home';

export default (
  <Route path="/" component={RouterLayout}>
    <IndexRoute component={Home}/>
  </Route>
);