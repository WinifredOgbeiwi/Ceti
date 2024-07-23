import React from 'react'
import { getExpertisesItems, IMAGES, ROUTES } from '../../utils'
import { Link } from 'react-router-dom'

const Expertise = ({ t }) => {
    const listItems = getExpertisesItems(t)
    return (
        <section
            //   data-aos="fade-down" 
            className="px-5 sm:px-[72px] mt-32 relative">
            <div className='flex flex-col lg:flex-row  gap-6'>
                <div className='w-full lg:w-1/2'>
                    <div className='bg-main relative p-10 lg:py-20 lg:pl-20 h-full'>
                        <img src={IMAGES.Expertise} alt="" className='w-full lg:absolute' />
                    </div>
                </div>

                <div className='w-full lg:w-1/2 lg:p-12 lg:ml-20 flex flex-col justify-center'>
                    <h2 className='text-3xl sm:text-5xl font-raleway font-bold'>{t('about.expertise.heading')}</h2>
                    <h4 className='text-2xl   mt-2 mb-5 font-raleway font-medium'>{t('about.expertise.subheading')}</h4>
                    <p className='w-full mt-3'>{t('about.expertise.paragraph')}</p>

                    <div className='mt-4'>
                        {listItems.map((item) => (
                            <div key={item.id} className='flex items-center gap-4 mt-5 border-b-[1px] border-secondary pb-7 '>
                                <img src={item.img} alt="" />
                                <div>
                                    <h4>{item.heading}</h4>
                                    <p>{item.paragraph}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <Link to={ROUTES.services} className="hover whitespace-nowrap w-fit bg-main py-4 px-5 mt-7 text-white">
                        {t("cta.services")}
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Expertise