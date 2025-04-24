import React from "react";
import { Link } from "react-router-dom"
import Navbar from "./Navbar1";
import HeroSection from "./HeroSection1";
import FeaturesSection from "./FeaturesSection1";
import HowItWorksSection from "./howItWorksSection";
import AppScreensSection from "./AppScreenSections";
import GetStartedSection from "./GetStartedSection1";
import Footer from "./Footer1";
import "../animation.css"


export default function Land(){
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppScreensSection />
     
      <GetStartedSection />
      <Footer />
    </div>
  );
  



  
};


