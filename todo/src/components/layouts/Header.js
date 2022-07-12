import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Simple To-do List</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;