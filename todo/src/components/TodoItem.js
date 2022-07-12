import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getItemContainerStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '5px 9px',
      border: 'none',
      borderBottom: '1px solid #ccc'
    };
  }

  getItemLabelStyle = () => {
    const { completed } = this.props.todo;
    return {
      textDecoration: completed ? 'line-through' : 'none'
    };
  }

  checkIfTodoIsCompleted = () => {
    return this.props.todo.completed;
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getItemContainerStyle()}>
        <input
          type="checkbox"
          checked={this.checkIfTodoIsCompleted()}
          onChange={this.props.toggleCompleteTodo.bind(this, id)}/> { ' ' }
        <label
          style={this.getItemLabelStyle()}
          onClick={this.props.toggleCompleteTodo.bind(this, id)}>
          { title }
        </label>
      </div>
    );
  }
}

// set prop types for required prop types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;