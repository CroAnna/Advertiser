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
    </div>
  );
};

export default Header;
