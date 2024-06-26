import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Theme</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
          
            <li>
              <Link  activeClass="active" to="portfolio" spy={true} smooth={true}>
                Project
              </Link>
            </li>
          </ul>
        </div>
        <Link to="works" spy={true} smooth={true} className="button" id="n-button">
        Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
