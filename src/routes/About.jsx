import React from 'react'
import HeroPage from '../constant/HeroPages'
import Purpose from '../pages/about/Purpose'
import Value from '../pages/about/Value'
import Sustainability from '../pages/about/Sustainability'
import Global from '../pages/about/Global'
import Expertise from '../pages/about/Expertise'
import Explore from '../pages/about/Explore'
import Cta from '../pages/about/Cta'
import { IMAGES } from '../utils'

const About = ({ t }) => {
  return (
    <>
      <HeroPage backgroundImage={IMAGES.Aboutbg} heading={t("about.herosection.heading")} subheading={t("about.herosection.subheading")} />
      <Purpose t={t} />
      <Value t={t} />
      <Sustainability t={t} />
      <Global t={t} />
      <Expertise t={t} />
      <Explore t={t} />
      <Cta t={t}/>
    </>
  )
}

export default About