import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../images/spi logo cropped white.png";
import logoText from "../images/spi logo text white.png";
import "./css/Logo.css";

const Logo = () => {
  const pageTransistion = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        inital="out"
        animate="in"
        exit="out"
        variants={pageTransistion}
      >
        <img className="logo-main" alt="logo" src={logo} />
        <img className="logo-text" alt="logo-text" src={logoText} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Logo;
