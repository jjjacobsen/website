import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Survivor Pool",
      description:
        "Mobile and web application for challenge pools based on the TV show Survivor.",
      tech: ["Flutter", "FastAPI", "Docker", "Mise", "uv", "MongoDB"],
      github: "https://github.com/jjjacobsen/survivor-pool",
      live: null,
    },
    {
      title: "Home Lab",
      description:
        "Self-hosted infrastructure to serve projects and gain experience managing hardware. And also because it's awesome.",
      tech: ["Raspberry Pi", "Caddy", "Nginx", "Cloudflare", "Linux", "Docker"],
      github: null,
      live: null,
    },
    {
      title: "Automated CI/CD Pipeline",
      description:
        "Architected and built a complete CI/CD pipeline from the ground up. Reduced release cycle from 9-11 months to daily deployments.",
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
      <div className="projects-content container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ y: -5 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
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
      </div>
    </section>
  );
};

export default Projects;
