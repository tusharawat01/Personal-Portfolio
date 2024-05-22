import React, { useContext } from "react";
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
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects</span>
      <span style={{color: darkMode?'white': ''}}>(Click on Image to visit Github Repo)</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <h1>Blog App</h1>
          <a href="https://github.com/tusharawat01/BlogApp.git" target="_blank" rel="noopener noreferrer">  
          <img src={Blog} alt="Blog App" />
          </a>
          <div className= "link">
          <a href="https://blog-app-react-js.netlify.app" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div>
         
        </SwiperSlide>
       

        <SwiperSlide>
        <h1>VideoTube (Backend)</h1>
          <a href="https://github.com/tusharawat01/Backend.git" target="_blank" rel="noopener noreferrer">  
          <img src={VideoTube} alt="VideoTube" height={163} width={90}/>
          </a>
        
        </SwiperSlide>

        <SwiperSlide>
        <h1>Music Academy</h1>
          <a href="https://github.com/tusharawat01/NextJS-Project.git" target="_blank" rel="noopener noreferrer">  
          <img src={MusicAcademy} alt="Music Academy" height={163} width={90}/>
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
