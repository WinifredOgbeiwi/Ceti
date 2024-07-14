import React from 'react'
import { getHeroWorkItems } from '../../utils';

const HowItWorks = ({t}) => {
  
  const items = getHeroWorkItems(t);
  return (
    <section className='padding_top'>
      <div className='m-auto text-center '>
      <h2 className=" text-3xl sm:text-[3.25rem] font-raleway font-bold">
        {t("home.howitworks.heading")}
      </h2>
      <p className="text-base sm:text-2xl mb-10 text-secondary mt-3">
        {t("home.howitworks.paragraph")}
      </p>  
      </div>
      
      <div className='grid grid-cols-3'>
      
{
  items.map(({heading, no, paragraph, icon:Icon})=>(
    <div>
      {paragraph}
    </div>
  ))
}
        </div>

  
    </section>
  )
}

export default HowItWorks