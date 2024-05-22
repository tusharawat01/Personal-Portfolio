import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>SKILLS</span>
        <span></span>
        <span>
        Familiar with MERN stack development, capable of building basic applications 
        using MongoDB, Express.js, React.js, and Node.js.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="button s-button">View CV</button>
          </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "40rem" }}
          whileInView={{ left: "29rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Programming Language"}
            detail={"JavaScript, Java"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "4rem", top: "12rem" }}
          whileInView={{ left: "11rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            detail={"HTML, CSS, React.js, Redux-Toolkit, Nodejs"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "40rem" }}
          whileInView={{ left: "29rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Backend"}
            detail={
              "Nodejs, Express, MongoDB, MySQL"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
