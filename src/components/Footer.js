import React from "react";
import EmailBox from "./EmailBox";
import svgInstagram from "../assets/instagram.svg";
import svgLinkedin from "../assets/linkedin.svg";
import svgTwitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <nav className="footer-links">
        <button id="btnHome">Home</button>
        <button id="btnServices">Services</button>
        <button id="btnOurWorks">Our Works</button>
        <button id="btnClients">Clients</button>
        <button id="btnContact">Contact</button>
      </nav>
      <div className="footer-connect">
        <div className="footer-logo">Edie</div>
        <div className="footer-socialmedia-logos">
          <div className="social-logo">
            <img src={svgInstagram} alt="Instagram" />
          </div>
          <div className="social-logo">
            <a
              href="https://www.linkedin.com/in/shivaansh-agarwal/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={svgLinkedin} alt="Linkedin" />
            </a>
          </div>
          <div className="social-logo">
            <a
              href="https://twitter.com/Shivansh_97"
              target="_blank"
              rel="noreferrer"
            >
              <img src={svgTwitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <EmailBox />
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <a
            href="https://shivaansh-agarwal.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Shivaansh
          </a>
          &nbsp; @DevChallenges.io
        </div>
      </div>
    </footer>
  );
};

export default Footer;
