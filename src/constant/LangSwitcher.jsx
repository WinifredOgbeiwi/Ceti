import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IoIosGlobe } from 'react-icons/io'
import { RiArrowDropDownLine } from 'react-icons/ri'

const LangSwitcher = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || 'en');
    const [dropdownOpen, setDropdownOpen] = useState(false);


    useEffect(() => {
        setLang(i18n.language);
    }, [i18n.language]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang);
        setLang(newLang);
        setDropdownOpen(false);
    };

    return (
        <div onClick={toggleDropdown} className="flex items-center cursor-pointer relative space-x-2">
            
            <IoIosGlobe className='text-xl' />
            <p className="selected-language" >
                {lang === 'en' ? 'EN' : 'PL'}
            </p>

            <RiArrowDropDownLine className='text-2xl' />

            {dropdownOpen && (
                <div className="absolute top-10 -left-2 md:-left-0 md:top-7 text-center w-full py-[4px] font-medium bg-white md:bg-main text-black md:text-white  ">
                    {lang === 'en' ? (
                        <p onClick={() => changeLanguage('pl')}>PL</p>
                    ) : (
                        <p onClick={() => changeLanguage('en')}>EN</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default LangSwitcher