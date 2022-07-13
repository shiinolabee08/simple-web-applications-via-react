import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {

  const getItemContainerStyle = {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    border: '1px solid #ccc',
    position: 'relative',
    marginTop: '10px',
  };

  const getItemLabelStyle = () => {
    const { completed } = props.todo;
    return {
      textDecoration: completed ? 'line-through' : 'none'
    };
  }

  const checkIfTodoIsCompleted = () => {
    return props.todo.completed;
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

  const { id, title } = props.todo;

  return (
    <>
      <div style={getItemContainerStyle}>
        <input
          type="checkbox"
          checked={checkIfTodoIsCompleted()}
          onChange={props.toggleCompleteTodo.bind(this, id)}/> { ' ' }
        <label
          style={getItemLabelStyle()}
          onClick={props.toggleCompleteTodo.bind(this, id)}>
          { title }
        </label>
        <button style={buttonStyle} onClick={props.deleteTodo.bind(this, id)}>x</button>
      </div>
    </>
  );

}

// set prop types for required prop types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;