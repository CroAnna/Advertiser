import React from "react";
import Oglas from "./Oglas";

// unos oglasa preko neke input forme
// odabir kategorije oglasa - dropdown (motori, kompjuteri i sl)
// filtracija pomocu kategorije
// prikaz oglasa (slika i detalji) - probaj kad se klikne na nju da se otvori onak ko prozor koji je inace sakriven preko cijele stranice
// horizontalni scroll oglasa

const Oglasi = ({ oglasi }) => {
  return (
    <div>
      <div className="najnovijiOglasi">
        <div>
          <h2>Najnoviji oglasi</h2>
          <select name="filtration" id="filtration" className="dropdown">
            <option value="all">All</option>
            <option value="animals">Animals</option>
            <option value="cars">Cars</option>
            <option value="bikes">Bikes</option>
          </select>
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
