import React, { useEffect } from 'react'
import Hero from '../pages/managment/Hero'
import Team from '../pages/managment/Team'

const Management = ({t}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>

   <Hero t={t}/>
   <Team t ={t}/>
   </>
  )
}

export default Management