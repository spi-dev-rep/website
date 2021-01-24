import React from "react";
import { motion, useCycle } from "framer-motion";
import "./css/TeamMember.css";
// import { SocialIcon } from "react-social-icons";

import overlay from "../images/overlay.jpeg";

const TeamMember = ({ photo, name, position, linkedIn }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 100 },
  };

  const [animate, tapCycle] = useCycle({ opacity: 0 }, { opacity: 100 });

  return (
    <div className="container">
      <img src={photo} alt="" className="photo" />

      <motion.div
        initial="hidden"
        whileHover="visible"
        variants={variants}
        animate={animate}
        onTap={() => tapCycle()}
        transition={{ ease: "easeIn", duration: 0 }}
        className="overlay-container"
      >
        <img src={overlay} className="overlay" alt="" />
        <div className="overlay-text">
          <h3>{name}</h3>
          <h4>{position}</h4>
          {/* <SocialIcon url={linkedIn} className="social" bgColor="#FFFFFF" /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamMember;
