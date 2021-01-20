import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ScrollBtn from "./ScrollBtn";
import "./css/Splash.css";

const Splash = () => {
  // animation properties for testing the 'framer-motion' library
  const pageTransistion = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0, duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransistion}
    >
      <div className="bgimg"></div>
      <Logo />
      <ScrollBtn />
    </motion.div>
  );
};

export default Splash;
