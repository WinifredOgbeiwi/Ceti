import React from 'react'
import { IMAGES } from '../../utils'

const Purpose = ({ t }) => {
    return (
        <section data-aos="fade-down" className="px-5 sm:px-[72px]  relative">
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-1/2 w-full'>
                <div className='bg-white pt-20 lg:pb-20 '>
                      <img src={IMAGES.AboutPurpose} alt="" className='w-full'/>
                </div>
                  
                </div>
                <div className='lg:w-1/2 w-full bg-secondary text-white p-12 flex flex-col justify-center'>
                    <h2 className='text-3xl sm:text-5xl font-raleway font-bold'>{t('about.purpose.heading')}</h2>
                    <h4 className='text-2xl   mt-2 mb-5 font-raleway font-medium'>{t('about.purpose.subheading')}</h4>
                    <p className='w-full mt-3'>{t('about.purpose.paragraph')}</p>
                </div>
            </div>

        </section>
    )
}

export default Purpose