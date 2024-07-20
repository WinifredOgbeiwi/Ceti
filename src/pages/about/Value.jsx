import React from 'react'
import { IMAGES } from '../../utils'

const Value = ({ t }) => {
    return (
        <section data-aos="fade-down" className="px-5 sm:px-[72px] padding_top  relative">
            <div className='flex flex-col lg:flex-row gap-6'>
                <div className='lg:w-1/2 '>
                    <h2 className='text-3xl sm:text-5xl border-main border-b-4 pb-3 w-fit font-raleway font-bold'>{t('about.value.heading')}</h2>

                    <p className='w-full text-lg mt-8 lg:mt-16'>{t('about.value.paragraph')}</p>
                </div>
                <div className='lg:w-1/2'>

                    <img src={IMAGES.AboutValue} alt="" className='w-full' />
                </div>

            </div>


        </section>
    )
}

export default Value