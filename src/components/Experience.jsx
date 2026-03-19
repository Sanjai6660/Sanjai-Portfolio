import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Cloudlogic Technologies',
      role: 'Backend Developer',
      period: 'Dec 2025 – Present',
      description: 'Currently working as a Backend Developer, focusing on developing scalable REST APIs and backend services.',
      achievements: [
        'Develop REST APIs using Spring Boot for web applications.',
        'Implement authentication and authorization using Spring Boot Security.',
        'Integrate MySQL database with backend services.',
        'Test APIs using Postman and manage code using Git and GitHub.'
      ]
    },
    {
      company: 'Lumina Datamatics',
      role: 'Article Formatter',
      period: '2024 – 2025',
      description: 'Responsible for formatting and structuring journal and e-publishing content using specialized tools (3B2/APP) while ensuring 100% accuracy.',
      achievements: [
        'Formatted and structured content according to strict publisher guidelines.',
        'Corrected XML tagging issues and applied styles efficiently.',
        'Ensured consistent pagination with zero layout errors across all deliverables.',
        'Collaborated with editorial and QC teams to meet tight deadlines.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <h2 className="title">Work <span className="text-gradient">Experience</span></h2>
          <p>My professional journey and the impact I've made in different roles.</p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="experience-item"
            >
              <div className="experience-dot" />
              
              <div className="glass experience-card">
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">
                    {exp.period}
                  </span>
                </div>
                
                <p className="experience-description">
                  {exp.description}
                </p>
                
                <ul className="achievement-list">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="achievement-item">
                      <span className="achievement-bullet" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
