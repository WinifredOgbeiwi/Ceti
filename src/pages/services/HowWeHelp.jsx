import React from 'react'
import { getHowWeHelpItems } from '../../utils'

const HowWeHelp = ({ t }) => {
    const items = getHowWeHelpItems(t)
    return (
        <section data-aos="fade-down" className='px-5 sm:px-[72px] padding_top'>
            <div className='flex gap-2 justify-center items-center '>
                <div className=' w-96 h-[1px] bg-black'></div>
                  <h2 className=" whitespace-nowrap text-center text-3xl sm:text-[3.25rem] font-raleway font-bold">
                {t("services.howwehelp.heading")}
            </h2>  
                <div className=' w-96 h-[1px] bg-black'></div>
            </div>
        
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
            {
                items.map((item)=>(
                    <div key={item.id} className='border-b-[1px] pb-4 border-secondary'>
                        <h4 className='font-bold text-lg md:text-xl mb-4'>{item.heading}</h4>
                       <div className='flex flex-col gap-4'>
                         {
                                item.items.map((subitem, index)=>(
                                    <ul key={index} className='flex items-start gap-4'>
                                        <li className='min-w-[20px] min-h-[20px] border-2 border-secondary' ></li>
                                        <li key={index}> {subitem}</li>
                                    </ul>
                                   
                                ))
                            }
                       </div>
                           
                            
                      
                    </div>
                ))
            }
           </div>
        </section>
    )
}

export default HowWeHelp