import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RouterLayout from '../containers/RouterLayout';
import HelloWorld from '../containers/HelloWorld';

export default (
  <Route path="/" component={RouterLayout}>
    <Route path="helloworld" component={HelloWorld}/>
  </Route>
);