import React from 'react';
import Header from './Header';
import PageSection from './PageSection';
import AboutPage from './AboutPage';
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

const languages = {
  title: "Languages",
  items: ["JS", "Python", "C++"]
}

function App() {
  return (
    <div className="App">
      <Header links={links}></Header>
      <PageSection title={languages.title} items={languages.items}>

      </PageSection>
      <AboutPage></AboutPage>
    </div>
  );
}

export default App;
