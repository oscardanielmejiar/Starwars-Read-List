import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import propTypes from "prop-types";
import { CardItem } from "./CardItem";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    
  return (
    <div className="container">
      <h2 className="text-start">Planets</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};
