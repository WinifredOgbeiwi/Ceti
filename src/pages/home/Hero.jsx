import React from 'react'
import { IMAGES } from '../../utils'

const Hero = ({ t }) => {
    return (
        <main className='w-full h-screen bg-red-500'>
            <div
                style={{ backgroundImage: `url(${IMAGES.HomeBg1})`, backgroundPosition:"center"}}
                className=" bg-no-repeat w-full h-full bg-cover relative pb-12"
            >
                <div className=" absolute inset-0 bg-black opacity-40"></div>
                <div className="padding relative h-full w-full sm:w-5/6 min-[1300px]:w-3/4 flex flex-col justify-end text-white">
                    <div className="flex space-x-3 ">
                        <div className="bg-main mt-[4px] w-[11px]"></div>
                        <div>
                            <h1 className=" font-raleway font-bold max-[436px]:text-3xl text-4xl md:text-5xl lg:text-7xl ">{t("home.herosection.heading")}</h1>
                            <h2 className=" font-raleway mt-2 text-3xl md:text-4xl lg:text-6xl max-[436px]:text-2xl font-medium">
                                {t("home.herosection.subheading1")}
                            </h2>
                        </div>
                    </div>
                    <p className="mt-7 font-roboto max-[436px]:text-xs text-sm md:text-base lg:text-xl">{t("home.herosection.paragraph")}</p>
                    <button className="bg-main w-fit px-5 py-4 mt-6"> {t("home.herosection.button")}</button>
                </div>
            </div>
        </main>
    )
}

export default Hero