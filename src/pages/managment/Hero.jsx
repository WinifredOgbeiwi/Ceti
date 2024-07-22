import React from 'react'
import MiniHero from '../../constant/MiniHero'
import Team from './Team'

const Hero = ({ t }) => {
    console.log(t("management.team.team1.title"))
    return (
        <section className='relative'>
            <MiniHero heading={t("management.herosection.heading")} />
            <div className='absolute padding top-36 md:top-64 flex flex-col w-full h-full items-center sm:items-start sm:left-[72px] '>
                <div className='bg-black text-white   md:w-2/3 sm:w-3/4 text-lg sm:text-xl p-5 sm:p-10'>
                    <p>{t("management.herosection.paragraph")}</p>
                </div>
            </div>

        </section>
    )
}

export default Hero