import React, { useEffect, useRef } from "react";
import Oglas from "./Oglas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Oglasi = ({ setSelectedFilter, filtOglasi }) => {
  const settings = {
    dots: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "red" }}
      //   onClick={onClick}
      // />

      <div className="arrow arr-right" onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow arr-left" onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    );
  }

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
          <div className="oglasi-map">
            <Slider {...settings}>
              {/* we can very easily take the object and spread its properties down to a component as individual prop values using the object spread operator {...myPropObject}.  */}{" "}
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
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oglasi;
