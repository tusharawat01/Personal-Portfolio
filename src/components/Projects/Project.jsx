import React, { useContext, useState, useEffect } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Blog from "../../img/Blog.png";
import VideoTube  from "../../img/VideoTube.jpg"
import MusicAcademy from "../../img/MusicAcademy.png"
import { themeContext } from "../../Context";
import DronePilot from "../../img/DronePilot.png"
import MapboxWithTerrain from "../../img/MapboxWithTerrain.png"
import FileConvertor from "../../img/file-converted.png"
import VideoCompression from "../../img/VideoCompression.png"


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
      <span style={{ color: darkMode ? 'white' : '' }}>Projects</span>
      <span style={{ color: darkMode ? 'white' : '' }}>(Click on Image to visit Github Repo)</span>

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
          <h1>Blog App</h1>
          <a href="https://github.com/tusharawat01/BlogApp.git" target="_blank" rel="noopener noreferrer">
            <img src={Blog} alt="Blog App" />
          </a>
          <div className="link">
            <a href="https://blog-app-react-js.netlify.app" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <h1>VideoTube (Backend)</h1>
          <a href="https://github.com/tusharawat01/Backend.git" target="_blank" rel="noopener noreferrer">
            <img src={VideoTube} alt="VideoTube" />
          </a>
          <div className="link">
            <a href="https://app.eraser.io/workspace/C4gGp0VnPE75Etizh5cv?origin=share" target="_blank" rel="noopener noreferrer">Model Link</a>
          
            <a href="https://www.postman.com/tushar-rawar/workspace/backend-videotube/collection/27980968-5c3500f1-f3dc-404e-9272-8cd7b6661f27?action=share&creator=27980968&active-environment=27980968-8c29a9a4-cdbb-4c5e-babe-e3db11c1dc73" target="_blank" rel="noopener noreferrer">Postman</a>
          </div>
          
        </SwiperSlide>

        <SwiperSlide>
          <h1>Point Cloud Viewer</h1>
          <a href="https://github.com/tusharawat01/Point-Cloud_Viewer.git" target="_blank" rel="noopener noreferrer">
            <img src={FileConvertor} alt="Point Cloud Viewer" />
          </a>
          <div className="link">
            <a href="https://point-cloud-viewer.vercel.app" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div> 
        </SwiperSlide>


        <SwiperSlide>
          <h1>Drone Pilot Locator</h1>
          <a href="https://github.com/tusharawat01/drone-pilot-locator.git" target="_blank" rel="noopener noreferrer">
            <img src={DronePilot} alt="Drone Pilot Locator" />
          </a>
          <div className="link">
            <a href="https://drone-pilot-map.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div> 
        </SwiperSlide>
        
        <SwiperSlide>
          <h1>Video Upload & Streaming</h1>
          <a href="https://github.com/tusharawat01/VideoUploading-Streaming.git" target="_blank" rel="noopener noreferrer">
            <img src={VideoCompression} alt="Video Upload & Streaming" />
          </a>
          <div className="link">
            <a href="https://video-uploading-streaming.vercel.app" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div> 
        </SwiperSlide>

        <SwiperSlide>
          <h1>3D Map</h1>
          <a href="https://github.com/tusharawat01/Mapbox-Terrain.git" target="_blank" rel="noopener noreferrer">
            <img src={MapboxWithTerrain} alt="Mapbox with Terrain Style" />
          </a>
          <div className="link">
            <a href="https://3d-model-viewer01.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div> 
        </SwiperSlide>

        <SwiperSlide>
          <h1>Music Academy</h1>
          <a href="https://github.com/tusharawat01/NextJS-Project.git" target="_blank" rel="noopener noreferrer">
            <img src={MusicAcademy} alt="Music Academy" />
          </a>
          <div className="link">
            <a href="https://music-academy01.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
