// animated scroll button. not currently linked to scrolling, but is clickable

import React from "react";
import { Link } from "react-router-dom";
import "./css/ScrollBtn.css";

const ScrollBtn = () => {
  return (
    <div>
      <section id="arrow" className="text">
        <Link to="about">
          <span></span>scroll
        </Link>
      </section>
    </div>
  );
};

export default ScrollBtn;
