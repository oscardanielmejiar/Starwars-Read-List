import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PropTypes from "prop-types";


export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);

     return (
     
        <div className="card">
          <img src={rigoImageUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.title || "Title"}</h5>
            <p className="card-text">
            Climate: {props.climate}<br />
            Terrain: {props.terrain}<br />
            Population: {props.population}<br />       
              </p>
            <a href="#" className="btn btn-primary">
              Learn More!
            </a>
          </div>
        </div>
    
    );
  };

  PlanetCard.propTypes={
    climate: PropTypes.string,
    terrain: PropTypes.string,
    population: PropTypes.string
  }