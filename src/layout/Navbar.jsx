import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LangSwitcher from '../constant/LangSwitcher'
import { IoMdMenu } from 'react-icons/io'
import { IMAGES, ROUTES } from '../utils'
import { FaTimes } from 'react-icons/fa'
import ScreenWidth from '../utils/ScreenWidth'

const Navbar = ({ t, setMobileView, mobileView }) => {
  const handlesClickedLink = () => {
    setMobileView(false)
  }
  const Width = ScreenWidth();

  return (
    <>

      {
         mobileView && (Width <=768) ? (
          <div data-aos="fade-down" className='p-5 h-screen bg-black block  text-white '>
            <div className='flex justify-between'>
              <Link onClick={handlesClickedLink} to={ROUTES.home}>
                <img src={IMAGES.LogoWhite} alt="" className='w-20' />
              </Link>

              <div className="text-3xl" onClick={() => setMobileView(!mobileView)}>
                <FaTimes />
              </div>
            </div>
            <ul data-aos="fade-down" className='flex flex-col justify-center items-center w-full text-3xl gap-7
            pt-10'>
              <li><Link onClick={handlesClickedLink} to={ROUTES.home}>{t('layout.nav.home')}</Link></li>
              <li><Link onClick={handlesClickedLink} to={ROUTES.services}>{t('layout.nav.services')}</Link></li>
              <li><Link onClick={handlesClickedLink} to={ROUTES.about}>{t('layout.nav.about')}</Link></li>

              <li><Link onClick={handlesClickedLink} to={ROUTES.contact}>{t('layout.nav.contact')}</Link></li>
              <LangSwitcher />
            </ul>
            
          </div>
        )
          :

          <nav className=' flex justify-between items-center bg-white px-5 sm:px-[72px] p-4 sm:py-6'>
            <Link to={ROUTES.home}>
              <img src={IMAGES.Logo} alt="" className='w-20' />
            </Link>


            <ul className='hidden md:flex space-x-8'>
              <li><Link to={ROUTES.home}>{t('layout.nav.home')}</Link></li>
              <li><Link to={ROUTES.services}>{t('layout.nav.services')}</Link></li>
              <li><Link to={ROUTES.about}>{t('layout.nav.about')}</Link></li>

              <li><Link to={ROUTES.contact}>{t('layout.nav.contact')}</Link></li>
            </ul>
            <div className='hidden md:block'>
<LangSwitcher />
            </div>
            
            <div className="block md:hidden text-3xl" onClick={() => setMobileView(!mobileView)}>
              {mobileView ? <FaTimes /> : <IoMdMenu />}

            </div>


          </nav>
      }
    </>

  )
}

export default Navbar