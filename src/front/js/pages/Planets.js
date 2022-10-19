import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import propTypes from "prop-types";
import { PlanetCard } from "../component/PlanetCard.js";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2 className="text-start">Planets</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {store.planets.map((planet, index) => (
          <div className="col-sm-6" key={index}>
            <PlanetCard
              title={planet.name}
              climate={planet.climate}
              terrain={planet.terrain}
              population={planet.population}
              index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
