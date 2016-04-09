import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Input, ButtonInput } from 'react-bootstrap';

export default class AddTodo extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    locationState: PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    _.bindAll(this, 'handleChange');
  }

  handleChange(e) {
    const text = e.target.value;
    this.props.addTodo(text);
    e.target.value = '';
  }

  render() {
    const { text } = this.props;
    return (
      <div className="container">
        <form className="form-horizontal">
          <Input
            type="text"
            labelClassName="col-sm-2"
            wrapperClassName="col-sm-10"
            label="Add new todo:"
            value={text}
          />
          <ButtonInput type="submit" value="Add" onClick={this.handleChange}/>
        </form>
      </div>
    );
  }
}
