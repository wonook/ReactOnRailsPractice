import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RouterLayout from '../containers/RouterLayout';
import HelloWorld from '../containers/HelloWorld';
import Todo from '../containers/Todo';

export default (
  <Route path="/" component={RouterLayout}>
    <Route path="hello_world_app" component={HelloWorld}/>
    <Route path="todo_app" component={Todo}></Route>
  </Route>
);