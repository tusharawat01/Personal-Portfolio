import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import "./App.css";

import SocialMedia from "./components/SocialMedia/SocialMedia";

import Project from "./components/Projects/Project";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./components/experience/Experience";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Home />
      <Skills />
      <SocialMedia />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;