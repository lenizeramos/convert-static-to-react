import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, toggleSidebar }) => {
  const handleHashLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    event.preventDefault();
    window.location.hash = target;
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${isVisible ? "" : "visibility-hidden"}`}>
      <button className="cross-button" onClick={toggleSidebar}>
        <div className="cross-line-1"></div>
        <div className="cross-line-2"></div>
      </button>
      <div className="navigation-container">
        <div className="sidebar-logo">
          <img src="./images/logo.png" alt="alt-logo-text" />
        </div>
        <ul className="navigation-text">
          <li className="nav-item">
            <NavLink to="#" onClick={(e) => handleHashLink(e, "reverberate")}>
              迴響 Reverberate
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="#" onClick={(e) => handleHashLink(e, "works")}>
              作品集 Works
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="#" onClick={(e) => handleHashLink(e, "paint")}>
              創作理念 Painting Aesthetics
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="#" onClick={(e) => handleHashLink(e, "about")}>
              關於 About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
