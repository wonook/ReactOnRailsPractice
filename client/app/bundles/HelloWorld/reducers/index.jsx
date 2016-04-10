// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/appStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
// `https://github.com/shakacode/react_on_rails/tree/master/docs/additional_reading/generated_client_code.md`
import { combineReducers } from 'redux'

import helloWorldReducer from './helloWorldReducer';
import todosReducer from './todoReducer'
import visibilityFilter from './todoReducer'

import { $$initialState as $$helloWorldState } from './helloWorldReducer';
import { $$todoInitialState as $$todoState, $$visibilityInitialState as $$visibilityState } from './todoReducer'

export default {
  $$helloWorldStore: helloWorldReducer,
  $$todoStore: todosReducer,
  $$visibilityStore: visibilityFilter,
};

export const initialStates = {
  $$helloWorldState,
  $$todoState,
  $$visibilityState,
};
