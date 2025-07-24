import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa'
import { SiTypescript, SiPostgresql } from 'react-icons/si'
import './About.css'

const About = () => {
    const skills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'AWS', icon: <FaAws /> },
    ]

    return (
        <section id="about" className="about">
            <motion.div
                className="about-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">About Me</h2>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems.
                            With expertise in modern web technologies, I build scalable applications that deliver exceptional user experiences.
                        </p>
                        <p>
                            My journey in tech started with curiosity about how things work, and has evolved into a career focused on
                            innovation and continuous learning. I thrive in collaborative environments and enjoy tackling challenges
                            that push the boundaries of what's possible.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-skills"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3>Tech Stack</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-item"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                >
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About 
