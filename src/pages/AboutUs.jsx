import React from "react";
import NavBar from "../components/NavBar";
import { AboutSection, Services, AboutHero, SpecialFeatures } from "../components";
import Plans from "../components/Plans";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="w-full">
        <AboutHero />
        <SpecialFeatures />
        {/* About Us */}
        <AboutSection />
        {/* Services */}
        <Services />
        <Plans />

      </div>
    </>
  );
};

export default AboutUs;
