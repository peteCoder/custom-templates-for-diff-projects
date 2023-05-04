import React from 'react'

function HotelsWithLargeRooms() {
  return (
    <div className='pt-[120px] md:px-10 px-[16px]'>
            <div className="max-w-[1145px] mx-auto">
                <h2 className='mb-8 text-[#152C5B] text-[20px] font-[500] md:text-[24px] text-center md:text-left'>Apartments with kitchen set</h2>
                {/* HotelLivingRooms */}

                <div className="flex gap-6 flex-wrap justify-center md:justify-start">
                    {/* Items */}
                    <div className=''>
                        <div className="min-w-[240px] min-h-[160px] sm:min-w-[263px] sm:min-h-[180px] md:max-h-[180px] max-w-[263px] rounded-[15px] overflow-hidden hotel-gradient relative">
                            {/* The absolutely positioned item can be modified by the data that comes from the database */}
                            <img src="/hotel/images/image1.png" className='h-full w-full object-cover' alt="" /> 
                        </div>
                        <h2 className='text-[#152C5B] text-[20px] font-[300] mt-2'>PS Wood</h2>
                        <p className='text-[#B0B0B0] text-[15px] font-[300] mt-[2px]'>Depok, Indonesia</p>
                    </div>

                    <div>
                        <div className="min-w-[240px] min-h-[160px] sm:min-w-[263px] sm:min-h-[180px] md:max-h-[180px] max-w-[263px] rounded-[15px] overflow-hidden hotel-gradient relative">
                            {/* The absolutely positioned item can be modified by the data that comes from the database */}
                            
                            <img src="/hotel/images/images2.png" className='h-full w-full object-cover' alt="" /> 
                        </div>
                        <h2 className='text-[#152C5B] text-[20px] font-[300] mt-2'>One Five</h2>
                        <p className='text-[#B0B0B0] text-[15px] font-[300] mt-[2px]'>Jakarta, Indonesia</p>
                    </div>

                    <div>
                        <div className="min-w-[240px] min-h-[160px] sm:min-w-[263px] sm:min-h-[180px] md:max-h-[180px] max-w-[263px] rounded-[15px] overflow-hidden hotel-gradient relative">
                            {/* The absolutely positioned item can be modified by the data that comes from the database */}
                            
                            <img src="/hotel/images/images4.png" className='h-full w-full object-cover' alt="" /> 
                        </div>
                        <h2 className='text-[#152C5B] text-[20px] font-[300] mt-2'>Minimal</h2>
                        <p className='text-[#B0B0B0] text-[15px] font-[300] mt-[2px]'>Bogor, Indonesia</p>
                    </div>

                    <div>
                        <div className="min-w-[240px] min-h-[160px] sm:min-w-[263px] sm:min-h-[180px] md:max-h-[180px] max-w-[263px] rounded-[15px] overflow-hidden hotel-gradient relative">
                            {/* The absolutely positioned item can be modified by the data that comes from the database */}
                            <div className='absolute top-0 right-0 bg-[#FF498B] text-white text-[14px] px-[14px] py-[7px] rounded-bl-[15px] rounded-tr-[15px] font-[300]'>
                                <span className='font-[500]'>Popular</span> Choice
                            </div>
                            <img src="/hotel/images/images5.png" className='h-full w-full object-cover' alt="" /> 
                        </div>
                        <h2 className='text-[#152C5B] text-[20px] font-[300] mt-2'>Stays Home</h2>
                        <p className='text-[#B0B0B0] text-[15px] font-[300] mt-[2px]'>Wonosobo, Indonesia</p>
                    </div>


                </div>

            </div>

            
        </div>
  )
}

export default HotelsWithLargeRooms