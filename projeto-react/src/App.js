import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Curiosities from './components/Curiosities';
import Causos from './components/Causos';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Curiosities />
      <Causos />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
