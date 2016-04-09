import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class TodoVisibleList extends React.Component {
  static propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    locationState: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    _.bindAll(this, 'handleChange');
  }

  handleChange(e) {
    const id = e.target.value;
    this.props.toggleTodo(id);
  }

  render() {
    const { id } = this.props;
    return (
      <li>

      </li>
    );
  }
}

const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none' }}
    className={ completed ? 'completed' : '' }
  >
    {text}
  </li>
)

const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo => {
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    })}
  </ul>
)

import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

const getVisibleTodos = (
  todos,
  filter
) => {
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

const mapStateToProps = (
  state
) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchToProps = (
  dispatch
) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);