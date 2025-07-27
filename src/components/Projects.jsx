import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Automated CI/CD Pipeline",
      description:
        "Architected and built a complete CI/CD pipeline from the ground up, reducing release cycles from 9-11 months to daily deployments and saving millions annually.",
      tech: [
        "Python",
        "Docker",
        "Bitbucket Pipelines",
        "MongoDB",
        "VMWare",
        "Pytest",
        "AWS",
      ],
      github: null,
      live: null,
    },
    {
      title: "Machine Learning with Twilio",
      description:
        "Developed a machine learning model to predict optimal email checking times, with a REST API for seamless integration by Twilio developers.",
      tech: ["Python", "AWS", "scikit-learn", "Pandas"],
      github: null,
      live: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-content container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} aria-label="GitHub">
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
