import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-welcome"
        >
          Welcome to my portfolio
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero-title"
        >
          I'm <span className="text-white">BHARATHKUMAR </span>
          <span className="text-gradient">SANJAI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hero-subtitle"
        >
          <span>Frontend & Backend Developer</span>
          <span className="separator">•</span>
          <span>Spring Boot</span>
          <span className="separator">•</span>
          <span>React.js</span>
          <span className="separator">•</span>
          <span>Java</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero-description"
        >
          A passionate software engineer specializing in building premium, 
          high-performance frontend applications and robust backend APIs with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="hero-actions"
        >
          <a 
            href="#projects" 
            className="btn btn-primary"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="btn btn-glass"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hero-scroll-indicator"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
