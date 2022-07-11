import React from "react";
import { Link, NavLink } from "react-router-dom";
import themeIcon from "../Images/theme.png";

const Header = () => {
  return (
    <div>
      <img src={themeIcon} alt="theme-icon" className="theme" />
      <Link to="/">
        <h1>Oglasnik</h1>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="./info">
          Info
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
