import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos';
class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: 'School run in the morning',
        completed: false,
      },
      {
        id: 1,
        title: 'School run in the noon',
        completed: true,
      },
      {
        id: 2,
        title: 'Lunch with the kids',
        completed: false,
      },
      {
        id: 3,
        title: 'School run in the afternoon',
        completed: false,
      },
      {
        id: 4,
        title: 'Dinner with wife',
        completed: false,
      },
    ],
  }

  toggleCompleteTodo = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })});
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} toggleCompleteTodo={this.toggleCompleteTodo}/>
      </div>
    );
  }
}

export default App;