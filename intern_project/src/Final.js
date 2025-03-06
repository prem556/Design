import React from "react";

import Header from "./page1/header"; // If needed
import Page1Final from "./page1/Page1Final";
import ServiceSlide from "./page2/ServiceSlide";
import CustomSection from "./page3/leading";
import LogoBanner from "./page4/LogoBanner";
import Customer from "./page5/Customer";
import Recent1 from "./page6/Recent1"
import GreatSoftware from "./page7/GreatSoftware";
import OurDesign from "./page8/Our design";

// import ServicesSlider from "./page2/Service";

function Final() {
  return (
    <>
     <Page1Final/>
     <ServiceSlide/>
     <CustomSection/>
     <LogoBanner/>
     <Customer/>
     <Recent1/>
    <GreatSoftware/>
    <OurDesign/>
     
    </>
  );
}

export default Final;
