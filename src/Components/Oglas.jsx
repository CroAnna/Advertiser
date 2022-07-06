import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Oglas = ({ name, category, price, photoUrl }) => {
  return (
    <div className="oglas">
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <img src={photoUrl} alt={name} />
      <button className="more-info">
        <FontAwesomeIcon icon={faCircleInfo} color="#ffffff" />
      </button>
    </div>
  );
};

export default Oglas;
