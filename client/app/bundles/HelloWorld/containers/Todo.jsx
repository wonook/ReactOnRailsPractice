import React, { PropTypes } from 'react';
import TodoFooter from '../components/TodoFooter';
import AddTodo from '../components/AddTodo';
import TodoVisibleList from '../components/TodoVisibleList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as todoActionCreators from '../actions/todoActionCreators';

function select(state) {
  return { $$todoStore: state.$$todoStore };
}

class Todo extends React.Component {
  static propTypes = {
    dispatch: PropTypes.instanceOf(Immutable.Map).isRequired,

    $$todoStore: PropTypes.instanceOf(Immutable.Map).isRequired,

    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, $$todoStore } = this.props;
    const actions = bindActionCreators(todoActionCreators, dispatch);
    const { addTodo, setVisibilityFilter, toggleTodo } = actions;
    const text = $$todoStore.get('text');
    const filter = $$todoStore.get('filter');
    const id = $$todoStore.get('id');
    const locationState = this.props.location.state;

    return (
      <div>
        <AddTodo {...{ addTodo, text, locationState }} />
        <VisibleTodoList {...{ toggleTodo, id, locationState }} />
        <Footer {...{ setVisibilityFilter, filter, locationState }} />
      </div>
    );

  }
}