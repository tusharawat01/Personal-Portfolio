import React, { useContext, useState, useEffect } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Blog from "../../img/Blog.png";
import DronePilotManagement from "../../img/DronePilotManagement.png";
import AIInterviewAgent from "../../img/AIInterviewAgent.png";
import VideoTube from "../../img/VideoTube.jpg";
import MusicAcademy from "../../img/MusicAcademy.png";
import { themeContext } from "../../Context";
import DronePilotLocator from "../../img/DronePilot.png";
import MapboxWithTerrain from "../../img/MapboxWithTerrain.png";
import FileConvertor from "../../img/file-converted.png";
import VideoCompression from "../../img/VideoCompression.png";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [width, setWidth] = useState(window.innerWidth);
  const [slides, setSlides] = useState(1);

  const updateSlides = (width) => {
    if (width >= 1200) {
      return 3;
    } else if (width >= 700) {
      return 2;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setSlides(updateSlides(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the slides

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
      <span style={{ color: darkMode ? "white" : "" }}>
        (Click on Image to visit Github Repo)
      </span>

      {/* slider */}
      <Swiper
        spaceBetween={8}
        slidesPerView={slides}
        grabCursor={true}
        className="portfolio-slider"
        // loop={true} // Enable infinite loop
        pagination={{ clickable: true }} // Enable pagination if needed
        navigation={true} // Enable navigation arrows if needed
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <h1>AI Interview Agent</h1>
          <p className="p-desc">
            Full-stack AI mock interview platform (React, Node.js, Express,
            MongoDB) with Google OAuth. Generates role-specific interview
            questions from resume data, evaluates spoken answers via the Web
            Speech API, and includes an ATS resume score checker and
            Razorpay-based subscription plans.
          </p>
          <a
            href="https://github.com/tusharawat01/AIInterviewAgent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AIInterviewAgent} alt="AI-Interview Agent" />
          </a>
          <div className="link">
            <a
              href="https://ai-interview-agent-ivory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Drone-Pilot-Management</h1>
          <p className="p-desc">
            A platform for organizing drone pilot profiles, certifications,
            assigned projects, flight records, and availability — helping
            administrators track pilots, manage assignments, and monitor
            operations through a centralized dashboard.
          </p>
          <a
            href="https://github.com/tusharawat01/AeroFleet-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={DronePilotManagement} alt="Piolot-Management" />
          </a>
          <div className="link">
            <a
              href="https://pilot-management.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Blog App</h1>
          <p className="p-desc">
            A full-stack blogging platform with authentication, rich-text
            post creation/editing, image uploads, and a responsive UI for
            publishing and reading articles.
          </p>
          <a
            href="https://github.com/tusharawat01/BlogApp.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Blog} alt="Blog App" />
          </a>
          <div className="link">
            <a
              href="https://blog-app-react-js.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>VideoTube (Backend)</h1>
          <p className="p-desc">
            A YouTube-style video streaming backend built with Express,
            MongoDB, and Cloudinary, featuring JWT auth, aggregation-paginated
            feeds, and a tweet-like engagement feature.
          </p>
          <a
            href="https://github.com/tusharawat01/Backend.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={VideoTube} alt="VideoTube" />
          </a>
          <div className="link">
            <a
              href="https://app.eraser.io/workspace/C4gGp0VnPE75Etizh5cv?origin=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Model Link
            </a>

            <a
              href="https://www.postman.com/tushar-rawar/workspace/backend-videotube/collection/27980968-5c3500f1-f3dc-404e-9272-8cd7b6661f27?action=share&creator=27980968&active-environment=27980968-8c29a9a4-cdbb-4c5e-babe-e3db11c1dc73"
              target="_blank"
              rel="noopener noreferrer"
            >
              Postman
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Music Academy</h1>
          <p className="p-desc">
            A modern Music Academy website built with Next.js, TypeScript,
            and shadcn/ui — reusable components and responsive, interactive
            sections for courses, instructors, testimonials, and events.
          </p>
          <a
            href="https://github.com/tusharawat01/NextJS-Project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MusicAcademy} alt="Music Academy" />
          </a>
          <div className="link">
            <a
              href="https://music-academy01.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Point Cloud Viewer</h1>
          <p className="p-desc">
            A browser-based viewer for large 3D point cloud datasets —
            supports uploading LAS/LAZ files, rendering point clouds, and
            navigating geospatial data without third-party desktop tools.
          </p>
          <a
            href="https://github.com/tusharawat01/Point-Cloud_Viewer.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FileConvertor} alt="Point Cloud Viewer" />
          </a>
          <div className="link">
            <a
              href="https://point-cloud-viewer.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Drone Pilot Locator</h1>
          <p className="p-desc">
            An interactive map showing drone pilots worldwide, with
            searchable/filterable markers revealing pilot names,
            descriptions, and nearby availability.
          </p>
          <a
            href="https://github.com/tusharawat01/drone-pilot-locator.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={DronePilotLocator} alt="Drone Pilot Locator" />
          </a>
          <div className="link">
            <a
              href="https://drone-pilot-map.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>Video Upload & Streaming</h1>
          <p className="p-desc">
            A video upload and streaming platform (Node.js, Express, React,
            FFmpeg, Cloudinary) supporting chunked uploads, compression, HLS
            streaming, and secure playback for large video files.
          </p>
          <a
            href="https://github.com/tusharawat01/VideoUploading-Streaming.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={VideoCompression} alt="Video Upload & Streaming" />
          </a>
          <div className="link">
            <a
              href="https://video-uploading-streaming.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>3D Map</h1>
          <p className="p-desc">
            A geospatial visualization platform for rendering interactive 3D
            terrain, maps, and models — supports overlaying datasets and
            inspecting terrain and 3D assets in real time.
          </p>
          <a
            href="https://github.com/tusharawat01/Mapbox-Terrain.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MapboxWithTerrain} alt="Mapbox with Terrain Style" />
          </a>
          <div className="link">
            <a
              href="https://3d-model-viewer01.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
