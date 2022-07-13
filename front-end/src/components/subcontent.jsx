import React from "react";
import "./subcontent.scss";

const Subcontent = (props) => {
  return (
    <div className="sub-content">
      <div className="sub-title">
        <h3>{props.subtitle}</h3>
      </div>
      <div className="sub-text">
        <p>{props.subtext}</p>
      </div>
    </div>
  );
};

export default Subcontent;
