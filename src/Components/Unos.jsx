import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Unos = ({
  gumb,
  setGumb,
  inputTextName,
  setInputTextName,
  oglasi,
  setOglase,
  inputTextCategory,
  setInputTextCategory,
  inputTextPrice,
  setInputTextPrice,
  inputTextPhotoURL,
  setInputTextPhotoURL,
  inputYear,
  setInputYear,
  setInputAbout,
  inputAbout,
  inputLocation,
  setInputLocation,
  inputEngine,
  setInputEngine,
  inputTransmission,
  setInputTransmission,
}) => {
  const buttonHandler = () => {
    setGumb(!gumb); // it will toggle
  };

  const submitHandler = (e) => {
    if (
      inputTextName !== "" &&
      inputTextCategory !== "" &&
      inputTextPrice !== "" &&
      inputTextPhotoURL !== "" &&
      inputLocation !== ""
    ) {
      e.preventDefault();
      setOglase([
        ...oglasi,
        {
          name: inputTextName,
          category: inputTextCategory,
          price: inputTextPrice,
          photoUrl: inputTextPhotoURL,
          year: inputYear,
          about: inputAbout,
          location: inputLocation,
          transmission: inputTransmission,
          engine: inputEngine,
        },
      ]);
      // clears input values:
      setInputTextName("");
      setInputTextCategory("");
      setInputTextPrice("");
      setInputTextPhotoURL("");
      setInputYear("");
      setInputAbout("");
      setInputLocation("");
      setInputEngine("");
      setInputTransmission("");
    } else {
      alert("Please fill all input fields.");
    }
  };

  // jel moguce ove preko 1 fje napravit?
  const nameHandler = (e) => {
    setInputTextName(e.target.value);
  };
  const categoryHandler = (e) => {
    setInputTextCategory(e.target.value);
  };
  const priceHandler = (e) => {
    setInputTextPrice(e.target.value);
  };
  const photoURLHandler = (e) => {
    setInputTextPhotoURL(e.target.value);
  };
  const yearHandler = (e) => {
    setInputYear(e.target.value);
  };
  const aboutHandler = (e) => {
    setInputAbout(e.target.value);
  };
  const locationHandler = (e) => {
    setInputLocation(e.target.value);
  };
  const engineHandler = (e) => {
    setInputEngine(e.target.value);
  };
  const transmissionHandler = (e) => {
    setInputTransmission(e.target.value);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={buttonHandler}
          className={gumb ? "hidden" : "btn-middle"}
        >
          ADD NEW AD
        </button>
      </div>
      <div className={gumb ? "" : "hidden"}>
        <form>
          <h2 className="new-title">New ad information: </h2>

          <input
            type="text"
            placeholder="Name *"
            id="inputName"
            onChange={nameHandler}
            value={inputTextName}
            // value is used to connect useState so it's empty after submitting
          />
          <select
            name="categories"
            id="categories"
            onChange={categoryHandler}
            value={inputTextCategory}
          >
            <option hidden value="">
              Category *
            </option>
            <option value="Animal">Animal</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
          </select>
          <input
            type="text"
            placeholder="Price *"
            id="inputPrice"
            onChange={priceHandler}
            value={inputTextPrice}
          />
          <input
            type="text"
            placeholder="Photo URL *"
            id="inputPhotoURL"
            onChange={photoURLHandler}
            value={inputTextPhotoURL}
          />
          <input
            type="text"
            placeholder="Location *"
            id="inputLocation"
            onChange={locationHandler}
            value={inputLocation}
          />
          <input
            type="text"
            placeholder="About"
            id="inputAbout"
            onChange={aboutHandler}
            value={inputAbout}
          />

          <input
            className={
              inputTextCategory === "Car" || inputTextCategory === "Bike"
                ? ""
                : "hidden"
            }
            type="text"
            placeholder="Year of manufacture "
            id="yearManufacture"
            onChange={yearHandler}
            value={inputYear}
          />
          <input
            className={
              inputTextCategory === "Car" || inputTextCategory === "Bike"
                ? ""
                : "hidden"
            }
            type="text"
            placeholder="Engine type "
            id="inputEngine"
            onChange={engineHandler}
            value={inputEngine}
          />
          <select
            className={
              inputTextCategory === "Car" || inputTextCategory === "Bike"
                ? ""
                : "hidden"
            }
            name="inputTransmission"
            id="inputTransmission"
            onChange={transmissionHandler}
            value={inputTransmission}
          >
            <option hidden value="">
              Transmission
            </option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>

          <div className="btns">
            <button type="button" className="cancelBtn" onClick={buttonHandler}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button onClick={submitHandler} type="button" className="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Unos;
