import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="glass navbar-container">
        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="nav-divider" />
        <div className="nav-socials">
          <a href="https://github.com/Sanjai6660" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/sanjai-2002cp" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={18} />
          </a>
          <a href="mailto:srisanjai96@gmail.com" className="social-link">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
