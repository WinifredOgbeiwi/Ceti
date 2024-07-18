import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils'

const Explore = ({ t }) => {
    return (
        <section
            //   data-aos="fade-down" 
            className="px-5 sm:px-[72px] mt-32 relative">
            <h2 className='font-bold text-secondary text-4xl'>{t("about.explore.heading")}</h2>
            <Link to={ROUTES.management} className='border-[1px] border-secondary cursor-pointer items-center max-[350px]:p-5 p-11 mt-9 flex justify-between'>
                <p className='text-xl font-bold'>{t("about.explore.board")}</p>
                <IoIosArrowForward />
            </Link >
        </section>
    )
}

export default Explore