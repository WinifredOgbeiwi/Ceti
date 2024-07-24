import React from 'react'

const Content = ({ t }) => {
    return (
        <section className='mt-7 sm:mt-10 px-5 sm:px-[72px]'>

            <div id='introduction' className='border-b-2 pb-16 border-secondary mt-32 text-secondary'>
                <h3 className='text-black font-bold font-raleway text-xl sm:text-2xl mb-7 '>{t("regulation.body.intro.heading")}</h3>
                <p className=' text-sm sm:text-base md:text-lg'>{t("regulation.body.intro.paragraph1")}</p>
                <p className=' text-sm sm:text-base md:text-lg my-7'>{t("regulation.body.intro.paragraph2")}</p>
                <p className=' text-sm sm:text-base md:text-lg'>{t("regulation.body.intro.paragraph3")}</p>
            </div>

            <div id='security' className='border-b-2 pb-16 border-secondary mt-20'>
                <h3 className=' text-black font-bold font-raleway text-xl sm:text-2xl mb-7 '>{t("regulation.body.security.heading")}</h3>
                <p className=' text-sm sm:text-base md:text-lg'>{t("regulation.body.security.paragraph1")}</p>

            </div>

            <div id='administrator' className='border-b-2 pb-16 border-secondary mt-20'>
                <h3 className=' text-black font-bold font-raleway text-xl sm:text-2xl mb-7 '>{t("regulation.body.administrator.heading")}</h3>
                <p className=' text-sm sm:text-base md:text-lg'>{t("regulation.body.administrator.paragraph1")}</p>

            </div>

            <div id='controller' className='border-b-2 pb-16 border-secondary mt-20'>
                <h3 className=' text-black font-bold font-raleway text-xl sm:text-2xl mb-7 '>{t("regulation.body.controller.heading")}</h3>
                <p className=' text-sm sm:text-base md:text-lg'>{t("regulation.body.controller.paragraph1")} <br />{t("common.name")} <br /><span>{t("common.address")}</span> <br /><a href="mailto:office@ceti.com">office@ceti.com</a></p>

            </div>

        </section>
    )
}

export default Content