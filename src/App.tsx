import React from 'react';
import Header from './Header';
import './App.css';

const links = [
  {
    name: "Skills",
    path: "/skills"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

function App() {
  return (
    <div className="App">
      <Header links={links}></Header>
    </div>
  );
}

export default App;
