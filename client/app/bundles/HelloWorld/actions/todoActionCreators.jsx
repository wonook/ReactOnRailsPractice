import actionTypes from '../constants/todoConstants';

let nextTodoId = 0
export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    id: nextTodoId++,
    text,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter,
  }
}

export function toggleTodo(id) {
  return {
    type: actionTypes.TOGGLE_TODO,
    id,
  }
}
