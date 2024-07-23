import React from 'react'
import { getWhyChooseUsItems, IMAGES } from '../../utils'

const WhyChooseUs = ({ t }) => {
    const boxItem = getWhyChooseUsItems(t)
    return (
        <section className='padding_top '>
            <div className='flex flex-col lg:flex-row lg:items-center gap-8 px-5 lg:px-0'>
                <div className='lg:w-1/2 h-full'>
                    <img src={IMAGES.ServiceWhyUs} alt="" className='w-full min-h-full'/>
                </div>
                <div className='lg:w-1/2 sm:mr-10'>
                    <h2 className=" text-3xl sm:text-6xl font-raleway font-bold">
                        {t("services.whychooseus.heading")}
                    </h2>
                    <h4 className='font-medium text-lg lg:text-2xl my-3 sm:my-6'>   {t("services.whychooseus.subheading")}</h4>
                    <p className='sm:text-lg'>   {t("services.whychooseus.paragraph")}</p>
                    {
                        boxItem.map((item)=>(
                              <div key={item.id} className='border-l-4 border-main mt-6 pl-5 py-3 boxShadow'>
                        <div className=' w-4/5'>
                            <h5 className='font-bold text-xl'>{item.heading}</h5>
                            <p className='text-lg'>{item.paragraph}</p>
                        </div>
                    </div>
                        ))
                    }
                    {/* <button className="bg-main w-fit px-5 py-4 my-6 text-white"> {t("cta.services")}</button> */}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs