import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class TodoFooter extends React.Component {
  static propTypes = {
    setVisibilityFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    locationState: PropTypes.object,
  };
  
  constructor(props, context) {
    super(props, context);
    
    _.bindAll(this, 'handleChange');
  }
  
  handleChange(e) {
    const filter = e.target.value;
    this.props.setVisibilityFilter(filter);
  }
  
  render() {
    const { filter } = this.props;
    return (
      <p>

      </p>
    );
  }
}

import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions';

const Link = ({
  active,
  children,
  onClick
}) => {
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

const mapStateProps = (
  state,
  ownProps
) => {
  return {
    active:
    ownProps.filter ===
    state.visibilityFilter
  };
};
const mapDispatchProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

const FilterLink = connect(
  mapStateProps,
  mapDispatchProps
)(Link);

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