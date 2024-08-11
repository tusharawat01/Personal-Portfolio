import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
// import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <h2>Tushar Rawat</h2>
        <div className="f-icons">

          <a href="https://github.com/tusharawat01" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/tushar-rawat-07471916a/" target="_blank" rel="noopener noreferrer">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="#">
            <Twitter color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
