import React, { useEffect, useRef } from "react";
import Oglas from "./Oglas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Oglasi = ({ setSelectedFilter, filtOglasi }) => {
  const filterHandler = (e) => {
    setSelectedFilter(e.target.value);
  };

  useEffect(() => {
    // kad nema niceg u toj kategoriji
    // console.log(filtOglasi);
    if (filtOglasi.length === 0) {
      // console.log("prazno");
    }
  }, [filtOglasi]);

  const frame = useRef();

  const clickLeft = () => {
    // console.log("lijevi klik");
    console.log(frame.current);
    console.log(frame.current.style);
    console.log(frame.current.style.left);
    // frame.current.left += "30px";
    frame.current.style.backgroundColor = "#ffb347";
    frame.current.style.left -= "300px";
    console.log(frame.current.style);
    console.log(frame.current);
  };

  const clickRight = () => {
    // console.log("lijevi klik");
    console.log(frame.current);
    // frame.current.left += "30px";
    frame.current.style.backgroundColor = "#44d700";
    frame.current.style.left += "300px";
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
          <div className="arrow arr-left" onClick={clickLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="oglasi-map" ref={frame}>
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
          <div className="arrow arr-right" onClick={clickRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oglasi;
