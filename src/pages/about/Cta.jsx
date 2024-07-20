import React from 'react'
import { ROUTES } from '../../utils'
import { Link } from 'react-router-dom'

const Cta = ({ t }) => {
    return (
        <section className='relative mt-32'
            data-aos="fade-down"
        >
            <div className="px-5 sm:px-[72px]  relative">
                <div className=' py-8 flex items-center bg-white flex-col justify-center border-2 border-secondary gap-3'>
                    <h2 className='font-bold text-2xl sm:text-4xl'>{t("about.cta.heading")}</h2>
                    <p className=' font-medium text-lg sm:text-2xl'>{t("about.cta.paragraph")}</p>
                    <Link to={ROUTES.contact} className="border-2 border-main px-10 py-3 mt-4 w-fit text-main font-bold">
                        <button>  {t("cta.contact")}</button>
                    </Link>
                </div>      </div>
            <div className="bg-black w-full h-40 -z-50 absolute bottom-[0rem] top-28"></div>

        </section>
    )
}

export default Cta