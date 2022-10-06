import React from "react";
import Project1 from "./nourrir.png"
import Project2 from "./Mockupsss.png"
import Project3 from "./ferrari.png"

const ShowCase = () => {
    return(
        <section className="portfolio">
            <div className="portfolio-head">
                <h2>THE SHOWCASE</h2>
            </div>
            <div className="project">
                <div className="project-box">
                    <img src={Project1} alt="drink-nourrir"/>
                    <div className="desc">
                        <h3>DRINK NOURRIR</h3>
                        <h4>BUSINESS/E-COMMERCE</h4>
                        <p>Drink Nourrir is an e-commerce website for food/drinks. It has a certified payment system for easy checkout, the website is user-friendly. </p><br/>
                        <a href="https://drinknourrir.com/" target="_blank" rel="noreferrer"><button>VISIT WEBSITE</button></a>
                    </div>
                </div>
                <div className="project-box">
                    <img src={Project2} alt="team-app"/>
                    <div className="desc">
                        <h3>TEAM APP</h3>
                        <h4>BLOG</h4>
                        <p>Drink Nourrir is an e-commerce website for food/drinks. It has a certified payment system for easy checkout, the website is user-friendly. </p><br/>
                        <a href="https://akindolanis-team-app.webflow.io/" target="_blank" rel="noreferrer"><button>VISIT WEBSITE</button></a>
                    </div>
                </div>
                <div className="project-box">
                    <img src={Project3} alt="training-studio"/>
                    <div className="desc">
                        <h3>TRAINING STUDIO</h3>
                        <h4>LANDING PAGE</h4>
                        <p>Training studio is a landing page for a gym studio. It has a section for the studio schedule,contact form and call to action. </p><br/>
                        <a href="https://feranmi-training-studio.netlify.app/" target="_blank" rel="noreferrer"><button>VISIT WEBSITE</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCase;