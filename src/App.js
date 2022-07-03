import React, { useState } from "react";
import "./App.css";
// import Oglas from "./Components/Oglas";
import Oglasi from "./Components/Oglasi";
import Unos from "./Components/Unos";

function App() {
  const [oglasi, setOglase] = useState([
    {
      name: "BMW GS310",
      category: "bike",
      price: "35000€",
      photoUrl:
        "https://mcn-images.bauersecure.com/wp-images/4552/bmw-g310gs-40-years.jpg",
    },
    {
      name: "Tele",
      category: "animal",
      price: "1000€",
      photoUrl:
        "https://i0.hippopx.com/photos/1014/166/417/calf-cow-nature-beef-preview.jpg",
    },
  ]);

  const [gumb, setGumb] = useState(false); // VELI DA SE NEMRE CONST MIJENJAT AMMMMM...
  // const [gumb, setGumb] = useState("FALSE");
  console.log(gumb);

  return (
    <div className="App">
      <h1>Recicki oglasnik</h1>
      <Oglasi oglasi={oglasi} />
      <Unos gumb={gumb} setGumb={setGumb} />
    </div>
  );
}

export default App;
