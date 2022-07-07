import React, { useEffect } from "react";
import Oglas from "./Oglas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Oglasi = ({ setSelectedFilter, filtOglasi }) => {
  const filterHandler = (e) => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    // kad nema niceg u toj kategoriji
    console.log(filtOglasi);
    if (filtOglasi.length === 0) {
      console.log("prazno");
    }
  }, [filtOglasi]);

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
          <div className="arrow arr-left">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="oglasi-map">
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
          <div className="arrow arr-right">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oglasi;
