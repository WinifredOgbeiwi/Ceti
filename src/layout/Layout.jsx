import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = ({t}) => {
  return (
    <main className='flex flex-col max-w-[1440px] m-auto w-full'>
      <section className=''>
        <Navbar t={t}/>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default Layout