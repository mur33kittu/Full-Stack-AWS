import React from "react";
import "./crumbs.scss";

function BreadCrums(props) {
  return (
    <div className={`bread ${props.crumbData.alert}`}>
      <span className="crumb">{props.crumbData.message}</span>
    </div>
  );
}

export default BreadCrums;
