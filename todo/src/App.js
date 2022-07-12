import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
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

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos
          todos={this.state.todos}
          toggleCompleteTodo={this.toggleCompleteTodo}
          deleteTodo={this.deleteTodo}
          />
      </div>
    );
  }
}

export default App;