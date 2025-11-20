import { motion } from "framer-motion";
import {
  FaPython,
  FaDocker,
  FaLinux,
  FaBrain,
  FaCogs,
  FaReact,
  FaAws,
  FaGithub,
  FaApple,
  FaGitAlt,
  FaQuestionCircle,
  FaJava,
} from "react-icons/fa";
import {
  SiNeovim,
  SiFlutter,
  SiAtlassian,
  SiCloudflare,
  SiTerraform,
  SiKubernetes,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiCaddy,
  SiRaspberrypi,
  SiHomebrew,
  SiNginx,
  SiGnubash,
  SiJavascript,
  SiGo,
  SiC,
  SiCplusplus,
  SiDart,
  SiOpenai,
} from "react-icons/si";
import "./About.css";

const About = () => {
  const skills = [
    { name: "Docker", icon: <FaDocker /> },
    { name: "Codex", icon: <SiOpenai /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "MacOS", icon: <FaApple /> },
    { name: "Cloudflare", icon: <SiCloudflare /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React", icon: <FaReact /> },
    { name: "Neovim", icon: <SiNeovim /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Nginx", icon: <SiNginx /> },
    { name: "Caddy", icon: <SiCaddy /> },
    { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
    { name: "Homebrew", icon: <SiHomebrew /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Atlassian", icon: <SiAtlassian /> },
  ];

  const languages = [
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Go", icon: <SiGo /> },
    { name: "Shell", icon: <SiGnubash /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Java", icon: <FaJava /> },
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
        <h2 className="section-title">Skills</h2>

        <div className="about-grid">
          <motion.div
            className="skills-column"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="skills-divider" aria-hidden />

          <motion.div
            className="languages-column"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="skills-grid languages-grid">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <span className="skill-icon">{language.icon}</span>
                  <span className="skill-name">{language.name}</span>
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
