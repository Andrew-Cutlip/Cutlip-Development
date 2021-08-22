import React from 'react';
import { useState } from 'react';
import Header from './Header';
import PageSection from './PageSection';
import PageContainer from './PageContainer';
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
    name: "Portfolio",
    path: "/portfolio"
  },
  {
    name: "Resume",
    path: "/resume"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];



function App() {
  const [page, setPage] = useState("home");

  const changePage = (page: string) => {
    console.log(page);
    setPage(page);
  }

  return (
    <div className="App">
      <Header links={links} onClick={ changePage }></Header>
      <PageContainer page={page}></PageContainer>
    </div>
  );
}

export default App;
