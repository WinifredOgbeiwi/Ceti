import React, { useState } from 'react'

const Form = ({ t }) => {
    const[info, setInfo] = useState({
        firstname:"",
        lastname:"",
        email:"",
        message:""
    })
    return (
        <section data-aos="fade-down" className=' mt-12 md:w-3/4'>
            <form className='border-2 rounded border-[#9D9C9D] px-5 md:px-20 py-10'>

                <h3 className='text-lg sm:text-xl md:text-2xl  font-bold capitalize mb-5 '>{t("contact.body.form.title")}</h3>
                <div className='w-full h-[2px] bg-[#D9D9DA]'></div>

                <div className='flex flex-col w-full className="md:text-lg mt-5 mb-3"'>
                    <label htmlFor="firstname" className="md:text-lg mt-3 mb-3">{t("contact.body.form.firstname")}</label>
                    <input type="text" name="firstname" placeholder={t("contact.body.form.firstname")} value={info.firstname}
                        onChange={(e) => setInfo({ ...info, firstname: e.target.value })} className="border-2 rounded p-3 border-[#9D9C9D] outline-none"/>
                    <label htmlFor="lastname" className="md:text-lg mt-8 mb-3">{t("contact.body.form.lastname")}</label>
                    <input type="text" name="lastname" placeholder={t("contact.body.form.lastname")} value={info.lastname}
                        onChange={(e) => setInfo({ ...info, lastname: e.target.value })} className="border-2 rounded p-3 border-[#9D9C9D] outline-none"/>
                    <label htmlFor="email" className="md:text-lg mt-8 mb-3">{t("contact.body.form.email")}</label>
                    <input type="email" name="email" placeholder={t("contact.body.form.email")} value={info.email}
                        onChange={(e) => setInfo({ ...info, email: e.target.value })} className="border-2 rounded p-3 border-[#9D9C9D] outline-none"/>
                    <label htmlFor="message" className="md:text-lg mt-8 mb-3">{t("contact.body.form.message")}</label>
                    <textarea rows={5} name="message" id="" placeholder={t("contact.body.form.msgplaceholder")} value={info.message}
                        onChange={(e) => setInfo({ ...info, message: e.target.value })} className="border-2 rounded p-3 border-[#9D9C9D] outline-none" />
                    
                </div>
                <div className=" bg-main px-10 py-4 mt-4 w-fit text-white font-bold rounded">
                    <button>  {t("cta.contact")}</button>
                </div>
            </form>
        </section>
    )
}

export default Form