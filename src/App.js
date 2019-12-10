import React from 'react';
import './App.scss';
import Header from './components/header/Header.js'
import CardGrid from './components/cardGrid/CardGrid.js'
import Extracurriculars from './components/extracurriculars/Extracurriculars.js'
import About from './components/about/About.js'

function App() {
  return (
    <div className="App">
      <Header />
      <CardGrid />
      <Extracurriculars />
      <About />
    </div>
  );
}

export default App;
