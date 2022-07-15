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
                  <h2>{`Name: ${oglas.name}`}</h2>
                  <p>{`Price: ${oglas.price}`}</p>
                  <p>{`Category: ${oglas.category}`}</p>
                  <p>{`Location: ${oglas.name}`}</p>
                  <p>{`About: Pellentesque posuere eros dolor, eu porta magna malesuada id. Fusce dignissim elit vitae dui facilisis, vel elementum neque sollicitudin. Duis porttitor turpis in erat posuere auctor. Donec ullamcorper elit malesuada bibendum viverra. Nulla elementum metus quis sapien accumsan, et ultricies dui auctor. Duis eleifend, leo non elementum euismod, est dolor posuere elit, eu vehicula justo ante sed tellus. In at elit eu nisi euismod pretium. Aliquam commodo et ex ut finibus. Curabitur vitae ante mi. Sed vel dignissim dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis porta quam est, non bibendum lacus hendrerit in. Aliquam molestie egestas ipsum, non ultricies magna pharetra vehicula. Morbi sit amet turpis condimentum, venenatis augue et, luctus nisi.`}</p>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Info;
