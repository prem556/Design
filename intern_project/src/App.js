import React from "react";
import "./App.css";
import Header from "./page1/header"; // If needed
import Page1Final from "./page1/Page1Final";
import ServiceSlide from "./page2/ServiceSlide";
import CustomSection from "./page3/leading";
import LogoBanner from "./page4/LogoBanner";
// import ServicesSlider from "./page2/Service";

function App() {
  return (
    <>
      {/* <Header /> Include only if needed */}
      <Page1Final />
      <ServiceSlide/>
      <CustomSection/>
      <LogoBanner/>
      {/* <ServicesSlider /> */}
    </>
  );
}

export default App;
