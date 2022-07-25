import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Info = ({ oglasi }) => {
  let { name } = useParams(); // info/:{name}

  Leaflet.Icon.Default.imagePath =
    "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/";

  const loadHandler = () => {
    console.log("bok");
  };

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
                <div className="info-content" onLoad={loadHandler}>
                  <h2>Information:</h2>
                  <h2 className="title">{oglas.name}</h2>
                  <p>{`Price: ${oglas.price}`}</p>
                  <p>{`Category: ${oglas.category}`}</p>
                  <p>{`Location: ${oglas.location}`}</p>
                  <div className="map">
                    <MapContainer
                      center={oglas.coordinates.split(",").map(function (item) {
                        // string to array of numbers
                        return parseFloat(item, 10);
                      })}
                      zoom={13}
                      style={{ height: "100%", minHeight: "100%" }}
                    >
                      <TileLayer
                        className="slika"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={oglas.coordinates
                          .split(",")
                          .map(function (item) {
                            return parseFloat(item, 10);
                          })}
                      >
                        <Popup>Ovdje si</Popup>
                      </Marker>
                    </MapContainer>
                  </div>

                  <div
                    className={
                      oglas.category === "Car" || oglas.category === "Bike"
                        ? "about-block"
                        : "hidden"
                    }
                  >
                    <p>{`Year of manufacture: ${oglas.year}`}</p>
                    <p> {`Engine type: ${oglas.engine}`}</p>
                    <p>{`Transmission: ${oglas.transmission}`}</p>
                  </div>

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
