import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const CardsPage = () => {
  const { store, actions } = useContext(Context);

  const CardList =() =>{
    return (      <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
<div className="card h-100">
  <img src={rigoImageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      This is a longer card with supporting text below as a natural
      lead-in to additional content. This content is a little bit
      longer.
    </p>
    <a href="#" className="btn btn-primary">
      Lear More!
    </a>
  </div>
</div>
</div>
</div>
    )
  }

  return (
    <div>
      <h2 className="text-start">Characters</h2>
    <CardList />
 </div>
  );
};
