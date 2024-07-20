import React from 'react'

const MiniHero = ({ heading }) => {
    return (
        <main className=' w-full data-aos="fade-up"'>
            <header
                className="bg-main w-full h-80 relative " >

                <div className="padding relative h-full w-full flex flex-col justify-center text-white">
                    <div className="flex items-center space-x-3 ">
                        <div className="bg-white h-24 w-[11px]"></div>
                        <div>
                            <h1 className=" font-raleway font-bold text-4xl md:text-5xl lg:text-7xl ">{heading}</h1>
                        </div>
                    </div>
                </div>
                
            </header>
        </main>
    )
}

export default MiniHero