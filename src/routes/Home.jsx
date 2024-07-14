import React from "react";
import Hero from "../pages/home/Hero";
import WhatWeDo from "../pages/home/WhatWeDo";
import Cta from "../pages/home/Cta";
import AboutUs from "../pages/home/AboutUs";
import HowItWorks from "../pages/home/HowItWorks";

const Home = ({ t }) => {
  return (
  <>
  <Hero t={t}/>
  <WhatWeDo t={t}/>
  <Cta t={t}/>
  <AboutUs t={t}/>
      <HowItWorks t={t} />
  </>
  );
};

export default Home;
