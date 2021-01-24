import React from "react";
import { motion } from "framer-motion";
import Blurb from "./Blurb";
import Header from "./Header";
import Team from "./Team";
import Footer from "./Footer";
import WorkedWith from "./WorkedWith";
import "./css/About.css";

const About = () => {
  const pageTransistion = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <div>
      <motion.div
        inital="out"
        animate="in"
        exit="out"
        variants={pageTransistion}
      >
        <div className="background"></div>
        <Header />
        <Blurb />
        <Team />
        <div className="spacer-div"></div>
        <WorkedWith />
        <Footer />
      </motion.div>
    </div>
  );
};

export default About;
