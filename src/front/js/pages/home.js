import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./Characters";
import { Planets } from "./Planets";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
    <Characters /><br />
    <Planets />
    </div>
  );
};
