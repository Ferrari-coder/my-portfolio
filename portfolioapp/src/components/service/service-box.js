import React from "react";

const ServiceBox = (props) => {
  return (
      <div className="container-box">
        <i class={props.icon}></i>
        <h3>{props.text}</h3>
      </div>
  );
};

export default ServiceBox;