import React from "react";
import { useLocation } from "react-router-dom";

const Info = (name, price) => {
  const location = useLocation();
  const { state } = location;
  // console.log(location);
  // console.log(state[0]); //name
  // console.log(state[1]); //price
  // console.log(name);

  return (
    <div>
      <h2>booook</h2>
      {/* <p>{state[0]}</p>
      <p>{state[1]}</p> */}
    </div>
  );
};

export default Info;
