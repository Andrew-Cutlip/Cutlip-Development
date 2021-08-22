import React from 'react';
import { useState } from 'react';
import Header from './Header';
import PageContainer from './PageContainer';
import Footer from './Footer';
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
      <Footer name="Cutlip Development"></Footer>
    </div>
  );
}

export default App;
