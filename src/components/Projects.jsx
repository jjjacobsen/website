import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A full-stack web application built with React and Node.js. Features real-time updates, user authentication, and responsive design.',
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            github: '#',
            live: '#'
        },
        {
            title: 'Project Two',
            description: 'Mobile-first e-commerce platform with advanced filtering, payment integration, and inventory management system.',
            tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
            github: '#',
            live: '#'
        },
        {
            title: 'Project Three',
            description: 'Machine learning powered data analytics dashboard for visualizing complex datasets and generating insights.',
            tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
            github: '#',
            live: '#'
        },
        {
            title: 'Project Four',
            description: 'Open-source CLI tool for automating development workflows and improving team productivity.',
            tech: ['Go', 'Docker', 'GitHub Actions'],
            github: '#',
            live: null
        }
    ]

    return (
        <section id="projects" className="projects">
            <motion.div
                className="projects-content"
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

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <a href="#" className="btn btn-secondary">
                        View All Projects
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Projects 
