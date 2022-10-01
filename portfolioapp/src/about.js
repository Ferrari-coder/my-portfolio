import React from "react";
import "./style.css";
import MyPic from "./MyImage.jpg";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="flexy">
        <div className="text">
          <h1>BIO</h1>
          <p id="first-p">
            I am a very creative website designer and developer with vast
            experience in web design and development. I am very proficient in
            HTML5, CSS3, JavaScript, ReactJs and also CMS(WordPress, Shopify,
            WIX, Webflow, WooCommerce etc.).
          </p>
          <p id="second-p">
            {" "}
            I am An hard working, a self-driven professional who thrives on
            creativity and problem-solving.
          </p>
        </div>
        <div className="picture">
          <img src={MyPic} alt="mypicture" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
