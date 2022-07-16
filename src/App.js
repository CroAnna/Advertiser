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
      name: "BMW S1000 XR",
      category: "Bike",
      price: "17000€",
      photoUrl:
        "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/21/2E/212EEAB6-CCC5-419B-AEB5-0E7DFB036D68.jpg",
      year: "2022",
      about:
        "Make no concessions, demand it all. From yourself, but also from your machine. Always fighting for the racing line: every curve a few degrees deeper, a few inches tighter. Mile after mile. With the S 1000 XR, you have a motorcycle that also makes no compromises. It combines athleticism and long-distance performance in perfect form. Its sporty aggressiveness comes from the RR. Its outstanding ergonomics with the upright, relaxed seat position, however, allows you to fight for every curve and straightaway all day. A racetrack that only finishes when you want. How it should be. That is how we view the XR.",
      location: "Mahično, Croatia",
      engine: "Water/oil-cooled 4-cylinder 4-stroke in-line",
      transmission: "Manual",
    },
    {
      name: "Cow",
      category: "Animal",
      price: "1000€",
      photoUrl:
        "https://i0.hippopx.com/photos/1014/166/417/calf-cow-nature-beef-preview.jpg",
      year: "",
      about:
        "A cow is a large female animal that is kept on farms for its milk. People sometimes refer to male and female animals of this species as cows.",
      location: "Trg, Croatia",
      engine: "",
      transmission: "",
    },

    {
      name: "Audi R8",
      category: "Car",
      price: "250000€",
      photoUrl:
        "https://www.slobodenpecat.mk/wp-content/uploads/2019/08/promo3993.jpg",
      year: "2018",
      about:
        "Although it shares its powertrain and mechanicals with the Lamborghini Huracán, the 2020 Audi R8 is less sharp-edged and surprisingly easy to live with day to day. Behind the passenger compartment is a raucous V-10 engine that makes as much as 602 horsepower depending on which version you choose and literally howls when prodded. Acceleration is appropriately expeditious but the R8's ride and handling favors a more comfortable nature, making it less competent for track days but appreciated on road trips. The R8's interior is nearly as striking as its bodywork, with an all-digital gauge display, soft leather with optional quilted stitching, and real carbon-fiber trim",
      location: "Vodnjan, Croatia",
      engine: "4.2-liter V8",
      transmission: "Manual",
    },
    {
      name: "Labrador puppies",
      category: "Animal",
      price: "200€",
      photoUrl:
        "https://www.sisak.info/wp-content/uploads/2020/05/funniest-cutest-labrador-puppies-2-funny-puppy-videos-2020.jpg",
      year: "",
      about:
        "The sweet-faced, lovable Labrador Retriever is America's most popular dog breed. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog. The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness, and the thick, tapering 'otter tail' seems to be forever signaling the breed's innate eagerness. Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don't mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, like swimming and marathon games of fetch, to keep physically and mentally fit.",
      location: "Sveti Ivan Žabno, Croatia",
      engine: "",
      transmission: "",
    },
    {
      name: "Mercedes AMG GT",
      category: "Car",
      price: "2000000€",
      photoUrl:
        "https://www.driveteam.hr/wp-content/uploads/Mercedes-AMG-GT-Black-series-cijena-narudzba-4.jpg",
      year: "2021",
      about:
        "The most powerful AMG V8 series engine of all time, even its key data take the breath away: 537 kW (730 hp) and 800 Nm maximum torque. This phenomenal output was achieved with several far-reaching modifications. On the one hand with a modified crankshaft which now has all the crank pins on one level. This is known as a Flatplane V8. This flat crankshaft effects a modified firing order and facilitates a better turn behaviour and an even more direct response. The two new exhaust gas turbochargers make a major contribution to the extreme engine power. They have anti-friction-bearing-mounted turbines and a twinscroll exhaust gas turbocharger design. The aim of both measures was also to enable an even more immediate reaction from the engine to acceleration commands. The scope of the charge air cooling was increased in order to ensure the tremendous output even at continually high load.",
      location: "Sračinec, Croatia",
      engine: "twin-turbo 4.0-liter V8",
      transmission: "Automatic",
    },
    {
      name: "Chicken",
      category: "Animal",
      price: "5€",
      photoUrl:
        "http://www.busa-dubrovnik.com/Kokos%20Hrvatica%20i%20ostalo/slides/koko26.JPG",
      year: "",
      about:
        "3 month old animal, type is chicken Hrvatica - a Croatian breed of domestic chicken. The breed is widespread in almost all of Croatia and the Balkans. The breed was developed in 1917 by Ivan Lakuš, in the village of Torčec in Podravina Province.",
      location: "Vukovar, Croatia",
    },
  ]);

  const [filtOglasi, setFiltOglasi] = useState([]);

  const [inputTextName, setInputTextName] = useState("");
  const [inputTextCategory, setInputTextCategory] = useState("");
  const [inputTextPrice, setInputTextPrice] = useState("");
  const [inputTextPhotoURL, setInputTextPhotoURL] = useState("");
  const [inputAbout, setInputAbout] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputEngine, setInputEngine] = useState("");
  const [inputTransmission, setInputTransmission] = useState("");

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
                  inputYear={inputYear}
                  setInputYear={setInputYear}
                  inputAbout={inputAbout}
                  setInputAbout={setInputAbout}
                  inputLocation={inputLocation}
                  setInputLocation={setInputLocation}
                  inputEngine={inputEngine}
                  setInputEngine={setInputEngine}
                  inputTransmission={inputTransmission}
                  setInputTransmission={setInputTransmission}
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
