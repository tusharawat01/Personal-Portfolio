import React, { useContext, useState, useEffect } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Blog from "../../img/Blog.png";
import VideoTube  from "../../img/VideoTube.jpg"
import MusicAcademy from "../../img/MusicAcademy.png"
import { themeContext } from "../../Context";


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
