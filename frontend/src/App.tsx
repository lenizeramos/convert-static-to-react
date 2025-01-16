import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import SlideShow from "./components/SlideShow";
import About from "./components/About";
import Paint from "./components/Paint";
import Reverberate from "./components/Reverberate";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 350,
      easing: "ease",
      mirror: true,
    });
  }, []);

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="./images/logo.png" alt="alt-logo-text" />
        </div>
        <div className="toggleNavButton" id="toggleNavButton">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <img src="images/hamburger.png" alt="menu image"></img>
          </button>
        </div>
        <SlideShow />
      </header>
      <Sidebar isVisible={sidebarVisible} toggleSidebar={toggleSidebar} />

      <About />
      <Paint />

      <Reverberate />
    </>
  );
};

export default App;
