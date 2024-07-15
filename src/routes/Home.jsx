import React from "react";
import Hero from "../pages/home/Hero";
import WhatWeDo from "../pages/home/WhatWeDo";
import Cta from "../pages/home/Cta";
import AboutUs from "../pages/home/AboutUs";
import HowItWorks from "../pages/home/HowItWorks";
import Cta2 from "../pages/home/Cta2";

const Home = ({ t }) => {
  return (
    <>
      <Hero t={t} />
      <WhatWeDo t={t} />
      <Cta t={t} />
      <AboutUs t={t} />
      <HowItWorks t={t} />
      <Cta2 t={t} />
    </>
  );
};

export default Home;
