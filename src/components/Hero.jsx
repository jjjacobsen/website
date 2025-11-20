import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/jjjacobsen",
      label: "GitHub",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:jjacobsen115@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Jonah Jacobsen
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Senior Software Engineer • AI/ML Specialist • DevOps Innovator
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Building the future with AI and automation. Love creating tools that
          make developers&apos; lives easier and businesses more efficient.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="social-link"
              aria-label={link.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
