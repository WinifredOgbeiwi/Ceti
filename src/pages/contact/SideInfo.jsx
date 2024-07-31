import React from 'react'
import { IMAGES } from '../../utils'

const SideInfo = ({ t }) => {
    return (
        <div className='flex flex-col md:flex-col items-center sm:flex-row gap-6 md:gap-0'>
            <div className='relative'>
                <img src={IMAGES.Emailbox} alt="" className='w-96 max-[640px]:w-full max-[640px]:h-36 max-[790px]:h-40' />
                <div className='absolute top-[45%] left-5 text-white'>
                    <h2 className='font-bold md:text-xl'>{t('contact.body.sideinfo.mail')}</h2>
                    <p className='md:text-lg'>office@cetigroup.pl</p>
                </div>
            </div>

            <div className='relative md:mt-16'>
                <img src={IMAGES.Callbox} alt="" className='w-96 max-[640px]:w-full max-[640px]:h-36 max-[790px]:h-40' />
                <div className='absolute top-[45%] left-5 text-white'>
                    <h2 className='font-bold md:text-xl'>{t('contact.body.sideinfo.call')}</h2>
                    <p className='md:text-lg'>+48 571 519 205</p>
                </div>
            </div>

            <div className='relative md:mt-16'>
                <img src={IMAGES.Locationbox} alt="" className='w-96 max-[640px]:w-full max-[640px]:h-36 max-[790px]:h-40' />
                <div className='absolute top-[45%] left-5 text-white'>
                    <h2 className='font-bold md:text-xl'>{t('contact.body.sideinfo.locate')}</h2>
                    <p className='md:text-lg'>{t('common.address')}</p>
                </div>
            </div>

        </div>
    )
}

export default SideInfo