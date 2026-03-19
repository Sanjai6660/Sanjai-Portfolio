import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Website',
      description: 'A single-page movie browsing application using React.js and functional components. Integrated TMDB REST API to fetch and display real-time movie data.',
      tech: ['React.js', 'React Hooks', 'React Router', 'REST API'],
      github: 'https://github.com/Sanjai6660/React-movie-website',
      live: 'https://freakshow6660.vercel.app',
      image: '/movie-website-preview.png'
    },
    {
      title: 'Restaurant Website',
      description: 'A fully responsive restaurant website with modern UI principles. Implemented optimized navigation and image lazy-loading to improve user experience.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Sanjai6660/Restaurant-website',
      live: 'https://example.com',
      image: '/restaurant-website-preview.jpg'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2 className="title">Featured <span className="text-gradient">Projects</span></h2>
          <p>
            A selection of my recent work, showcasing my skills in building scalable and user-friendly applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass project-card"
              onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    className="overlay-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live} 
                    className="overlay-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
