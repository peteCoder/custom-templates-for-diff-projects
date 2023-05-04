import React, { useState } from "react";
import { Link } from "react-router-dom";

const HotelNavBar = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);

  return (
    <>
      {/* Mobile Menu */}
      <nav className="block md:hidden fixed top-0 right-0 w-full z-[1000] transition-all duration-200 ease-in-out bg-[#FFFFFF]">
        <div className="relative w-full h-[69px] py-[20px] px-[16px] flex justify-between items-center">
          <Link to="/">
          <img
            className="h-[30px]"
            src="/hotel/images/Staycation.png"
            alt=""
          />
          </Link>

          {/* Hamburger Menu */}
          <div
            className="hamburger cursor-pointer"
            onClick={() => setActiveNavbar(!activeNavbar)}
          >
            <span
              className={`line bg-[#3252DF]  ${
                activeNavbar ? "nav-active-a rotate-[45deg]" : ""
              } `}
            ></span>
            <span
              className={`line bg-[#3252DF] ${activeNavbar ? "opacity-0" : "opacity-100"} `}
            ></span>
            <span
              className={`line bg-[#3252DF]  ${
                activeNavbar ? "nav-active-b rotate-[-45deg]" : ""
              } `}
            ></span>
          </div>
        </div>
        <div className=" text-white">
          <div
            className={`flex flex-col  overflow-hidden transition-all duration-300 ${
              activeNavbar ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="px-[16px] py-[25px]">
              <ul className="flex flex-col space-y-7 text-center">
                <li>
                  <Link
                    className="text-[#3252DF] text-[16px] font-[500]"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#152C5B] text-[16px] font-[500]"
                    to="/"
                  >
                    Browse by
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#152C5B] text-[16px] font-[500]"
                    to="/"
                  >
                    Stories
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#152C5B] text-[16px] font-[500]"
                    to="/"
                  >
                    Agent
                  </Link>
                </li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Menu */}
      <nav className="hidden md:block bg-[#FFFFFF] z-[1000] h-[80px] px-10 border border-[#E5E5E5] fixed top-0 left-0 w-full right-0">
        <div className="max-w-[1145px] mx-auto flex justify-center items-center h-full">
          <div className="w-full flex items-center">
            <div className="Logo mr-auto">
              <img
                className="h-[30px]"
                src="/hotel/images/Staycation.png"
                alt=""
              />
            </div>
            <div className="text-[16px] space-x-6">
              <Link href="/" className="text-[#3252DF]">
                Home
              </Link>
              <Link href="/" className="text-[#152C5B]">
                Browse by
              </Link>
              <Link href="/" className="text-[#152C5B]">
                Stories
              </Link>
              <Link href="/" className="text-[#152C5B]">
                Agents
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HotelNavBar;
