import React from 'react'

const Cta2 = ({ t }) => {
  return (
    <section className='px-5 sm:px-[72px] mt-40 bg-white'>
      <div className='flex flex-col md:flex-row  gap-4 justify-between md:items-center border-[1px] border-black p-6 sm:p-14'>
        <div>
          <h2 className=" text-3xl sm:text-5xl font-raleway font-bold">
            {t("home.cta2.heading")}
          </h2>
          <p className="text-lg sm:text-2xl mt-3 text-secondary">
            {t("home.cta2.paragraph")}
          </p>
        </div>
        <div className=' w-full md:w-96 '>
          <p className='sm:text-lg'>{t("home.cta2.content")}</p>
          <button className='bg-main text-white px-5 py-3 mt-6'>{t("home.cta2.button")}</button>
        </div>
      </div>
    </section>
  )
}

export default Cta2