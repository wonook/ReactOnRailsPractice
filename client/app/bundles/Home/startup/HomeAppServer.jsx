import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import createStore from '../store/homeStore';
import routes from '../routes/routes';

// See documentation for https://github.com/rackt/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// This is how the server redux gets hydrated with data.
export default (props, railsContext) => {
  const store = createStore(props);

  let error;
  let redirectLocation;
  let routeProps;
  const location = {railsContext};

  match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
    error = _error;
    redirectLocation = _redirectLocation;
    routeProps = _routeProps;
  });

  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  const reactComponent = (
    <Provider store={store}>
      <RouterContext {...routeProps} />
    </Provider>
  );
  return reactComponent;
};
