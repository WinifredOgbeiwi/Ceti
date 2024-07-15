import React from 'react'
import { IMAGES, ROUTES } from '../utils'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'

const Footer = ({ t }) => {
  return (
    <footer className='bg-black text-white mt-10 px-5 sm:px-[72px]'>
      <ul className='flex space-x-8 mt-8 text-lg'>
        <li><Link to={ROUTES.home}>{t('layout.nav.home')}</Link></li>
        <li><Link to={ROUTES.services}>{t('layout.nav.services')}</Link></li>
        <li><Link to={ROUTES.about}>{t('layout.nav.about')}</Link></li>

        <li><Link to={ROUTES.contact}>{t('layout.nav.contact')}</Link></li>
      </ul>
      <div className='h-[4px] w-full bg-secondary mt-6 mb-10'></div>

      <div className='flex lg:space-x-32 space-y-10 lg:space-y-0 flex-col lg:flex-row items-center'>
        <div className='flex w-full lg:w-2/3 space-x-10'>
          <Link to={ROUTES.home} className=''>
            <img src={IMAGES.LogoWhite} alt="" className='w-[300px]' />
          </Link>
          <p className='text-sm sm:text-base'>{t('layout.footer.paragraph')}</p>
        </div>

        <div className='w-full lg:w-1/3'>
          <h4 className=''>{t('layout.footer.heading')}</h4>
          <div className='flex gap-4 my-4 items-center'>

            <div className='h-6 w-6 flex justify-center items-center bg-white rounded-full text-main'> <IoLocationOutline className='text-lg font-bold m-auto' /></div>
            <p className='text-sm sm:text-base'>{t('layout.footer.address')}</p>
          </div>

          <div className='flex gap-4 items-center'>
            <div className='h-6 w-6  flex justify-center items-center bg-white rounded-full text-main'> <MdOutlineMailOutline className='text-lg m-auto' /></div>

            <p className='text-sm sm:text-base'>office@ceti.com</p>
          </div>

        </div>
      </div>
      <div className='h-[4px] w-full bg-secondary mt-10 mb-8'></div>
      <div className='flex flex-col-reverse gap-5 md:0 md:flex-row justify-between'>
        <h3 className='mb-12 text-sm sm:text-base' style={{ translate: "no" }}>CETI &copy; 2024.{t('layout.footer.foot')} </h3>
        <div className='flex gap-2'>
          <Link className='text-sm sm:text-base'>{t('layout.footer.link1')}</Link>
          <p className='text-sm sm:text-base'>|</p>
          <Link className='text-sm sm:text-base'>{t('layout.footer.link2')}</Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer