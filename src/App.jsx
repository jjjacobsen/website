import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Cross from "./components/Cross";
import "./App.css";

function App() {
  return (
    <div className="app">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <Hero />
        <Skills />
        <Projects />
        <Cross />
      </motion.div>

      <div className="background-effects">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>
    </div>
  );
}

export default App;
