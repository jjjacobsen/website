import { motion } from "framer-motion";
import { FaPython, FaDocker, FaAws, FaBrain, FaCogs } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiDjango } from "react-icons/si";
import "./About.css";

const About = () => {
  const skills = [
    { name: "AI/ML", icon: <FaBrain /> },
    { name: "Python", icon: <FaPython /> },
    { name: "CI/CD", icon: <FaCogs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "AWS", icon: <FaAws /> },
  ];

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
              I&apos;m a Senior Software Engineer who loves building intelligent
              systems that solve real problems. With over six years of
              experience in AI, DevOps, and full-stack development, I create
              automated solutions that make developers&apos; lives easier.
            </p>
            <p>
              My tech journey took an unexpected turn during COVID when I became
              a digital nomad for a year - working remotely while traveling the
              country on my motorcycle.
            </p>
            <p>
              Now settled in Nashville, you&apos;ll find me riding through
              Tennessee hills, playing guitar, or diving deep into AI and
              automation challenges that push the boundaries of what&apos;s
              possible.
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
  );
};

export default About;
