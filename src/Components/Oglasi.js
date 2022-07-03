import React from "react";
import Oglas from "./Oglas";

// unos oglasa preko neke input forme - na gumb DODAJ OGLAS se otkrije taj dio stranice
// odabir kategorije oglasa - dropdown (motori, kompjuteri i sl)
// filtracija pomocu kategorije
// prikaz oglasa (slika i detalji) - probaj kad se klikne na nju da se otvori onak ko prozor koji je inace sakriven preko cijele stranice
// horizontalni scroll oglasa
// light/dark color theme

const Oglasi = ({ oglasi }) => {
  return (
    <div>
      <div className="najnovijiOglasi">
        <div>
          <select name="filtration" id="filtration">
            <option value="all">All</option>
            <option value="animals">Animals</option>
            <option value="cars">Cars</option>
            <option value="bikes">Bikes</option>
          </select>
          <h2>Najnoviji oglasi</h2>
        </div>

        <div className="oglasi">
          {oglasi.map((oglas) => (
            <Oglas
              name={oglas.name}
              category={oglas.category}
              price={oglas.price}
              key={oglas.name} // nez jel ovo oke
              photoUrl={oglas.photoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Oglasi;
