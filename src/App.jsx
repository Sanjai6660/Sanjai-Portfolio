import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesBackground />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} BHARATHKUMAR SANJAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
