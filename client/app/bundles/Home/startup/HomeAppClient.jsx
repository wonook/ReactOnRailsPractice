import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from '../store/helloWorldStore';
import routes from '../routes/routes';
import { syncHistoryWithStore } from 'react-router-redux';

// See documentation for https://github.com/rackt/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (props, location) => {
  const store = createStore(props);

  const history = syncHistoryWithStore(
    browserHistory,
    store
  );

  const reactComponent = (
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
  );
  return reactComponent;
};
