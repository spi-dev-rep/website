import React from "react";
import TitleBanner from "./TitleBanner";
import "./css/WorkedWith.css";

import celo from "../images/celo-logo.png";
import near from "../images/near-protocol.svg";

const WorkedWith = () => {
  return (
    <div className="worked-with">
      <TitleBanner title="WORKED WITH" />
      <a href="https://celo.org/">
        <img src={celo} alt="" />
      </a>
      <a href="https://near.org/">
        <img src={near} alt="" />
      </a>
    </div>
  );
};

export default WorkedWith;
