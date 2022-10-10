import React from "react";

const Services = () => {
  return (
    <section className="services">
      <div className="services-head">
        <h5>MY SERVICES</h5>
        <h1>What I Do</h1>
      </div>
      <div className="service-box">
        <div className="container-box">
          <i class="fa-solid fa-laptop"></i>
          <h3>WEB DESIGN</h3>
        </div>
        <div className="container-box">
          <i class="fa-solid fa-code"></i>
          <h3>WEB DEVELOPMENT</h3>
        </div>
        <div className="container-box">
        <i class="fa-solid fa-people-group"></i>
          <h3>DIGITAL MARKETING</h3>
        </div>
      </div>
    </section>
  );
};


export default Services;