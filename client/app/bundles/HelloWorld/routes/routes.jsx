import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RouterLayout from '../containers/RouterLayout';
import HelloWorld from '../containers/HelloWorld';

export default (
  <Route path="hello_world" component={RouterLayout}>
    <IndexRoute component={HelloWorld}/>
  </Route>
);