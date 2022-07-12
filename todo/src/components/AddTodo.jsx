import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]:  e.target.value });
  }

  render() {
    return (
      <>
        <form
          style={{ display: 'flex' }}
          onSubmit={this.onSubmit}>
          <input
            style={{ flex: '10', padding: '5px 10px' }}
            type="text"
            name="title"
            placeholder="Add To-do item"
            onChange={this.onChange}
            value={this.state.title}/>
          <input
            style={{ flex: '1' }}
            className="button"
            type="submit"
            value="Submit"/>
        </form>
      </>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
