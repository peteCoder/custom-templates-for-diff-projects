import React from "react";

import { FaCheck } from "react-icons/fa";

function Planbox({light}) {

  return (
    <div className={`
      mt-10 p-[1.875rem] overflow-hidden h-full rounded-[8px] flex-grow-0 
      shadow-2xl flex-shrink-0 flex-basis lg:w-[32%] 
      relative
      after:absolute after:bottom-0 after:h-[3.5px] after:w-full after:rounded-b-2xl after:bg-[#1FD392] after:left-0 after:right-0 
      ${!light ? "bg-[#09314a]" : "bg-white"}`
    }>
    {/* w-full md:w-[50%] */}
    <div className={`flex justify-between items-center pb-[20px] border-b-[#e3e3e3] border-b ${!light ? "border-b-[#1FD392]" : "border-b-[#e3e3e3]"}`}>
        <h2 className={`text-[1.4rem] font-[600] break-words ${!light ? " text-white" : "text-[#464646]"}`}>
          Entrepreneur Extra
        </h2>
        <div className="bg-[rgba(6,34,51,0.05)]  rounded-[5px] py-[6px] px-[10px]">
          <p className={`text-[1.5rem] font-bold text-center ${!light ? " text-white" : "text-[#464646]"}`}>
            100%
          </p>
          <p className={`text-sm ${!light ? " text-white" : "text-[#464646]"}`}>30 days</p>
        </div>
      </div>
      {/* Enumeration */}
      <div className="space-y-1 mt-7 mb-5 text-[16px]">
        <div className="flex flex-col gap-4 py-1">
          <div className="flex justify-between items-center relative flex-wrap">
            <div className={`flex items-center gap-2 ${!light ? " text-white" : "text-[#464646]"}`}>
              <FaCheck className="text-[#1FD392] text-[13px]" />
              <span>Lock in Period</span>
            </div>
            <span className={`${!light ? " text-white" : "text-[#464646]"}`}>365 Days</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-1">
          <div className="flex justify-between items-center relative flex-wrap">
            <div className={`flex items-center gap-2 ${!light ? " text-white" : "text-[#464646]"}`}>
              <FaCheck className="text-[#1FD392] text-[13px]" />
              <span>Get Profit Every</span>
            </div>
            <span className={`${!light ? " text-white" : "text-[#464646]"}`}>25 Days</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-1">
          <div className="flex justify-between items-center flex-wrap">
            <div className={`flex items-center text-left gap-2 ${!light ? " text-white" : "text-[#464646]"}`}>
              <FaCheck className="text-[#1FD392] text-[13px]" />
              <span>Profit Rate</span>
            </div>
            <span className={`${!light ? " text-white" : "text-[#464646]"} text-right`}>11%</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-1">
          <div className="flex justify-between items-center flex-wrap">
            <div className={`flex items-center text-left gap-2 ${!light ? " text-white" : "text-[#464646]"}`}>
              <FaCheck className="text-[#1FD392] text-[13px]" />
              <span>Minimum</span>
            </div>
            <span className={`${!light ? " text-white" : "text-[#464646]"} text-right`}>$10.00</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-1">
          <div className="flex justify-between items-center flex-wrap">
            <div className={`flex items-center text-left gap-2 ${!light ? " text-white" : "text-[#464646]"}`}>
              <FaCheck className="text-[#1FD392] text-[13px]" />
              <span>Maximum</span>
            </div>
            <span className={`${!light ? " text-white" : "text-[#464646]"} text-right`}>$100,000.00</span>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="py-[0.625rem] px-[1.25rem] rounded-[0.25rem] 
                transition-all duration-300 w-full h-10 bg-[#1FD392] 
                flex justify-center items-center text-white text-[1rem] mt-10 mb-7"
      >
        Apply Now
      </a>
    </div>
  );
}

export default Planbox;
