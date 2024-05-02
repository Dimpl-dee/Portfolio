import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import More from './components/More/More';
import Skill from './components/Skill/Skill';
import Projects from './components/Projects/Project';
import Slide from './components/Slide/Slide';
import Contact from './components/Contact/Contact';
import Socials from './components/Socials/Social';
import Footer from './components/Footer/Footer';
import Scrool from './components/Scrool/Scrool';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <More />
      <Skill />
      <Projects />
      <Slide />
      <Contact />
      <Socials />
      <Footer />
      <Scrool />
    </div>
  );
}

export default App;
