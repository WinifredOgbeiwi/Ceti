import React from "react";
import { IMAGES } from "../../utils";

const WhatWeDo = ({ t }) => {
  return (
    <section className="relative padding padding_top">
      <img
        src={IMAGES.SideDesign}
        alt=""
        className="absolute -z-30 left-0 top-32 sm:top-40"
      />
      <h2 data-aos="fade-down" className=" text-3xl sm:text-[3.25rem] font-raleway font-bold">
        {t("home.whatwedo.title")}
      </h2>
      <p data-aos="fade-down" className="text-base sm:text-2xl mb-10 text-secondary mt-3">
        {t("home.whatwedo.paragraph")}
      </p>
      <div  className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-6">
        <div data-aos="fade-down" className=" border-2 border-secondary text-center">
          <img src={IMAGES.HomeBoxImg1} alt="" className="w-full" />
          <div className="mt-6 mb-9 mx-4 min-[1100px]:mx-9">
            <h4 className="mb-3 font-bold text-xl sm:text-2xl ">
              {t("home.whatwedo.box1title")}
            </h4>
            <p className="sm:text-lg text-base">
              {t("home.whatwedo.box1paragraph")}
            </p>
          </div>
        </div>

        <div data-aos="fade-down" className=" border-2 border-secondary text-center">
          <img src={IMAGES.HomeBoxImg2} alt="" className=" w-full" />
          <div className="mt-6 mb-9 mx-4 min-[1100px]:mx-9">
            <h4 className="mb-3 font-bold text-xl sm:text-2xl">
              {t("home.whatwedo.box2title")}
            </h4>
            <p className="text-base sm:text-lg">
              {t("home.whatwedo.box2paragraph")}
            </p>
          </div>
        </div>

        <div data-aos="fade-down"  className=" border-2 border-secondary text-center">
          <img src={IMAGES.HomeBoxImg3} alt="" className="w-full" />
          <div className="mt-6 mb-9 mx-4 min-[1100px]:mx-9">
            <h4 className="mb-3 font-bold text-xl sm:text-2xl">
              {t("home.whatwedo.box3title")}
            </h4>
            <p className="text-base sm:text-lg">
              {t("home.whatwedo.box3paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
