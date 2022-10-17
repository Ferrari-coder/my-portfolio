import React from "react";
import Header from "./components/header";
import Services from "./components/service/services";
import ShowCase from "./components/portfolio";
import TestiMonials from "./components/TestiMonials/TestiMonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "../src/style.css"

function App() {
  return (
    <body>
      <Header />
      <Services />
      <ShowCase />
      <TestiMonials></TestiMonials>
      <Contact/>
      <Footer/>
    </body>
  );
}

export default App;
