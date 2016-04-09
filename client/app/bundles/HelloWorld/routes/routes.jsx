import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloWorld from '../containers/HelloWorld';
import Todo from '../containers/Todo';

export default (
  <Route path="/">
    <IndexRoute component={HelloWorld} />
    <Route component={Todo} />
  </Route>
);