import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Todos from '../Todos';
import AddTodo from '../AddTodo';
/* import WithLoader from '../WithLoader'; */

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
      });
  }

  const addTodo = (title) => {
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

  const clearAllTodo = () => {
    setTodos([]);
  };

  const clearButtonStyle = {
    marginTop: '10px',
    color: '#fff',
    backgroundColor: 'green',
    padding: '1rem',
    border: '1px solid green',
    textTransform: 'uppercase',
    cursor: 'pointer',
  }

  useEffect(() => {
    if (!todos.length) {
      axios.get(`${todoApiUrl}?_limit=10`)
        .then((response) => {
          setTodos(response.data);
        });
    }
  }, [todos.length]);

  if (!todos.length) {
    return <><div>Loading...</div></>
  }

  return (
    <>
      <React.Fragment>
        <AddTodo addTodo={addTodo}/>
        <Todos
          todos={todos}
          toggleCompleteTodo={toggleCompleteTodo}
          deleteTodo={deleteTodo}
          />
        <button onClick={clearAllTodo} style={clearButtonStyle}>Clear all To-do</button>
      </React.Fragment>
    </>
  );
}


export default Main;