import React from 'react'
import Form from './Form'
import SideInfo from './SideInfo'

const Content = ({ t }) => {
  return (
    <section data-aos="fade-down" className='px-5 sm:px-[72px] padding_top'>
      <h2 className='text-3xl sm:text-5xl font-raleway font-bold'>{t('contact.body.heading')}</h2>

      <p className='w-full text-base sm:text-2xl text-secondary font-medium mt-3'>{t('contact.body.paragraph')}</p>

      <div className='flex flex-col md:flex-row md:items-center gap-6'>
        <Form t={t} />
        <SideInfo t={t} />
      </div>
    </section>
  )
}

export default Content