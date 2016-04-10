import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoActionCreators from '../actions/todoActionCreators'

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

const mapStateProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.$$visibilityStore.filter
  };
};
const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      const { setVisibilityFilter } = bindActionCreators(todoActionCreators, dispatch)
      setVisibilityFilter(ownProps.filter)
    }
  };
};

const FilterLink = connect(mapStateProps, mapDispatchProps)(Link);

export default () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);