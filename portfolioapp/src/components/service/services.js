import React from "react";
import ServiceBox from "./service-box";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-head">
        <h5>MY SERVICES</h5>
        <h1>What I Do</h1>
      </div>
      <div className="service-box">
        <ServiceBox icon="fa-solid fa-laptop" text="WEB DESIGN" />
        <ServiceBox icon="fa-solid fa-code" text="WEB DEVELOPMENT" />
        <ServiceBox icon="fa-solid fa-people-group" text="DIGITAL MARKETING" />
      </div>
    </section>
  );
};

export default Services;
