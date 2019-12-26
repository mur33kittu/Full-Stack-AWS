import React from "react";
import "./card.scss";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
