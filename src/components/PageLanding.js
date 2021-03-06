import React from "react";
import EmailBox from "./EmailBox";
import imgTeamMeeting from "../assets/heroImage.jpg";

const PageLanding = () => {
  return (
    <div className="page-landing">
      <div id="title-blue">Unhappy with your website?</div>
      <div id="title-top">We create beautiful and fast web services</div>
      <div id="page-heading-img">
        <img src={imgTeamMeeting} alt="team-meeting" />
      </div>
      <div id="title-bottom">Story, emotion and purpose</div>
      <div id="title-description">
        We help transform your ideas into real world applications that will
        outperform your toughest competition and help you achieve your strategic
        goals in short period of time.
      </div>
      <div className="title-email-wrapper">
        <EmailBox />
      </div>
    </div>
  );
};

export default PageLanding;
