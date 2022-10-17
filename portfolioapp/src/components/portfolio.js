import React from "react";
// import Project1 from "../image/nourrir.png"
// import Project2 from "../image/Mockupsss.png"
// import Project3 from "../image/ferrari.png"

const ShowCase = () => {
    // list of items in each box
    const prevWorks = [
        {
            src: "../image/nourrir.png",
            title : "DRINK NOURRIR",
            subtitle : "BUSINESS/E-COMMERCE",
            description : "Drink Nourrir is an e-commerce website for food/drinks. It has a certified payment system for easy checkout, the website is user-friendly.",
            link : "https://drinknourrir.com/"
        },{
            src: "../image/mockupsss.png",
            title : "TEAM APP",
            subtitle : "BLOG",
            description : "Drink Nourrir is an e-commerce website for food/drinks. It has a certified payment system for easy checkout, the website is user-friendly.",
            link : "https://akindolanis-team-app.webflow.io/"
        },{
            src: "../image/ferrari.png",
            title : "TRAINING STUDIO",
            subtitle : "TRAINING STUDIO",
            description : "Training studio is a landing page for a gym studio. It has a section for the studio schedule,contact form and call to action.",
            link : "https://feranmi-training-studio.netlify.app/"
        },
    ]

    //list of prevWorks
    const worksList = prevWorks.map((item) => {
        return (
            <div className="project-box" key={item.id}>
                    <img src={item.src} alt="drink-nourrir"/>
                    <div className="desc">
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.description} </p><br/>
                        <a href={item.link} target="_blank" rel="noreferrer"><button>VISIT WEBSITE</button></a>
                    </div>
                </div>
        )
    })
    return(
        <section className="portfolio" id="portfolio">
            <div className="portfolio-head">
                <h2>THE SHOWCASE</h2>
            </div>
            <div className="project">
                {worksList}
            </div>
        </section>
    )
}

export default ShowCase;