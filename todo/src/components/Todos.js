import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleCompleteTodo={this.props.toggleCompleteTodo}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

// set prop types for required prop types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
