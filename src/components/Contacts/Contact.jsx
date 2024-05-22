import React, { useContext } from "react";
import "./Contact.css";

import Github from "@iconscout/react-unicons/icons/uil-github";
import GmailIcon from "@iconscout/react-unicons/icons/uil-envelope-alt";
import User from "@iconscout/react-unicons/icons/uil-user";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Contact
          </span>
          <span>Social and Networking Platform</span>
          <span>
            This is the hub where you can explore my social networking platforms and reach out to me directly
            via Gmail. Simply click the "Hire Me" button below or the Gmail icon to get in touch. Whether you
            have questions, feedback, or simply want to say hello, I'm always eager to hear from you and engage
            in meaningful conversations.
          </span>
          <a href="mailto:tushar7314tr@gmail.com" target="_blank">
            <button className="button s-button">Hire Me</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <a href="https://github.com/tusharawat01" target="_blank" rel="noopener noreferrer">
              <Github color="orange" size={"7rem"} />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.linkedin.com/in/tushar-rawat-07471916a" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div className="w-secCircle">
            <User size="4rem" color="blue" />
          </div>

          <div className="w-secCircle">
            <a href="#">
              <Twitter color="orange" size={"5.5rem"} />
            </a>
          </div>
          <div className="w-secCircle">
            <a className="gmail" href="mailto:tushar7314tr@gmail.com" target="_blank" rel="noopener noreferrer">
              <GmailIcon size="4rem" color="orange" />
            </a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
