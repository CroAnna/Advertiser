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
}) => {
  const buttonHandler = () => {
    setGumb(!gumb); // it will toggle
  };

  const submitHandler = (e) => {
    if (
      inputTextName !== "" &&
      inputTextCategory !== "" &&
      inputTextPrice !== "" &&
      inputTextPhotoURL !== ""
    ) {
      e.preventDefault();
      console.log("sve ispunjeno --> kliknut submit");

      setOglase([
        ...oglasi,
        {
          name: inputTextName,
          category: inputTextCategory,
          price: inputTextPrice,
          photoUrl: inputTextPhotoURL,
          year: inputYear,
        },
      ]);
      // clears input values:
      setInputTextName("");
      setInputTextCategory("");
      setInputTextPrice("");
      setInputTextPhotoURL("");
      setInputYear("");
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
            className={
              inputTextCategory === "Car" || inputTextCategory === "Bike"
                ? ""
                : "hidden"
            }
            type="text"
            placeholder="Year of manufacture: "
            id="yearManufacture"
            onChange={yearHandler}
            value={inputYear}
          />

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
