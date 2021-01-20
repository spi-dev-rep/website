import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "./css/Header.css";
import logo from "../images/spi logo cropped white.png";
import logoText from "../images/spi logo text white.png";

const Header = () => {
  return (
    <div className="header-box">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <img className="logotext" src={logoText} alt="" />
      <SocialIcon
        url="https://www.linkedin.com/company/studentprojectinitiative/"
        bgColor="white"
        style={{ height: 30, width: 30 }}
        className="in"
      />
    </div>
  );
};

export default Header;
