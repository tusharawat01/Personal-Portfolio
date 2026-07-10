import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const experienceData = [
  {
    company: "Aero2Astro-Tech",
    role: "Full Stack Developer",
    duration: "Jul 2024 – Present",
    points: [
      "Building a Drone Data Management and Pilot Registration & Management System on the MERN stack.",
      "Architected a pilot registration system onboarding several pilots with end-to-end verification.",
      "Integrated Mapbox, CesiumJS, and GeoServer for 2D/3D geospatial visualization of GeoTIFF and LAS/LAZ point cloud data.",
      "Implemented LAS/LAZ point cloud and 3D model visualization, enabling in-browser review of large aerial datasets without third-party tools.",
      "Reduced storage overhead by 10x via compressed formats and chunked Cloudinary uploads with on-demand video streaming.",
      "Deployed backend on Azure VM with AWS S3, containerizing 4+ services via Docker.",
      "Automated deployments with GitHub Actions CI/CD, using Nginx and Certbot to enforce HTTPS via SSL/TLS certificates.",
    ],
  },
  {
    company: "Aero2Astro-Tech",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 – Jul 2024",
    points: [
      "Built and tested responsive UI components and REST APIs using the MERN stack for internal web applications.",
    ],
  },
];

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="exp-heading">
        <span style={{ color: darkMode ? "white" : "" }}>Experience</span>
        <span>My Work Journey</span>
      </div>

      <div className="achievements">
        <div className="achievement">
          {/* darkMode */}
          <div
            className="circle"
            style={{
              background: darkMode ? "#1a1a2e" : "",
              color: darkMode ? "white" : "",
            }}
          >
            2+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>years </span>
          <span>Learning</span>
        </div>
        <div className="achievement">
          <div
            className="circle"
            style={{
              background: darkMode ? "#1a1a2e" : "",
              color: darkMode ? "white" : "",
            }}
          >
            5+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>completed </span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div
            className="circle"
            style={{
              background: darkMode ? "#1a1a2e" : "",
              color: darkMode ? "white" : "",
            }}
          >
            1
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>company </span>
          <span>Work</span>
        </div>
      </div>

      <div className="exp-timeline">
        {experienceData.map((job, index) => (
          <div
            className="exp-item"
            key={index}
            style={{ background: darkMode ? "#1a1a2e" : "" }}
          >
            <div className="exp-item-header">
              <div>
                <span
                  className="exp-role"
                  style={{ color: darkMode ? "white" : "" }}
                >
                  {job.role}
                </span>
                <span className="exp-company">{job.company}</span>
              </div>
              <span
                className="exp-duration"
                style={{ color: darkMode ? "#c7c9d9" : "" }}
              >
                {job.duration}
              </span>
            </div>
            <ul className="exp-points">
              {job.points.map((point, i) => (
                <li key={i} style={{ color: darkMode ? "#c7c9d9" : "" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
