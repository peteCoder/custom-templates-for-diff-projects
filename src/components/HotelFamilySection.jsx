import React from 'react';
import { Link } from 'react-router-dom';

const HotelFamilySection = () => {
  return (
    <div className='pt-[120px] md:px-10 px-[16px]'>

            <div className="max-w-[1145px] mx-auto">
                <div className="max-w-[1058px]">
                    <div className="flex flex-col md:flex-row items-center gap-[57px]">
                        {/* Image */}
                        <div className="">
                            {/* h-full w-full object-cover */}
                            <img src="/hotel/images/footer_image.png" className='' alt="" /> 
                        </div>

                        {/* Text */}
                        <div className="">
                            <h2 className='text-[#152C5B] text-[24px] font-[500] mb-[37px]'>Happy Family</h2>
                            <div id='stars-ratings' className="flex items-center">
                                <img className='h-[36px] w-[36px]' src="/hotel/images/icons/yellow_star.png" alt="" />
                                <img className='h-[36px] w-[36px]' src="/hotel/images/icons/yellow_star.png" alt="" />
                                <img className='h-[36px] w-[36px]' src="/hotel/images/icons/yellow_star.png" alt="" />
                                <img className='h-[36px] w-[36px]' src="/hotel/images/icons/yellow_star.png" alt="" />
                                <img className='h-[36px] w-[36px]' src="/hotel/images/icons/yellow_star.png" alt="" />
                            </div>

                            <div className="">
                                <h2 className='text-[32px] max-w-[500px] text-[#152C5B] font-[400]'>
                                    What a great trip with my family and I should try again next time soon ...
                                </h2>
                                <p className='text-[#B0B0B0] font-[300] text-[18px] mt-3'>
                                    Angga, Product Designer
                                </p>

                                <div className='flex'>
                                    <Link
                                        className='text-[16px] md:text-[18px] text-center rounded-[4px] mt-[47px]
                                        inline-block py-[10px] px-[20px] md:px-[28px] bg-[#3252DF] text-white shadow-md shadow-[rgba(50,82,223,0.3)]' 
                                        href="/"
                                    >
                                        Read Their Story
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        <div className="mb-[10rem]"></div>
    </div>
  )
}

export default HotelFamilySection;