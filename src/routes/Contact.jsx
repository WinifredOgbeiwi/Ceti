import React from 'react'
import HeroPage from '../constant/HeroPages'
import { IMAGES } from '../utils'
import Content from '../pages/contact/Content'
const Contact = ({t}) => {
  return (
   <>
      <HeroPage backgroundImage={IMAGES.ContactUsBg} heading={t("contact.herosection.heading")} subheading={t("contact.herosection.subheading")} />
      <Content t={t}/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7756743692935!2d21.016226975686628!3d52.22929325771323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf13d90aa17%3A0x539970ce0f36cda2!2s%C5%BBurawia%206%2F12%2C%2000-503%20Warszawa!5e0!3m2!1sen!2spl!4v1721650779661!5m2!1sen!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[30rem] mt-10'></iframe>
   </>
  )
}

export default Contact