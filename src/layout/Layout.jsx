import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScreenWidth from '../utils/ScreenWidth'

const Layout = ({ t }) => {
  const [mobileView, setMobileView] = useState(false);
  const Width = ScreenWidth();
  return (
    <main className='flex flex-col max-w-[1440px] m-auto w-full'>
      <section className=''>
        <Navbar t={t} mobileView={mobileView} setMobileView={setMobileView} />
        {mobileView && (Width <= 768) ? "" :
          <>
            <Outlet t={t} />
            <Footer t={t} />
          </>
        }

      </section>
    </main>
  )
}

export default Layout