import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActionCreators from '../actions/todoActionCreators'

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
    className={
        completed ?
          'completed' :
          ''
    }
  >
    {text}
  </li>
);

const TodoList = ({ actions, $$todoStore, $$visibilityStore }) => {
  const { toggleTodo } = actions
  const todos = getVisibleTodos($$todoStore.get('todos'), $$visibilityStore.get('filter'));

  const handleTodoClick = (id) => {
    () => {
      toggleTodo(id)
    }
  }

  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={handleTodoClick(todo.id)}
        />
      )}
    </ul>
  );
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}

const mapStateToProps = (state) => {
  return {
    $$todoStore: state.$$todoStore,
    $$visibilityStore: state.$$visibilityStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);