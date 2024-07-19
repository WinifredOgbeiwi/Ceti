import React from 'react'
import HeroPage from '../constant/HeroPages'
import { IMAGES } from '../utils'
import WhatWedo from '../pages/services/WhatWedo'
import HowWeHelp from '../pages/services/HowWeHelp'
import Cta from '../pages/services/Cta'
import WhyChooseUs from '../pages/services/WhyChooseUs'

const Services = ({ t }) => {

  return (
    <>
      <HeroPage backgroundImage={IMAGES.Servicebg} heading={t("services.herosection.heading")} subheading={t("services.herosection.subheading")} />
      <WhatWedo t={t}/>
      <HowWeHelp t={t}/>
      <Cta t={t}/>
      <WhyChooseUs t={t}/>
    </>
  )
}

export default Services