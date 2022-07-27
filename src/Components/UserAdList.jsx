import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UserAdList = ({ name, category, price, photoUrl, added }) => {
  return (
    <div className="user-ad">
      <h2>{name}</h2>
      <div className="info">
        <p>Category: {category}</p>
        <p>Price: {price}</p>
      </div>
      <button>
        <FontAwesomeIcon icon={faTrash} color="#ffffff" />
      </button>
    </div>
  );
};

export default UserAdList;
