import React from "react";
import { Link } from "react-router-dom";
// import themeIcon from "../Images/theme.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setSelectedFilter }) => {
  function homeHandler() {
    setSelectedFilter("All"); // resetes filter every time
  }

  return (
    <div>
      <Link to="/user">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
      </Link>

      <Link to="/" onClick={homeHandler}>
        <h1>Advertiser</h1>
      </Link>
    </div>
  );
};

export default Header;
