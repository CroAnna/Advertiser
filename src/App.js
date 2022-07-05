import React, { useState, useEffect } from "react";
import "./App.css";
import Oglasi from "./Components/Oglasi";
import Unos from "./Components/Unos";
import Header from "./Components/Header";

function App() {
  const [oglasi, setOglase] = useState([
    {
      name: "BMW GS310",
      category: "Bike",
      price: "35000€",
      photoUrl:
        "https://mcn-images.bauersecure.com/wp-images/4552/bmw-g310gs-40-years.jpg",
    },
    {
      name: "Tele",
      category: "Animal",
      price: "1000€",
      photoUrl:
        "https://i0.hippopx.com/photos/1014/166/417/calf-cow-nature-beef-preview.jpg",
    },
  ]);

  const [filtOglasi, setFiltOglasi] = useState([]);

  const [inputTextName, setInputTextName] = useState("");
  const [inputTextCategory, setInputTextCategory] = useState("");
  const [inputTextPrice, setInputTextPrice] = useState("");
  const [inputTextPhotoURL, setInputTextPhotoURL] = useState("");

  const [gumb, setGumb] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    function filterHandler() {
      switch (selectedFilter) {
        // new array filtOglasi fills with the ones we want (based on chosen category)
        case "Cars": {
          setFiltOglasi(oglasi.filter((oglas) => oglas.category === "Car"));
          break;
        }
        case "Bikes": {
          setFiltOglasi(oglasi.filter((oglas) => oglas.category === "Bike"));
          break;
        }
        case "Animals": {
          setFiltOglasi(oglasi.filter((oglas) => oglas.category === "Animal"));
          break;
        }
        default: {
          setFiltOglasi(oglasi);
        }
      }
    }
    filterHandler();
  }, [oglasi, selectedFilter]); // run when oglasi array or selected filter changes

  return (
    <div className="App ">
      <Header />
      <Oglasi setSelectedFilter={setSelectedFilter} filtOglasi={filtOglasi} />
      <Unos
        gumb={gumb}
        setGumb={setGumb}
        inputTextName={inputTextName}
        setInputTextName={setInputTextName}
        oglasi={oglasi}
        setOglase={setOglase}
        inputTextCategory={inputTextCategory}
        setInputTextCategory={setInputTextCategory}
        inputTextPrice={inputTextPrice}
        setInputTextPrice={setInputTextPrice}
        inputTextPhotoURL={inputTextPhotoURL}
        setInputTextPhotoURL={setInputTextPhotoURL}
      />
    </div>
  );
}

export default App;
