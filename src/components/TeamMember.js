import React from "react";
import "./css/TeamMember.css";
import linkedin from "../images/in.png";

import overlay from "../images/overlay.jpeg";

const TeamMember = ({ photo, name, position, linkedIn }) => {
  return (
    <div className="container">
      <img src={photo} alt="" className="photo" />
      <div className="overlay-container">
        <img src={overlay} className="overlay" alt="" />
        <div className="overlay-text">
          <h3>{name}</h3>
          <h4>{position}</h4>
          <a href={linkedIn}>
            <img src={linkedin} className="social" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
