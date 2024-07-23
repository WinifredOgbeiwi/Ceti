import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../utils";

const Cta = ({ t }) => {
  return (
    <section  className="px-5 sm:px-[72px] relative mt-12 py-10 bg-main  text-white">
      <div data-aos="fade-down" className="flex flex-col lg:flex-row lg:items-center lg:space-x-52 z-10 relative">
        <div className="mt-14 lg:mb-16 mb-8 ">
          <h2 className=" font-bold font-raleway z-10 leading-[1] text-2xl sm:text-[3rem] ">
            {t("home.cta1.heading")}
          </h2>
          <p className="font-medium mt-4 text-base sm:text-2xl">
            {t("home.cta1.paragraph")}
          </p>
        </div>
        <Link to={"/"} className="hover border-2 text-lg whitespace-nowrap w-fit border-white py-4 px-5">
          {t("cta.services")}
        </Link>
      </div>

      <div data-aos="fade-down" className="h-6 w-[24px] z-0 absolute top-48 right-12 sm:right-32 bg-[#FCBDBD] "></div>
      <img
        src={IMAGES.BoxdesignB2}
        alt=""
        className="absolute sm:w-48 w-24 right-0 top-5"
      />
      <div className="h-6 w-[24px] bg-black absolute bottom-0 right-20 "></div>

    </section>
  );
};

export default Cta;
