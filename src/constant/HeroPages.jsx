import React from 'react'

const HeroPage = ({ backgroundImage, heading, subheading }) => {
    return (
        <main className=' w-full h-screen'>
            <div
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center" }}
                className=" bg-no-repeat w-full h-full bg-cover relative pb-12"
            >
                <div className=" absolute inset-0 bg-black opacity-40"></div>
                <div data-aos="fade-up" className="padding relative h-full w-full sm:w-5/6 min-[1300px]:w-3/4 flex flex-col justify-center text-white">
                    <div className="flex space-x-3 ">
                        <div className="bg-main mt-[4px] w-[11px]"></div>
                        <div>
                            <h1 className=" font-raleway font-bold text-4xl md:text-5xl lg:text-7xl ">{heading}</h1>
                            <h2 className=" font-raleway mt-2 text-2xl md:text-3xl lg:text-4xl font-medium">
                                {subheading}
                            </h2>
                        </div>

                    </div>


                </div>
            </div>
        </main>
    )
}

export default HeroPage