import React from "react";

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
}) => {
  const buttonHandler = () => {
    setGumb(true); // it will be hidden
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("kliknut submit");

    setOglase([
      ...oglasi,
      {
        name: inputTextName,
        category: inputTextCategory,
        price: inputTextPrice,
        photoUrl: inputTextPhotoURL,
      },
    ]);
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

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={buttonHandler}
          className={gumb ? "hidden" : "btn-middle"}
        >
          DODAJ OGLAS
        </button>
      </div>
      <div className={gumb ? "" : "hidden"}>
        <form>
          <h2 className="new-title">Novi oglas </h2>
          <input
            type="text"
            placeholder="Name"
            id="inputName"
            onChange={nameHandler}
          />
          <select name="categories" id="categories" onChange={categoryHandler}>
            <option hidden value="">
              Category
            </option>
            <option value="All">All</option>
            <option value="Animal">Animal</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
          </select>

          <input
            type="text"
            placeholder="Price"
            id="inputPrice"
            onChange={priceHandler}
          />

          <input
            type="text"
            placeholder="Photo URL"
            id="inputPhotoURL"
            onChange={photoURLHandler}
          />
          <div className="btns">
            <button type="reset" className="cancelBtn">
              Cancel
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
