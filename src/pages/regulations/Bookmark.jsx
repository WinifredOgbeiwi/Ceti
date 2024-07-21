import React from 'react'

const Bookmark = ({ t }) => {
    const Boxes = ({ heading, paragraph, id }) => (
        <div className='border-2 border-black py-8 px-5 hover:bg-black  hover:text-white'>
            <a href={id}>
                <h3 className=' font-bold font-raleway text-xl sm:text-2xl '>{heading}</h3>
                <p className=' text-sm sm:text-base md:text-lg'>{paragraph}</p>
            </a>
        </div>
    )
    return (
        <section className='mt-7 sm:mt-10 px-5 sm:px-[72px]'>

            <h3 className=' text-secondary font-bold font-raleway text-xl sm:text-2xl md:text-3xl mb-5'>{t("regulation.body.feature")}</h3>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-7'>
                <Boxes id="#introduction" heading={t("regulation.body.intro.heading")} paragraph={t("regulation.body.intro.introparagraph")} />
                <Boxes id="#security" heading={t("regulation.body.security.heading")} paragraph={t("regulation.body.security.introparagraph")} />
                <Boxes id="#administrator" heading={t("regulation.body.administrator.heading")} paragraph={t("regulation.body.administrator.introparagraph")} />
                <Boxes id="#controller" heading={t("regulation.body.controller.heading")} paragraph={t("regulation.body.controller.introparagraph")} />
            </div>
        </section>
    )
}

export default Bookmark