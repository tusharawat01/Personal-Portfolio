import React, { useContext } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Blog from "../../img/Blog.png";
import { themeContext } from "../../Context";
const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <h1>Blog App</h1>
          <a href="https://github.com/tusharawat01/BlogApp.git" target="_blank">  <img src={Blog} alt="" /></a>
        
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
