import React from "react";
import UserAdList from "./UserAdList";
import { useEffect } from "react";

const User = ({ oglasi, setOglase, filtUserAds, setFiltUserAds }) => {
  useEffect(() => {
    function filterUserHandler() {
      setFiltUserAds(oglasi.filter((oglas) => oglas.added === true));
    }
    filterUserHandler();
  }, [oglasi, setFiltUserAds]);
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
              key={oglas.id}
              filtUserAds={filtUserAds}
              oglasi={oglasi}
              setOglase={setOglase}
              oglas={oglas}
            />
          )
        )}
      </div>
    </div>
  );
};

export default User;
