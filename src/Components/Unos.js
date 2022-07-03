import React from "react";

const Unos = ({ gumb, setGumb }) => {
  const buttonHandler = () => {
    console.log("pressed");
    setGumb(true); // it will be hidden - ZAKEJ VELI DA OVO NIJE FUNKCIJAAA
    // setGumb("true");
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={buttonHandler}
          className={gumb ? "hidden" : ""}
        >
          DODAJ OGLAS
        </button>
      </div>
      <div>
        <input type="text" className={gumb ? "" : "hidden"} />
      </div>
    </div>
  );
};

export default Unos;
