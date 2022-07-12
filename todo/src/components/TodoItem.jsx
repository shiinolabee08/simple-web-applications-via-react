import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getItemContainerStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      border: '1px solid #ccc',
      position: 'relative',
      marginTop: '10px',
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
      <>
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
          <button style={buttonStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
        </div>
      </>
    );
  }
}

const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 8px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  verticalAlign: 'middle',
  position: 'absolute',
  right: '20px',
  top: '5px',
};

// set prop types for required prop types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;