import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActionCreators from '../actions/todoActionCreators'

let AddTodo = ({ actions }) => {
  const { addTodo } = actions
  let input;

  const handleAdd = () => {
    addTodo(input.value)
    input.value = ''
  }

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={handleAdd()}>
        Add Todo
      </button>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActionCreators, dispatch),
  }
}

export default connect(mapDispatchToProps)(AddTodo);
