import React from "react";
import UserAdList from "./UserAdList";

import { useState } from "react";
import { useEffect } from "react";

const User = ({ oglasi }) => {
  const [filtUserAds, setFiltUserAds] = useState([]);

  useEffect(() => {
    function filterUserHandler() {
      setFiltUserAds(oglasi.filter((oglas) => oglas.added === true));
    }
    filterUserHandler();
  }, [oglasi]);
  return (
    <div className="user-container">
      <h2>My profile</h2>
      <div className="user-ads">
        <h3>My ads</h3>
        {filtUserAds.map(
          (
            oglas,
            index // goes through filtered array
          ) => (
            <UserAdList
              name={oglas.name}
              category={oglas.category}
              price={oglas.price}
              key={index}
              photoUrl={oglas.photoUrl}
              added={oglas.added}
            />
          )
        )}
      </div>
    </div>
  );
};

export default User;
