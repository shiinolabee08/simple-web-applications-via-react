import './App.css';
import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header';
import Main from './components/pages/Main';
import About from './components/pages/About';
import ToggleTheme from './components/ToggleTheme';

export const ThemeContext = createContext();

function App() {

  const themes = {
    light: {
      background: "#fff",
      color: "#000",
    },
    dark: {
      background: "#171717",
      color: "#fff"
    }
  };

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light': 'dark');
  }

  const providerValue = {
    details: {
      name: theme,
      styles: themes[theme],
    },
    toggleTheme,
  }

  return (
    <>
      <BrowserRouter>
        <div className={`theme-${theme} todo-list-app`}>
          <ThemeContext.Provider value={providerValue}>
            <ToggleTheme/>
            <div className="container">
              <Header />
              <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/about" element={<About />}/>
              </Routes>
            </div>
          </ThemeContext.Provider>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;