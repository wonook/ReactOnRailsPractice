import { combineReducers } from 'redux'

import Immutable from 'immutable'

import actionTypes from '../constants/todoConstants'

export const $$todoInitialState = Immutable.fromJS({
  todos: [],
})
export const $$visibilityInitialState = Immutable.fromJS({
  filter: '',
})

export const todoReducer = (state, action) => {
  const {type} = action;

  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }

    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) return state
      return {...state, completed: !state.completed}

    default:
      return state
  }
}

export const todosReducer = (state = [], action) => {
  const {type} = action;

  switch(type) {
    case actionTypes.ADD_TODO:
      return [...state, todoReducer(undefined, action)]

    case actionTypes.TOGGLE_TODO:
      return state.map(t => todoReducer(t, action))

    default:
      return state
  }
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  const {type} = action;

  switch(type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
