import React from "react";
import Oglas from "./Oglas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </div>
  );
}

const User = ({ oglasi }) => {
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
        breakpoint: 1740,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="najnovijiOglasi">
      <h2>My profile</h2>
      <div className="oglasi">
        <div className="oglasi-map">
          <Slider {...settings} style={{ display: "flex" }}>
            {/* overrides display: block from slick.css*/}
            {oglasi.map(
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
  );
};

export default User;
