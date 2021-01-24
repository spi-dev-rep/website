import React from "react";
import "./css/TitleBanner.css";

const TitleBanner = ({ title }) => {
  return (
    <div id="title-banner">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBanner;
