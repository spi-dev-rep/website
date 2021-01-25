import React from "react";
import "./css/Footer.css";

import linkedin from "../images/in.png";
import email from "../images/email.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://www.linkedin.com/company/studentprojectinitiative/">
        <img src={linkedin} className="foot-social" alt="" />
      </a>
      <a href="https://www.linkedin.com/company/studentprojectinitiative/">
        <img src={email} className="foot-social" alt="" />
      </a>
      <p>Copyright SPI 2021</p>
    </div>
  );
};

export default Footer;
