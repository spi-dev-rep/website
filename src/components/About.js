import React from "react";
import { motion } from "framer-motion";
import Blurb from "./Blurb";
import Header from "./Header";
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
    <motion.div inital="out" animate="in" exit="out" variants={pageTransistion}>
      <Header />
      <Blurb />
    </motion.div>
  );
};

export default About;
