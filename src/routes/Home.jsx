import React, { useEffect } from "react";
import Hero from "../pages/home/Hero";
import WhatWeDo from "../pages/home/WhatWeDo";
import Cta from "../pages/home/Cta";
import AboutUs from "../pages/home/AboutUs";
import HowItWorks from "../pages/home/HowItWorks";
import Cta2 from "../pages/home/Cta2";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = ({ t }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
