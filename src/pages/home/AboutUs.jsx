import React, { useState } from 'react';
import { IMAGES, ROUTES, getHeroAboutLinks } from '../../utils';
import { Link } from 'react-router-dom';

const AboutUs = ({ t }) => {
  const [activeLink, setActiveLink] = useState('link1');

  const links = getHeroAboutLinks(t);

  return (
    <section data-aos="fade-down" className="px-5 sm:px-[72px] padding_top relative">
      <h2 className='text-3xl sm:text-5xl font-raleway font-bold'>{t('home.aboutus.heading')}</h2>

      <div className="relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <p className='w-full text-base sm:text-2xl text-secondary font-medium mt-3 '>{t('home.aboutus.paragraph')}</p>
          <div className="flex flex-col items-center w-full lg:max-w-md mx-auto">
            <ul className="flex mt-8 lg:mt-0 justify-between w-full">
              {links.map((link) => (
                <li
                  key={link.id}
                  onClick={() => setActiveLink(link.id)}
                  className={`hover cursor-pointer m-auto py-2 max-[400px]:text-sm text-lg  sm:text-xl ${activeLink === link.id ? 'font-bold' : 'font-normal'}`}
                >
                  {link.label}
                </li>
              ))}
            </ul>
            <div className="relative w-full h-1 bg-gray-300 mt-2">
              <div
                className="absolute h-full bg-red-500 transition-all duration-300"
                style={{
                  width: `${100 / links.length}%`,
                  transform: `translateX(${links.findIndex(link => link.id === activeLink) * 100}%)`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <img src={IMAGES.HeroAboutdesign} alt="" className=' absolute right-0 bottom-[-3.5rem] sm:bottom-[-5rem]  md:bottom-0 w-20 md:w-2rem ' />
      <div className="mt-12 ">
        {links.map(link => (
          <div key={link.id} className={`${activeLink === link.id ? 'block' : 'hidden'} flex flex-col md:flex-row md:space-x-8 lg:space-x-16 items-center `}>
            <img src={link.img} alt="" className=' w-full md:w-[55%]' />

            <div className='flex flex-col space-y-4 md:mt-0 mt-10'>
              <p className=' text-lg z-10'> {link.paragraph}</p>
              <Link to={ROUTES.about} className="hover border-2 border-main px-5 py-3 w-fit ">
                {t('home.aboutus.button')}
              </Link>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default AboutUs;
