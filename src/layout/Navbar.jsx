import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LangSwitcher from '../constant/LangSwitcher'
import { IoMdMenu } from 'react-icons/io'
import { IMAGES, ROUTES } from '../utils'

const Navbar = ({ t }) => {
const[mobileView, setMobileView] = useState(false);

  return (
    <>
      <nav className=' flex justify-between items-center bg-white px-5 sm:px-[72px] p-4 sm:py-6'>
       <Link to={ROUTES.home}>
            <img src={IMAGES.Logo} alt=""  className='w-20' />
       </Link>
   

        <ul className='hidden md:flex space-x-8'>
          <li><Link to={ROUTES.home}>{t('layout.nav.home')}</Link></li>
          <li><Link to={ROUTES.services}>{t('layout.nav.services')}</Link></li>
          <li><Link to={ROUTES.about}>{t('layout.nav.about')}</Link></li>

          <li><Link to={ROUTES.contact}>{t('layout.nav.contact')}</Link></li>
        </ul>
        <LangSwitcher />
        <IoMdMenu className="block md:hidden text-3xl"/>
      </nav>

    </>

  )
}

export default Navbar