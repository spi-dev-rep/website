import React from "react";
import { Link } from "react-router-dom";
// import { SocialIcon } from "react-social-icons";
import "./css/Header.css";
import logo from "../images/spi-horizontal-logo-white.png";

const Header = () => {
  return (
    <div id="header-box">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt=""
          clipPathUnits="userSpaceOnUse"
        />
      </Link>
    </div>
  );
};

export default Header;
