import React from "react";
import Oglas from "./Oglas";

const Oglasi = ({ setSelectedFilter, filtOglasi }) => {
  const filterHandler = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div>
      <div className="najnovijiOglasi">
        <div>
          <select name="filtration" id="filtration" onChange={filterHandler}>
            <option value="All">All</option>
            <option value="Animals">Animals</option>
            <option value="Cars">Cars</option>
            <option value="Bikes">Bikes</option>
          </select>
          <h2>Najnoviji oglasi</h2>
        </div>

        <div className="oglasi">
          {filtOglasi.map(
            (
              oglas,
              index // goes through filtered array
            ) => (
              <Oglas
                name={oglas.name}
                category={oglas.category}
                price={oglas.price}
                key={index}
                photoUrl={oglas.photoUrl}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Oglasi;
