import React from "react";
import "./style.css"

// component for header
const Header = () => {
  return (
    <div className="hero-part">
        {/* everything that has to do with the nav */}
        <header className="header-area" id="home">
        <nav>
            {/* logo part */}
            <div className="logo">
            <a href="Header">Logo</a>
            </div>
            {/* nav links */}
            <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact Me</a>
            </div>
            {/* social icons */}
            <div className="socials">
            <a href="twitter.com">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="linkedin.com">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="github.com">
                <i className="fa-brands fa-github"></i>
            </a>
            </div>
        </nav>
        </header>
        {/* end of nav part */}
        {/* text in the hero part */}
        <div className="hero-text">
            <h1>Hello, I'm Aiyegbusi Oluwaferanmi</h1>
            <h4>A web designer and developer</h4>
            <p>An hard working, a self-driven professional who thrives on creativity and problem-solving.</p>
            <button className="online-cv">ONLINE CV(DOCX)</button>
            <button className="download-cv">DOWNLOAD CV(PDF)</button>
        </div>
    </div>
  );
};

export default Header;
