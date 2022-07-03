import React from "react";

const Unos = ({ gumb, setGumb }) => {
  const buttonHandler = () => {
    setGumb(true); // it will be hidden
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
          <h2>Novi oglas </h2>
          <input type="text" placeholder="Name" id="inputName" />
          <input type="text" placeholder="Category" id="inputCategory" />
          <input type="number" placeholder="Price" id="inputPrice" />
          <input type="URL" placeholder="Photo URL" id="inputPhotoURL" />
          <div className="btns">
            <button type="reset" className="cancelBtn ">
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Unos;
