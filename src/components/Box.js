import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <div className="sub-box">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Box;
