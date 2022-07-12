import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Todos from '../Todos';
import AddTodo from '../AddTodo';

function Main() {
  const todoApiUrl = 'https://jsonplaceholder.typicode.com/todos'; // a mock RESTful api

  const [todos, setTodos] = useState([]);

  const toggleCompleteTodo = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    findTodo.completed = !findTodo.completed;

    axios.put(`${todoApiUrl}/${id}`, findTodo)
      .then((response) => {
        setTodos(todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = response.data.completed;
          }

          return todo;
        }));
      })

    /* setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })); */
  }

  const addTodo = (title) => {
    /* const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    } */
    axios.post(todoApiUrl, {
      title,
      completed: false,
    }).then((response) => {
      setTodos([...todos, response.data]);
    });
  }

  const deleteTodo = (id) => {
    axios.delete(`${todoApiUrl}/${id}`).then((_response) => {
      setTodos([...todos.filter(todo => todo.id !== id)]);
    });
  }

  useEffect(() => {
    axios.get(`${todoApiUrl}?_limit=10`)
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <>
      <React.Fragment>
        <AddTodo addTodo={addTodo}/>
        <Todos
          todos={todos}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
          />
      </React.Fragment>
    </>

  );
}

export default Main;