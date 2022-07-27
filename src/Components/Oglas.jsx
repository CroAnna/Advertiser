import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Oglas = ({ name, category, price, photoUrl, added }) => {
  return (
    <div className="oglas">
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Added:{added}</p>
      <div className="img-div">
        <img src={photoUrl} alt={name} />
      </div>
      <Link to={"/info/" + name}>
        <button className="more-info">
          <FontAwesomeIcon icon={faCircleInfo} color="#ffffff" />
        </button>
      </Link>
    </div>
  );
};

export default Oglas;
