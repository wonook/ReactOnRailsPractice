import Immutable from 'immutable';

import actionTypes from '../constants/todoConstants';

export const $$initialState = Immutable.fromJS({todo: []});

const todoReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state
  }
}

export default function todosReducer($$state = $$initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...$$state,
        todoReducer(undefined, action)
      ]
    case actionTypes.TOGGLE_TODO:
      return $$state.map(t => todoReducer(t, action))
    default:
      return $$state
  }
}