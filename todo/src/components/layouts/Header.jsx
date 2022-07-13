import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';

function Header() {

  const theme = useContext(ThemeContext);

  return (
    <>
      <header style={theme.details.styles}>
        <h1>Simple To-do List</h1>
        <Link style={theme.details.styles} to="/">Home</Link> | <Link style={theme.details.styles} to="/about">About</Link>
      </header>
    </>
  );
}


export default Header;