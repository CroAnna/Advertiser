import React from "react";

const Oglas = ({ name, category, price, photoUrl }) => {
  return (
    <div className="oglas">
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <img src={photoUrl} alt={name} />
    </div>
  );
};

export default Oglas;
