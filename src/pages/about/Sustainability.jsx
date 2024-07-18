import React from 'react'
import { IMAGES } from '../../utils'

const Sustainability = ({ t }) => {
    return (
        <section data-aos="fade-down" className="px-5 sm:px-[72px] padding_top  relative">
            <div className='flex gap-6'>
                <div className='w-1/2'>

                    <img src={IMAGES.HeroAbout2} alt="" className='w-full' />
                </div>
                <div className='w-1/2 '>
                    <h2 className='text-3xl sm:text-5xl border-main border-b-4 pb-3 w-fit font-raleway font-bold'>{t('about.sustainability.heading')}</h2>

                    <p className='w-full text-lg mt-16'>{t('about.sustainability.paragraph')}</p>
                </div>
               

            </div>


        </section>
    )
}

export default Sustainability