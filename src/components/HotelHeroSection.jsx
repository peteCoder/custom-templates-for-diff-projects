import React from 'react'
import { Link } from 'react-router-dom'

const HotelHeroSection = () => {
  return (
    <div className='pt-[120px] md:px-10 px-[16px]'>

        <div className="max-w-[1145px] mx-auto">
            <div className='flex flex-wrap flex-col sm:flex-row gap-10 md:gap-0 items-center'>
                {/* Hero Vital Text Description */}
                <div className='w-full md:w-[50%]'>

                    <h2 className='text-[#152C5B] font-bold text-[30px] sm:text-[35px] md:text-[42px] max-w-[500px] md:max-w-[437px] mx-auto md:mx-0 text-center md:text-left'>
                        Forget Busy Work, Start Next Vacation
                    </h2>
                    
                    <p className='mx-auto md:mx-0 md:max-w-[331px] text-center md:text-left text-[#B0B0B0] font-[300] text-[14px] sm:text-[16px] my-[8px]'>
                        We provide what you need to enjoy your 
                        holiday with family. Time to make another 
                        memorable moments.
                    </p>

                    <div className='flex justify-center md:justify-start'>
                        <Link 
                            className='text-[16px] md:text-[18px] text-center rounded-[4px] mt-[22px]
                            inline-block py-[10px] px-[20px] md:px-[28px] bg-[#3252DF] text-white shadow-md shadow-[rgba(50,82,223,0.3)]' 
                            href="/"
                        >
                            Show Me Now
                        </Link>
                    </div>
                    

                    <div className='flex flex-wrap mt-[3rem] gap-5 justify-center md:justify-start'>
                        <div className="flex flex-col gap-2">
                            <img className='w-[27px] h-[27px] md:h-[32px] md:w-[32px]' src="/hotel/images/icons/bottle.png" alt="" />
                            <div className='flex gap-1 text-[14px] md:text-[16px]'>
                                <span className='text-[#152C5B]'>80,409</span>
                                <span className='text-[#B0B0B0]'>travelers</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img className='w-[27px] h-[27px] md:h-[32px] md:w-[32px]' src="/hotel/images/icons/camera.png" alt="" />
                            <div className='flex gap-1 text-[14px] md:text-[16px]'>
                                <span className='text-[#152C5B]'>862</span>
                                <span className='text-[#B0B0B0]'>treasures</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <img className='w-[27px] h-[27px] md:h-[32px] md:w-[32px]' src="/hotel/images/icons/location.png" alt="" />
                            <div className='flex gap-1 text-[14px] md:text-[16px]'>
                                <span className='text-[#152C5B]'>1492</span>
                                <span className='text-[#B0B0B0]'>cities</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className='w-full md:w-[50%]'>
                    <img className='w-full max-w-[499px] md:max-w-full md:mx-0 mx-auto' src="/hotel/images/hotelBanner.png" alt="" />
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default HotelHeroSection