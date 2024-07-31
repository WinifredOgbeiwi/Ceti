import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils'

const Content = ({ t }) => {
    const MainList = ({ heading, paragraph,id }) => (
        <div id={id} className="mt-6">
            <h2 className=" font-raleway font-bold text-2xl"> {heading}</h2>
            <p className="text-base sm:text-lg text-secondary mt-2 ">{paragraph}</p>
        </div>
    )
    const SubItems = ({ heading, paragraph }) => (
        <div className='text-secondary mt-3'>
            <div className='flex items-center gap-3'>
                <div className='bg-main min-w-[16px] min-h-[16px]'></div>

                <h4 className='font-bold text-lg sm:text-xl text-secondary'>{heading}</h4> </div>
            <p className='ml-7 mt-1 text-base sm:text-lg'>{paragraph}</p>

        </div>
    )
    const CookiesCategories = ({ heading, paragraph }) => (
        <p className='ml-7 mt-2 text-base sm:text-lg'><span className='font-medium text-black'>{heading} </span>{paragraph}</p>
    )
    return (
        <section className='mt-7 sm:mt-10 px-5 sm:px-[72px]'>
      
            <MainList id="intro" heading={`1. ${t("privacy.body.item1title")} `} paragraph={t("privacy.body.item1body")} />

            <MainList id="data-administrator" heading={`2. ${t("privacy.body.item2title")} `} paragraph={t("privacy.body.item2body")} />

            <MainList id="data-storage" heading={`3. ${t("privacy.body.item3title")} `} paragraph={t("privacy.body.item3body")} />

            <div id='cookies-usage' className="mt-6 " >
                <h2 className="font-raleway font-bold text-2xl">4. {t("privacy.body.item4title")}</h2>

                <SubItems heading={t("privacy.body.item4body.subitem1.heading")} paragraph={t("privacy.body.item4body.subitem1.paragraph")} />

                <SubItems heading={t("privacy.body.item4body.subitem2.heading")} paragraph={t("privacy.body.item4body.subitem2.paragraph")} />

                <SubItems heading={t("privacy.body.item4body.subitem3.heading")} paragraph={t("privacy.body.item4body.subitem3.paragraph")} />

                <div className='text-secondary mt-3'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-main min-w-[16px] min-h-[16px]'></div>

                        <h4 className='font-bold text-lg sm:text-xl text-secondary'>{t("privacy.body.item4body.subitem4.heading")}</h4> </div>

                    <CookiesCategories heading={t("privacy.body.item4body.subitem4.list1.heading")} paragraph={t("privacy.body.item4body.subitem4.list1.paragraph")} />
                    <CookiesCategories heading={t("privacy.body.item4body.subitem4.list2.heading")} paragraph={t("privacy.body.item4body.subitem4.list2.paragraph")} />
                    <CookiesCategories heading={t("privacy.body.item4body.subitem4.list3.heading")} paragraph={t("privacy.body.item4body.subitem4.list3.paragraph")} />
                    <CookiesCategories heading={t("privacy.body.item4body.subitem4.list4.heading")} paragraph={t("privacy.body.item4body.subitem4.list4.paragraph")} />

                </div>
            </div>

            <MainList id="change-of-policy" heading={`5. ${t("privacy.body.item6title")} `} paragraph={t("privacy.body.item6body")} />

           
            <div id=" controller-contact" className="mt-6">
                <h2 className=" font-raleway font-bold text-2xl">6. {t("privacy.body.item7title")}</h2>
                <p className="text-base sm:text-lg text-secondary mt-2 ">{t("privacy.body.item7body")} <a href="mailto:office@cetigroup.pl" className='font-medium'>office@cetigroup.pl</a> <span >{t("privacy.body.item7bodybreak")}</span> </p>
            </div>
      
            <div id='contact' className="mt-6 ">
                <h2 className=" font-raleway font-bold text-2xl">7. {t("privacy.body.item5title")} </h2>
                <p className="text-base sm:text-lg text-secondary mt-2 mb-6 ">{t("privacy.body.item5body")} <span className='underline'><Link to={ROUTES.contact}>{t("privacy.body.item5sub.contact")}</Link></span></p>
                <div>

                    <SubItems heading={t("privacy.body.item5sub.subitem1.heading")} paragraph={t("privacy.body.item5sub.subitem1.paragraph")} />


                    <div className='text-secondary mt-5'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-main min-w-[16px] min-h-[16px]'></div>

                            <h4 className='font-bold text-lg sm:text-xl text-secondary'>{t("privacy.body.item5sub.subitem2.heading")}</h4> </div>
                        <p className='ml-7 mt-1 text-base sm:text-lg'>{t("privacy.body.item5sub.subitem2.paragraph")} <span className='underline text-main'><a href='mailto:office@cetigroup.pl'>{t("privacy.body.item5sub.subitem2.link")} </a></span></p>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default Content