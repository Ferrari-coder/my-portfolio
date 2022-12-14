import React from "react";
import "../style.css"
import MyHeroIcon from "../image/heroimg.png"
import logo from "../image/mylogo.png"

// component for header
const Header = () => {
  return (
    <div className="hero-part" id="home">
        {/* everything that has to do with the nav */}
        <header className="header-area" id="home">
        <nav>
            {/* logo part */}
            <div className="logo">
            <a href="#home"><img src={logo} alt="mylogo" style={{width:"70px"}} id="logo"/></a>
            </div>
            {/* nav links */}
            <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact Me</a>
            </div>
            {/* social icons */}
            <div className="socials">
            <a href="https://twitter.com/ahm_tamilore" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/oluwaferanmi-aiyegbusi-0952b4229" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Ferrari-coder" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:oluwaferanmiaiyegbusi@gmail.com" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-envelope"></i>
            </a>
            </div>
        </nav>
        </header>
        {/* end of nav part */}
        {/* text in the hero part */}
        <div className="hero">
            <div className="hero-text">
            <h1>Build amazing <br/> websites with me</h1>
            <p id="p1">Hello, I am Aiyegbusi Oluwaferanmi, a web developer and designer.</p>
            <p>I am an hard working, a self-driven professional who thrives on creativity and problem-solving. I design create, user-friendly and responsive websites that help individuals and organizations increase their capacity for excellence.</p>
            <button className="online-cv">ONLINE CV(DOCX)</button>
            <button className="download-cv">DOWNLOAD CV(PDF)</button>
            </div>
            <div className="hero-img">
                <img src={MyHeroIcon} alt="heroimg" style={{width : "500px"}}/>
            </div>
        </div>

    </div>
  );
};

export default Header;
