// import logo from './logo.svg';
import React from "react";
// import AboutMe from "./about";
import Header from "./header";
import Services from "./services";
import ShowCase from "./portfolio";
// import './App.css';
import TestiMonials from './components/TestiMonials/TestiMonials';




function App() {
  return(
    <body>
      <Header/>
      <Services/>
      <ShowCase/>
      <TestiMonials></TestiMonials>
    </body>
  )
}

export default App;
