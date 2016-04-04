import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HelloWorld from '../containers/HelloWorld';

export default (
  <Route path="/">
    <IndexRoute
      component={HelloWorld}
    />
  </Route>
);