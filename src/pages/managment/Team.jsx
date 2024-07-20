import React from "react";
import { getTeamPersonneltems } from "../../utils";

const Team = ({ t }) => {
    const getTeamPersonnels = getTeamPersonneltems(t);
    return (
        <section className="mt-40 padding">
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="capitalize font-raleway font-bold text-3xl sm:text-4xl md:text-5xl mt-0 sm:mt-16 md:mt-10 mb-2">
                    {t("management.team.heading")}
                </h2>
                <p className="text-xl sm:text-2xl lg:text-3xl ">
                    {t("management.team.paragraph")}
                </p>
            </div>
            <div></div>

            <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                {getTeamPersonnels.map((item) => (
                    <div className="flex flex-col ">
                        <img src={item.img} alt="" className="w-full" />
                        <div className="bg-black  text-white py-8 px-8 flex-grow">
                            <h4 className="font-bold font-raleway text-3xl ">{item.name}</h4>
                            <h6 className="text-xl font-semibold mt-2 mb-5">{item.title}</h6>
                            <p className="mb-3 text-lg">{item.paragraph1}</p>
                            <p className="text-lg">{item.paragraph2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
