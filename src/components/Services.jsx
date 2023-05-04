import React from "react";
import { BsWallet2, BsShield, BsFingerprint } from "react-icons/bs";
import { FaExchangeAlt, FaUsers } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";

const Services = () => {
  return (
    <>
      {" "}
      {/* Services we Provide */}
      <div className="w-full bg-[#f3f8fb] py-[5rem]">
        <div className="container mx-auto min-h-[30vh] p-2 md:p-5 w-full">
          <div className="flex justify-center items-start md:items-center flex-col space-x-3">
            <div className="flex items-center space-x-3">
              <div className="h-[2px] w-6 bg-[#1FD392]"></div>
              <h3 className="text-[#1FD392] relative text-xl font-[400]">
                Our Services
              </h3>
            </div>
          </div>
          <div className="flex flex-col md:items-center w-full">
            <h2 className="text-[#373e4a] font-[600] text-[1.6rem] text-left md:text-center max-w-full md:text-[2.5rem] leading-[1.2] md:max-w-[620px]">
              We make your life comfortable with our services.
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-[5rem]">
            <div className="bg-white hover:bg-[#05001E] transition-all duration-300 group border-[0.5px] border-gray flex flex-col gap-4 hover:border-transparent items-center p-8">
              <div className="h-[60px] w-[60px] md:w-[70px] md:h-[70px]  rounded-full bg-[#1FD392] flex justify-center items-center">
                <BsWallet2 className="w-[25px] h-[25px] text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#373e4a] text-center font-[600] sm:font-[700] md:font-[800] text-xl md:text-2xl group-hover:text-white">
                  Deposit Money
                </h2>
                <p className="max-w-full md:max-w-[18rem] text-[#464646] group-hover:text-white text-center font-[400]">
                  Deposit money to your account is very easy and simple as we
                  support 20+ payment gateways.
                </p>
              </div>
            </div>
            <div className="bg-white hover:bg-[#05001E] transition-all duration-300 group border-[0.5px] border-gray flex flex-col gap-4 hover:border-transparent items-center p-8">
              <div className="h-[60px] w-[60px] md:w-[70px] md:h-[70px]  rounded-full bg-[#1FD392] flex justify-center items-center">
                <FaExchangeAlt className="w-[25px] h-[25px] text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#373e4a] text-center font-[600] sm:font-[700] md:font-[800] text-xl md:text-2xl group-hover:text-white">
                  Balance Transfer
                </h2>
                <p className="max-w-full md:max-w-[18rem] text-[#464646] group-hover:text-white text-center font-[400]">
                  You can transfer your money within the Clover Trust or to
                  other banks within one hour.
                </p>
              </div>
            </div>
            <div className="bg-white hover:bg-[#05001E] transition-all duration-300 group border-[0.5px] border-gray flex flex-col gap-4 hover:border-transparent items-center p-8">
              <div className="h-[60px] w-[60px] md:w-[70px] md:h-[70px]  rounded-full bg-[#1FD392] flex justify-center items-center">
                <BsShield className="w-[25px] h-[25px] text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#373e4a] text-center font-[600] sm:font-[700] md:font-[800] text-xl md:text-2xl group-hover:text-white">
                  Secure Payment
                </h2>
                <p className="max-w-full md:max-w-[18rem] text-[#464646] group-hover:text-white text-center font-[400]">
                  Payment via Clover Trust wallet is secure as you support
                  Google 2FA security in our system.
                </p>
              </div>
            </div>
            <div className="bg-white hover:bg-[#05001E] transition-all duration-300 group border-[0.5px] border-gray flex flex-col gap-4 hover:border-transparent items-center p-8">
              <div className="h-[60px] w-[60px] md:w-[70px] md:h-[70px]  rounded-full bg-[#1FD392] flex justify-center items-center">
                <FaUsers className="w-[25px] h-[25px] text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#373e4a] text-center font-[600] sm:font-[700] md:font-[800] text-xl md:text-2xl group-hover:text-white">
                  Multitype Account
                </h2>
                <p className="max-w-full md:max-w-[18rem] text-[#464646] group-hover:text-white text-center font-[400]">
                  You don't need to open a different account for DPS or FDR. You
                  just need to apply to our FDR or DPS plans.
                </p>
              </div>
            </div>
            <div className="bg-white hover:bg-[#05001E] transition-all duration-300 group border-[0.5px] border-gray flex flex-col gap-4 hover:border-transparent items-center p-8">
              <div className="h-[60px] w-[60px] md:w-[70px] md:h-[70px]  rounded-full bg-[#1FD392] flex justify-center items-center">
                <BsFingerprint className="w-[25px] h-[25px] text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#373e4a] text-center font-[600] sm:font-[700] md:font-[800] text-xl md:text-2xl group-hover:text-white">
                  OTP Security
                </h2>
                <p className="max-w-full md:max-w-[18rem] text-[#464646] group-hover:text-white text-center font-[400]">
                  Any money-out transaction from your account will need to be
                  verified via the OTP security.
                </p>
              </div>
            </div>
            <div className="bg-white hover:bg-[#05001E] transition-all duration-300 group border-[0.5px] border-gray flex flex-col gap-4 hover:border-transparent items-center p-8">
              <div className="h-[60px] w-[60px] md:w-[70px] md:h-[70px]  rounded-full bg-[#1FD392] flex justify-center items-center">
                <FiCreditCard className="w-[25px] h-[25px] text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#373e4a] text-center font-[600] sm:font-[700] md:font-[800] text-xl md:text-2xl group-hover:text-white">
                  Withdraw Money
                </h2>
                <p className="max-w-full md:max-w-[18rem] text-[#464646] group-hover:text-white text-center font-[400]">
                  Withdraw money from your Clover Trust account is very easy and
                  simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
