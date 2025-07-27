import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View my repositories",
      href: "#",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "jjacobsen115@gmail.com",
      href: "mailto:jjacobsen115@gmail.com",
    },
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Let's Connect</h2>

        <motion.p
          className="contact-intro"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always interested in hearing about new opportunities and
          interesting projects. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          className="contact-methods"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              className="contact-method"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="contact-icon">{method.icon}</span>
              <div className="contact-details">
                <span className="contact-label">{method.label}</span>
                <span
                  className={`contact-value ${
                    method.label.toLowerCase() === "email" ? "email" : ""
                  }`}
                >
                  {method.value}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="/jonah_jacobsen_resume.pdf"
            download="jonah_jacobsen_resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <footer className="footer">
        <p>© 2024 Your Name. Built with React & Love.</p>
      </footer>
    </section>
  );
};

export default Contact;
