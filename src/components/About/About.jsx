import React, { useContext } from "react";
import "./About.css";
import { themeContext } from "../../Context";

const facts = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Company", value: "Aero2Astro-Tech" },
  { label: "Location", value: "West Delhi, India" },
  { label: "Education", value: "B.Tech, GGSIPU" },
];

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id="about">
      <div className="about-left">
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>Who I Am</span>
        <p className="about-bio">
          I'm a Full Stack Developer based in West Delhi, India, specializing in
          the MERN stack. I currently work at Aero2Astro-Tech, building a Drone
          Data Management and Pilot Registration & Management System,
          integrating geospatial tools like Mapbox, CesiumJS, and GeoServer, and
          deploying containerized services on Azure and AWS. Outside of work, I
          build side projects exploring AI integrations, video streaming, and 3D
          visualization. I hold a B.Tech in Mechanical & Automotive Engineering
          from Guru Gobind Singh Indraprastha University.
        </p>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="about-right">
        {facts.map((fact) => (
          <div className="about-fact" key={fact.label}>
            <span className="about-fact-label">{fact.label}</span>
            <span className="about-fact-value">{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
