import React from "react";
import { BsWallet2, BsShield, BsFingerprint } from "react-icons/bs";
import { FaExchangeAlt, FaUsers } from "react-icons/fa";

const SpecialFeatures = () => {
  return (
    <div className="relative flex justify-center lg:mb-[20rem] p-2">
      <div className="lg:absolute max-w-[93%] mx-auto lg:bg-[#062233] w-full min-h-[30vh] lg:-mt-40 z-50 rounded-2xl">
        <h2 className="text-[#373e4a] lg:text-white text-center lg:px-5 py-5 lg:py-3 text-[1.6rem] md:text-[2.5rem] font-[600]">
          Our Special Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:p-3 lg;p-5">
          {/* To be Continued */}
          <div className="w-full md:p-2 mt-2">
            <div className="w-full h-auto bg-[#09314a] text-center rounded-md px-[20px] py-[30px]">
              <div className="w-[75px] h-[75px] inline-flex justify-center items-center bg-[rgba(69,107,255,0.15)] rounded-md">
                <FaExchangeAlt className="text-[2.625rem] text-[#4469FC]" />
              </div>
              <div className="text-white text-center">
                <h2 className="mt-[1.25rem] text-[1.5rem] lg:text-[1.75rem] text-[600] word-break">Money Transfer</h2>
                <p className="mt-[0.625rem] text-[#e6e6e6]">Transfer money via Clover Trust is very easy &amp; simple.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:p-2 mt-2">
            <div className="w-full h-auto bg-[#09314a] text-center rounded-md px-[20px] py-[30px]">
              <div className="w-[75px] h-[75px] inline-flex justify-center items-center bg-[rgba(69,107,255,0.15)] rounded-md">
                <BsShield className="text-[2.625rem] text-[#4469FC]" />
              </div>
              <div className="text-white text-center">
                <h2 className="mt-[1.25rem] text-[1.5rem] lg:text-[1.75rem] text-[600] word-break">Money Transfer</h2>
                <p className="mt-[0.625rem] text-[#e6e6e6]">Transfer money via Clover Trust is very easy &amp; simple.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:p-2 mt-2">
            <div className="w-full h-auto bg-[#09314a] text-center rounded-md px-[20px] py-[30px]">
              <div className="w-[75px] h-[75px] inline-flex justify-center items-center bg-[rgba(69,107,255,0.15)] rounded-md">
                <BsWallet2 className="text-[2.625rem] text-[#4469FC]" />
              </div>
              <div className="text-white text-center">
                <h2 className="mt-[1.25rem] text-[1.5rem] lg:text-[1.75rem] text-[600] word-break">Money Transfer</h2>
                <p className="mt-[0.625rem] text-[#e6e6e6]">Transfer money via Clover Trust is very easy &amp; simple.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:p-2 mt-2">
            <div className="w-full h-auto bg-[#09314a] text-center rounded-md px-[20px] py-[30px]">
              <div className="w-[75px] h-[75px] inline-flex justify-center items-center bg-[rgba(69,107,255,0.15)] rounded-md">
                <BsFingerprint className="text-[2.625rem] text-[#4469FC]" />
              </div>
              <div className="text-white text-center">
                <h2 className="mt-[1.25rem] text-[1.5rem] lg:text-[1.75rem] text-[600] word-break">Money Transfer</h2>
                <p className="mt-[0.625rem] text-[#e6e6e6]">Transfer money via Clover Trust is very easy &amp; simple.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialFeatures;
