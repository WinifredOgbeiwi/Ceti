import React from 'react'
import Hero from '../pages/about/Hero'
import Purpose from '../pages/about/Purpose'
import Value from '../pages/about/Value'
import Sustainability from '../pages/about/Sustainability'
import Global from '../pages/about/Global'
import Expertise from '../pages/about/Expertise'

const About = ({ t }) => {
  return (
    <>
      <Hero t={t} />
      <Purpose t={t} />
      <Value t={t} />
      <Sustainability t={t}/>
      <Global t={t}/>
      <Expertise t={t}/>
    </>
  )
}

export default About