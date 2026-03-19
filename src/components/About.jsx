import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'B.Tech – Mechanical Engineering',
      school: 'Chendu College of Engineering and Technology',
      year: '2019 – 2023',
      description: 'Completed B.Tech with a CGPA of 7.54. Transitioned into software development with a focus on modern web technologies.'
    },
    {
      degree: 'Frontend Development Certification',
      school: 'TopSkilled Academy',
      year: '',
      description: 'Acquired proficiency in building responsive web applications using industry-standard tools and practices.'
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="about-title">About <span className="text-gradient">Me</span></h2>
            <div className="about-text">
              <p>
                Hello! I'm Bharathkumar Sanjai, a dedicated Frontend & Backend Developer with hands-on experience in 
                building responsive, user-centric web applications using HTML5, CSS3, JavaScript, React.js, and developing robust backend APIs using Spring Boot.
              </p>
              <p>
                I specialize in component-based UI development, Spring Boot REST API integration, database management with MySQL, and responsive design. My goal is to bridge the gap between complex functionality and intuitive user interface design while following modern UI/UX principles.
              </p>
              <p>
                I am proficient in version control using Git and GitHub and am constantly seeking to 
                expand my technical skills and contribute to impactful projects.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <p className="stat-number">1+</p>
                <p className="stat-label">Years Exp.</p>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <p className="stat-number">10+</p>
                <p className="stat-label">Projects</p>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <p className="stat-number">100%</p>
                <p className="stat-label">Commitment</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="education-section"
          >
            <h3 className="section-subtitle">
              <GraduationCap className="text-blue-500" />
              Education & Certifications
            </h3>
            <div className="edu-list">
              {education.map((edu, index) => (
                <div key={index} className="glass edu-card">
                  <div className="edu-header">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <p className="edu-school">{edu.school}</p>
                  <p className="edu-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
