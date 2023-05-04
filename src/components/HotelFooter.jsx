import React from 'react'
import { Link } from 'react-router-dom'

const HotelFooter = () => {
    return (
        <div className='py-[60px] md:px-10 px-[16px] w-full min-h-[40vh] border-t-2 border-t-[#E5E5E5]'>

            <div className="max-w-[1145px] mx-auto flex justify-center items-center">
                <div className='w-full flex flex-col lg:flex-row gap-8'>
                    {/* First Section --- Logo */}
                    <div className="">
                        <img
                            className="h-[30px]"
                            src="/hotel/images/Staycation.png"
                            alt=""
                        />
                        <div className="">
                            <p className='max-w-[255px] pt-3 font-[300] text-[16px] text-[#B0B0B0]'>We kaboom your beauty holiday instantly and memorable.</p>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="flex gap-[5rem] flex-wrap lg:ml-auto">

                        <div className="space-y-8">
                            <h2 className='text-[#152C5B] text-[18px] font-[500]'>For Beginners</h2>
                            <div className='text-[#B0B0B0] text-[16px] bold-[300] flex flex-col space-y-2'>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">New Account</Link>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">Start Booking a Room</Link>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">Use Payments</Link>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className='text-[#152C5B] text-[18px] font-[500]'>Explore Us</h2>
                            <div className='text-[#B0B0B0] text-[16px] bold-[300] flex flex-col space-y-2'>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">Our Careers</Link>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">Privacy</Link>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">Terms & Conditions</Link>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className='text-[#152C5B] text-[18px] font-[500]'>Connect Us</h2>
                            <div className='text-[#B0B0B0] text-[16px] bold-[300] flex flex-col space-y-2'>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">support@staycation.id</Link>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">021 - 2208 - 1996</Link>
                                <Link className='hover:text-[#152C5B] transition-all duration-300' to="/">Staycation, Kemang, Jakarta</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mt-[5rem] md:mt-[4rem] text-[#B0B0B0] font-[300] text-[16px]'>
                <p>Copyright 2023 • All rights reserved • Staycation</p>
            </div>
        </div>
    )
}

export default HotelFooter