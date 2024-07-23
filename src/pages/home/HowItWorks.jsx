import React from 'react'
import { getHeroWorkItems } from '../../utils';

const HowItWorks = ({ t }) => {

  const items = getHeroWorkItems(t);
  return (
    <section className=' padding_top relative'>
      <div className='m-auto text-center '>
        <h2 className=" text-3xl sm:text-[3.25rem] font-raleway font-bold">
          {t("home.howitworks.heading")}
        </h2>
        <p className="text-base sm:text-2xl mb-10 text-secondary mt-3">
          {t("home.howitworks.paragraph")}
        </p>
      </div>

      <div data-aos="fade-down" className='grid mx-5 sm:mx-[72px] bg-white grid-cols-1 md:grid-cols-3 md:space-x-6 space-y-6 md:space-y-0 '>

        {
          items.map(({ id, heading, paragraph, icon: Icon }) => (
            <div key={id} className="flex ">
              <div className="bg-main border-2 border-main w-[10rem] ">
                <Icon className="m-auto h-full text-white text-3xl" />
              </div>

              <div className="  px-4 py-4 pb-8 border-r-2 border-b-2 border-t-2 border-black ">
              
                <div className="md:w-full sm:w-[70%]">
                  <h4 className="mt-10 mb-3 text-lg sm:text-2xl font-semibold">{heading}</h4>
                  <p className=" text-sm sm:text-lg">{paragraph}</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
      <div className="bg-black w-full h-48 absolute -z-50 md:top-[25rem] sm:top-[50rem] top-[40rem]"></div>

    </section>
  )
}

export default HowItWorks