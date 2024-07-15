import React from 'react'

const Cta2 = ({ t }) => {
  return (
    <section className='px-5 sm:px-[72px] mt-40 bg-white'>
      <div className='flex justify-between items-center border-[1px] border-black p-14'>
        <div>
          <h2 className=" text-3xl sm:text-[3.25rem] font-raleway font-bold">
            {t("home.cta2.heading")}
          </h2>
          <p className="text-base sm:text-2xl mt-6 text-secondary">
            {t("home.cta2.paragraph")}
          </p>
        </div>
        <div className=' w-96 '>
          <p className='text-lg'>{t("home.cta2.content")}</p>
          <button className='bg-main text-white px-5 py-3 mt-6'>{t("home.cta2.button")}</button>
        </div>
      </div>
    </section>
  )
}

export default Cta2