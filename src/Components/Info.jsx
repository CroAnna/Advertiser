import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

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
                <Link to={"../"}>
                  <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    className="back-arrow"
                  />
                </Link>
                <div className="info-photo">
                  <img src={oglas.photoUrl} alt={name} />
                </div>
                <div className="info-content">
                  <h2>Information:</h2>
                  <h2 className="title">{oglas.name}</h2>
                  <p>{`Price: ${oglas.price}`}</p>
                  <p>{`Category: ${oglas.category}`}</p>
                  <p>{`Location: ${oglas.location}`}</p>
                  <p
                    className={
                      oglas.category === "Car" || oglas.category === "Bike"
                        ? ""
                        : "hidden"
                    }
                  >{`Year of manufacture: ${oglas.year}`}</p>
                  <p>{`About: ${oglas.about}`}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Info;
