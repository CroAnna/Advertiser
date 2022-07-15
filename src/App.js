import React, { useState, useEffect, Fragment } from "react";
import "./App.scss";
import Oglasi from "./Components/Oglasi";
import Unos from "./Components/Unos";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "./Components/Info";

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
      name: "Cow",
      category: "Animal",
      price: "1000€",
      photoUrl:
        "https://i0.hippopx.com/photos/1014/166/417/calf-cow-nature-beef-preview.jpg",
    },
    {
      name: "Chicken",
      category: "Animal",
      price: "5€",
      photoUrl:
        "https://images.unsplash.com/photo-1620136717591-841a4da27e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Audi R8",
      category: "Car",
      price: "1000000€",
      photoUrl:
        "https://www.slobodenpecat.mk/wp-content/uploads/2019/08/promo3993.jpg",
    },
    {
      name: "Labrador puppies",
      category: "Animal",
      price: "200€",
      photoUrl:
        "https://www.sisak.info/wp-content/uploads/2020/05/funniest-cutest-labrador-puppies-2-funny-puppy-videos-2020.jpg",
    },
    {
      name: "Mercedes AMG GT",
      category: "Car",
      price: "2000000€",
      photoUrl:
        "https://www.driveteam.hr/wp-content/uploads/Mercedes-AMG-GT-Black-series-cijena-narudzba-4.jpg",
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

          // console.log(`filtrirani car: ${filtOglasi}`);

          break;
        }
        case "Bikes": {
          setFiltOglasi(oglasi.filter((oglas) => oglas.category === "Bike"));
          // console.log(`filtrirani bike: ${filtOglasi}`);
          break;
        }
        case "Animals": {
          setFiltOglasi(oglasi.filter((oglas) => oglas.category === "Animal"));
          // console.log(`filtrirani animal: ${filtOglasi}`);

          break;
        }
        default: {
          setFiltOglasi(oglasi);
          // console.log(`filtrirani all: ${filtOglasi}`);
        }
      }
    }
    filterHandler();
  }, [oglasi, selectedFilter]); // run when oglasi array or selected filter changes

  return (
    <BrowserRouter>
      <div className="App ">
        <Header />
        <Routes>
          <Route
            index
            path="/"
            element={
              <Fragment>
                {/* ovak mozes vise komponenti metnat u 1 Route */}
                <Oglasi
                  setSelectedFilter={setSelectedFilter}
                  filtOglasi={filtOglasi}
                />
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
              </Fragment>
            }
          ></Route>
          <Route path="/info/:name" element={<Info oglasi={oglasi} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
