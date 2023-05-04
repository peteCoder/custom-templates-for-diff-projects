import React from "react";
import { services } from "../assets/intro";

const Intro = () => {
    return (
        <>
            {!(services.length === 0 ) && (
                <div className="bg-white w-full min-h-screen">
                <div className="container mx-auto">
                <h2 className="text-center font-[700] text-[25px] sm:text-[29px] md:text-[36px] mt-[100px] max-w-[355px] mx-auto">
                    Reason Why Us Might Good For You
                </h2>

                    {/* Services */}
                <div className="flex items-center justify-center flex-wrap w-full mt-[70px]">

                    {services.map((service, index) => (
                        <div key={service.id} className="w-[250px] sm:w-[300px] lg:w-[404px] flex flex-col items-center justify-between mb-10">
                            {/* Icon */}
                            <div className={`flex items-center justify-center h-[80px] w-[80px]  rounded-full mb-5 ${index === 2 ? "bg-[#1FD392]" : "bg-[#EEF0F7]"}` }>
                                <img className="w-[32px] h-[32px]" src={service.image} alt="" />
                            </div>
                            {/* Name of Service */}
                            <h4 className="text-[20px] font-[600] text-center mb-5">{service.name}</h4>

                            {/* Description of Service */}
                            <p className="text-[16px] text-[#9B99A5] font-[400] text-center max-w-[245px]">{service.description}</p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            )}
        </>
    );
};

export default Intro;
