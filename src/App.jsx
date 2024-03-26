import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import "./App.css";

import Contacts from "./components/Contacts/Contact";
import Project from "./components/Projects/Project";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
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
      <Contacts />
      <Project />
      <Footer />
    </div>
  );
}

export default App;