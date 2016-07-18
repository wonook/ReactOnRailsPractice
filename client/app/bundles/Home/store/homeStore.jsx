import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

// See https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this once your app has
// asynchronous actions.
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
  // This is how we get initial props Rails into redux.
  const { name } = props;
  const { $$helloWorldState } = initialStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    $$helloWorldStore: $$helloWorldState.merge({
      name,
    }),
  };

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  return applyMiddleware(thunkMiddleware)(createStore)(reducer, initialState);
};
