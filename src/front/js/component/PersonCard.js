import React, { useContext } from "react";
import { Context } from "../store/appContext";
import peoplePic from "../../img/people-pic.jpg";
import "../../styles/home.css";
import propTypes from "prop-types";

export const PersonCard = (props) => {
  const { store, actions } = useContext(Context);


  return (
    <div className="card">
      <img src={peoplePic} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Gender: {props.gender}
          <br />
          Hair Color: {props.hairColor}
          <br />
          Eye Color: {props.eyeColor}
          <br />
          Home World: {props.homeWorld}
        </p>

      </div>
    </div>
  );
};

PersonCard.propTypes = {
  gender: propTypes.string,
  hairColor: propTypes.string,
  eyeColor: propTypes.string,
  homeWorld: propTypes.string,
};
