import React from 'react';

import AboutImage from "../assets/aboutimage.jpg";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto bg-white min-h-[30vh] p-2 md:p-5 w-full">
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={AboutImage}
              className="w-full h-full object-cover rounded-md overflow-hidden"
              alt=""
            />
          </div>

          {/* About Description */}
          <div className="md:w-1/2 w-full p-2 pt-6 md:p-10 md:pr-2">
            <div className="flex flex-row justify-start items-center space-x-3">
              <div className="h-[2px] w-6 bg-[#1FD392]"></div>
              <h3 className="text-[#1FD392] relative text-xl font-[400]">
                About Us
              </h3>
            </div>

            <div className="flex flex-col space-y-7">
              <h2 className="text-[#373e4a] font-[600] text-[1.6rem] max-w-full md:text-[2.5rem] leading-[1.2] md:max-w-[420px]">
                We Are Aware of Your Money and Safety
              </h2>
              <div className="text-[#464646] font-[400]">
                <p>
                  We are Clover Trust. We have been providing banking solutions
                  for over 20 years.
                </p>
                <p>
                  We are the most preferred, trustworthy, and one of the leading
                  banks in America because we provide rapid, efficient and top
                  quality banking solutions to meet the needs of customers and
                  consistently enhance shareholder's value.
                </p>
                <p>
                  We believe value is created for our customers by having true,
                  quality, in-person service focused on solutions that make life
                  easier for them.
                </p>
              </div>
            </div>
          </div>
        </div>

  )
}

export default AboutSection