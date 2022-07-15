import React from "react";
import { useParams } from "react-router-dom";

const Info = ({ oglasi }) => {
  let { name } = useParams(); // info/:{name}

  return (
    <div>
      <div className="info-ad">
        {oglasi
          .filter((oglas) => oglas.name === name) // find the chosen ad (object)
          .map(
            (
              oglas,
              index // map through its atributes
            ) => (
              <div key={index}>
                <h2>{oglas.name}</h2>
                <p>{oglas.price}</p>
                <img src={oglas.photoUrl} alt={name} />
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Info;
