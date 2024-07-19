import React from 'react'
import { IMAGES } from '../../utils'

const Cta = ({t}) => {
  return (
      <section 
    //   data-aos="fade-down" 
      className=' padding_top'>
          <div
              style={{ backgroundImage: `url(${IMAGES.ServiceCtaBg})`, backgroundPosition: "center" }}
              className=" bg-no-repeat w-full h-[500px] bg-cover relative pb-12"
          >
              <img src={IMAGES.ServiceCtaGradient} alt="" className="w-full h-full absolute inset-0" /> 
              <div className='text-white relative z-50 flex flex-col justify-end h-full px-5 sm:px-[72px] '>
                  <h2 className=" text-3xl sm:text-[3.25rem] leading-[1] font-raleway font-bold">{t("services.cta.heading")}</h2>
                  <p className=" mt-3 sm:text-2x md:text-lg sm:w-3/4 lg:w-[45%] font-medium">
                      {t("services.cta.paragraph")}
                  </p>
                  <button className="bg-main w-fit px-5 py-4 my-6"> {t("cta.contact2")}</button>
              </div>
            </div>
    </section>
  )
}

export default Cta