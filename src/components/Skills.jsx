import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Cpu, 
  Terminal, 
  Workflow 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Frontend', icon: <Globe size={24} />, items: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap', 'React.js'] },
    { name: 'Backend', icon: <Cpu size={24} />, items: ['Spring Boot', 'Spring Security', 'REST API', 'Core Java'] },
    { name: 'Database', icon: <Database size={24} />, items: ['MySQL'] },
    { name: 'Tools', icon: <Terminal size={24} />, items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="title">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="header-text">
            A comprehensive overview of my technical stack and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass skill-card"
            >
              <div className="skill-icon-container">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <ul className="skill-items">
                {skill.items.map((item) => (
                  <li key={item} className="skill-item">
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
