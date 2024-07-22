import React from 'react'
import { IMAGES } from '../../utils'

const SideInfo = ({ t }) => {
    return (
        <div className='flex flex-col md:flex-col items-center sm:flex-row gap-6 md:gap-0'>
            <div className='relative'>
                <img src={IMAGES.Emailbox} alt="" />
                <div className='absolute top-[45%] left-5 text-white'>
                    <h2 className='font-bold md:text-xl'>{t('contact.body.sideinfo.mail')}</h2>
                    <p className='md:text-lg'>office@ceti.com</p>
                </div>
            </div>

            <div className='relative md:mt-16'>
                <img src={IMAGES.Callbox} alt="" />
                <div className='absolute top-[45%] left-5 text-white'>
                    <h2 className='font-bold md:text-xl'>{t('contact.body.sideinfo.call')}</h2>
                    <p className='md:text-lg'>+42983778888979</p>
                </div>
            </div>

            <div className='relative md:mt-16'>
                <img src={IMAGES.Locationbox} alt="" />
                <div className='absolute top-[45%] left-5 text-white'>
                    <h2 className='font-bold md:text-xl'>{t('contact.body.sideinfo.locate')}</h2>
                    <p className='md:text-lg'>{t('layout.footer.address')}</p>
                </div>
            </div>

        </div>
    )
}

export default SideInfo