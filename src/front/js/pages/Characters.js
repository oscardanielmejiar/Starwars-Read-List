import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import propTypes from "prop-types";
import { CardItem } from "./CardItem";

export const Characters = () => {
    const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2 className="text-start">Characters</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <CardItem title="CP3-O" item1="Gender:" item2="Eye Color:" item3="Hair Color:"/>
        <CardItem title="Luke" item1="Gender:" item2="Eye Color:" item3="Hair Color:"/>
        <CardItem title="Chewbacca" item1="Gender:" item2="Eye Color:" item3="Hair Color:"/>
        
      </div>
    </div>
  );
};
