import React from 'react'
import { getPrivacytems } from '../../utils'

const Bookmark = ({ t }) => {
    const bookmarkTitle = getPrivacytems(t)
    return (
        <section className='mt-10 px-5 sm:px-[72px]'>
            <p className='text-lg sm:text-xl text-secondary'>{t("privacy.body.update")} <span className='font-bold text-black'>20th July 2024</span> </p>
            <h5 className='text-lg sm:text-xl mt-5 capitalize text-secondary'>{t("privacy.body.tabletitle")}</h5>
            <ol className=' list-decimal list-inside text-[#D35447]'>
                {
                    bookmarkTitle.map((item) => (
                        <li key={item.id} className='mt-4 text-lg sm:text-xl' ><a href={item.id} className=' underline ml-2'>{item.title}</a></li>
                    ))
                }

            </ol>
        </section>
    )
}

export default Bookmark