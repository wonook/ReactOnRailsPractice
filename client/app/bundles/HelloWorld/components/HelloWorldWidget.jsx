// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input } from 'react-bootstrap';

import * as helloWorldActionCreators from '../actions/helloWorldActionCreators';

const HelloWorldWidget = ({ actions, $$helloWorldStore }) => {
  const { updateName } = actions;
  const name = $$helloWorldStore.get('name');

  const handleChange = (e) => {
    const name = e.target.value;
    updateName(name);
  };

  return (
    <div className="container">
      <h3>
        Hello, {name}!
      </h3>
      <hr/>
      <form className="form-horizontal">
        <Input
          type="text"
          labelClassName="col-sm-2"
          wrapperClassName="col-sm-10"
          label="Say hello to:"
          value={name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    $$helloWorldStore: state.$$helloWorldStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(helloWorldActionCreators, dispatch),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldWidget);