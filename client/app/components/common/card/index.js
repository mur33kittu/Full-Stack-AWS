import React from "react";
import "./card.scss";

function Card(props) {
  return (
    <div className="card">
      <img src={props.path + "/" + props.name} alt={props.name} />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
      </div>
    </div>
  );
}

export default Card;
