import React from 'react'
import { getServiceItems } from '../../utils'

const WhatWedo = ({ t }) => {
  const boxItems = getServiceItems(t)

  return (
    <section data-aos="fade-down" className='px-5 sm:px-[72px] padding_top'>
      <h2  className=" text-3xl sm:text-[3.25rem] font-raleway font-bold">
        {t("common.whatwedo.title")}
      </h2>
      <p className="text-base sm:text-2xl mb-10 text-secondary mt-3">
        {t("common.whatwedo.paragraph")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        boxItems.map((item) => (
          <div key={item.id} data-aos="fade-down" className=" border-2 border-secondary text-center">
            <img src={item.img} alt="" className=" w-full" />
            <div className="mt-6 mb-9 mx-4 min-[1100px]:mx-9">
              <h4 className="mb-3 font-bold text-xl sm:text-2xl">
                {item.heading}
              </h4>
              <p className="text-base sm:text-lg">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))
      }
</div>
    </section>
  )
}

export default WhatWedo