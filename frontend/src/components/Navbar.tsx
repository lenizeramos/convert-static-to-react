import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sidebar visibility-hidden" id="sidebar">
      <div className="cross-button" id="cross-button">
        <div className="cross-line-1"></div>
        <div className="cross-line-2"></div>
      </div>

      <div className="navigation-container">
        {/* <div className="sidebar-logo">
          <img src="/images/logo.png" alt="alt-logo-text"></img>
        </div> */}

        <ul className="navigation-text">
          <li className="nav-item">
            <NavLink to="/reverberate">迴響 Reverberate</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/works">作品集 Works</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/paint">創作理念 Painting Aesthetics</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about">關於 About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
