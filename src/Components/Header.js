import React from "react";
import themeIcon from "../Images/theme.png";

const Header = () => {
  return (
    <div>
      <img src={themeIcon} alt="theme-icon" className="theme" />
      <h1>Oglasnik</h1>
    </div>
  );
};

export default Header;
