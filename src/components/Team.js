import React from "react";
import imgPerson1 from "../assets/person3.png";
import imgPerson2 from "../assets/person1.png";
import imgPerson3 from "../assets/person2.png";

const Team = () => {
  return (
    <div className="team-main">
      <div className="team-details">
        <div className="team-intro">Meet the team</div>
        <div className="team-title">We are chilled and a laidback team</div>
        <div className="team-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="team-images">
        <div className="team-images-left">
          <img src={imgPerson1} alt="member1" />
        </div>
        <div className="team-images-right">
          <img src={imgPerson2} alt="member2" />
          <img src={imgPerson3} alt="member3" />
        </div>
      </div>
    </div>
  );
};

export default Team;
