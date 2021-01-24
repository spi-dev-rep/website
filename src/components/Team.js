import React from "react";
import TeamMember from "./TeamMember";
import TitleBanner from "./TitleBanner";
import "./css/Team.css";

// photo imports
import heading from "../images/spi-team-heading.png";
import oliver from "../images/oliver.jpeg";
import charlie from "../images/charlie.jpg";
import eli from "../images/eli.jpeg";
import hamish from "../images/hamish.jpeg";
import jolene from "../images/jolene.png";
import kostas from "../images/kostas.png";
import nathan from "../images/nathan.jpeg";
import shahmeer from "../images/shahmeer.jpg";
import shayne from "../images/shayne.png";
import ying from "../images/ying.png";

const Team = () => {
  return (
    <div className="team-background">
      <TitleBanner title="OUR TEAM" className="banner" />
      <ul>
        <li>
          <img src={heading} className="spi-team-heading" alt="" />
        </li>
        <li>
          <TeamMember
            photo={shahmeer}
            name="Shahmeer Chaudhry"
            position="Co-Founder"
            linkedIn="https://www.linkedin.com/in/shahmeerchaudhry/"
          />
        </li>
        <li>
          <TeamMember
            photo={shayne}
            name="Shayne Hooper"
            position="Co-Founder"
            linkedIn="https://www.linkedin.com/in/shayne-hooper-8839921bb/"
          />
        </li>
        <li>
          <TeamMember
            photo={eli}
            name="Eli Demoulin"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/eli-demoulin-16b2931bb/"
          />
        </li>
        <li>
          <TeamMember
            photo={nathan}
            name="Nathan Shepherd"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/nathan-shepherd-6561221ba/"
          />
        </li>
        <li>
          <TeamMember
            photo={charlie}
            name="Charlie Timmins"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/charlie-timmins-57a198204/"
          />
        </li>
        <li>
          <TeamMember
            photo={hamish}
            name="Hamish Spencer"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/hamish-spencer-574027200/"
          />
        </li>
        <li>
          <TeamMember
            photo={jolene}
            name="Jolene Loo"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/jolene-loo-a83a541bb/"
          />
        </li>
        <li>
          <TeamMember
            photo={ying}
            name="Ying Stokes"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/ying-stokes-5454011ab/"
          />
        </li>
        <li>
          <TeamMember
            photo={oliver}
            name="Oliver Dowie"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/oliverdowie/"
          />
        </li>
        <li>
          <TeamMember
            photo={kostas}
            name="Kosta Tsekouras"
            position="Founding Member"
            linkedIn="https://www.linkedin.com/in/kostatsekouras/"
          />
        </li>
      </ul>
    </div>
  );
};

export default Team;
