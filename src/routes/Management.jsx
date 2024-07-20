import React from 'react'
import Hero from '../pages/managment/Hero'
import Team from '../pages/managment/Team'

const Management = ({t}) => {
  return (
   <>
   <Hero t={t}/>
   <Team t ={t}/>
   </>
  )
}

export default Management