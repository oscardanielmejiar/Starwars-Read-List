import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import propTypes from "prop-types";

export const CardItem = (props) => {
  const { store, actions } = useContext(Context);

     return (
      <div className="col">
        <div className="card h-100">
          <img src={rigoImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title || "Title"}</h5>
            <p className="card-text">
              {props.item1 || ""}<br />
              {props.item2 || ""}<br />
              {props.item3 || ""}
            </p>
            <a href="#" className="btn btn-primary">
              Learn More!
            </a>
          </div>
        </div>
      </div>
    );
  };
