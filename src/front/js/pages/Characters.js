import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import propTypes from "prop-types";
import { PersonCard } from "../component/PersonCard.js";

export const Characters = () => {
    const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h2 className="text-start">Characters</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {store.people.map((person, index) => {
						return (
							<div className="col-sm-6" key={index}>
                <PersonCard title={person.name} gender={person.gender}	hairColor={person.hair_color}
									eyeColor={person.eye_color} 	homeWorld={person.homeworld} 	index={index}
									/>
							</div>
						);
					})}
      </div>
    </div>
  );
};
