import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header';
import Main from './components/pages/Main';
import About from './components/pages/About';

class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <div className="todo-list-app">
            <div className="container">
              <Header />
              <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/about" element={<About />}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </>

    );
  }
}

export default App;