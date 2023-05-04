import React from 'react'

const MorePickedHotels = () => {
  return (
    <div className='pt-[120px] md:px-10 px-[16px]'>
        <div className="max-w-[1145px] mx-auto">
            <h2 className='mb-8 text-[#152C5B] text-[20px] font-[500] md:text-[24px] text-center md:text-left'>Most Picked</h2>
            <div className='flex flex-col md:flex-row gap-3'>
                
                <div className="h-[460px] max-w-[361px] mx-auto md:max-w-full md:w-1/4 rounded-[15px] overflow-hidden relative">
                    <img src="/hotel/images/featured2.png" className='h-full w-full object-cover' alt="" />
                    <div className='absolute top-0 right-0 bg-[#FF498B] text-white text-[14px] px-[14px] py-[7px] rounded-bl-[15px] rounded-tr-[15px] z-50'>$22 per night</div>
                    <div className="absolute bottom-[22px] left-[24px] text-white z-50">
                        <h2 className='font-[400] text-[20px]'>Blue Origin Fams</h2>
                        <p className='font-[300] text-[15px]'>Jakarta, Indonesia</p>
                    </div>
                    {/* `hotel-gradient` is a custom style in index.css */}
                    <div className='hotel-gradient absolute top-0 right-0 left-0 bottom-0 z-10'></div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 min-h-[460px] md:w-3/4">

                    <div className="h-[215px] rounded-[15px] overflow-hidden relative">
                        <img src="/hotel/images/featured3.png" className='h-full w-full object-cover' alt="" /> 
                        <div className='absolute top-0 right-0 bg-[#FF498B] text-white text-[14px] px-[14px] py-[7px] rounded-bl-[15px] rounded-tr-[15px] z-50'>$30 per night</div>
                        <div className="absolute bottom-[22px] left-[24px] text-white z-50">
                            <h2 className='font-[400] text-[20px]'>Ocean Land</h2>
                            <p className='font-[300] text-[15px]'>Bandung, Indonesia</p>
                        </div>
                        <div className='hotel-gradient absolute top-0 right-0 left-0 bottom-0 z-10'></div>
                    </div>

                    <div className="h-[215px] rounded-[15px] overflow-hidden relative">
                        <img src="/hotel/images/featured4.png" className='h-full w-full object-cover' alt="" /> 
                        <div className='absolute top-0 right-0 bg-[#FF498B] text-white text-[14px] px-[14px] py-[7px] rounded-bl-[15px] rounded-tr-[15px] z-50'>$40 per night</div>
                        <div className="absolute bottom-[22px] left-[24px] text-white z-50">
                            <h2 className='font-[400] text-[20px]'>Vinna Vill</h2>
                            <p className='font-[300] text-[15px]'>Malang, Indonesia</p>
                        </div>
                        <div className='hotel-gradient absolute top-0 right-0 left-0 bottom-0 z-10'></div>
                    </div>

                    <div className="h-[215px] rounded-[15px] overflow-hidden relative">
                        <img src="/hotel/images/featured5.png" className='h-full w-full object-cover' alt="" /> 
                        <div className='absolute top-0 right-0 bg-[#FF498B] text-white text-[14px] px-[14px] py-[7px] rounded-bl-[15px] rounded-tr-[15px] z-50'>$100 per night</div>
                        <div className="absolute bottom-[22px] left-[24px] text-white z-50">
                            <h2 className='font-[400] text-[20px]'>Stark House</h2>
                            <p className='font-[300] text-[15px]'>Malang, Indonesia</p>
                        </div>
                        <div className='hotel-gradient absolute top-0 right-0 left-0 bottom-0 z-10'></div>
                    </div>

                    <div className="h-[215px] rounded-[15px] overflow-hidden relative">
                        <img src="/hotel/images/featured6.png" className='h-full w-full object-cover' alt="" /> 
                        <div className='absolute top-0 right-0 bg-[#FF498B] text-white text-[14px] px-[14px] py-[7px] rounded-bl-[15px] rounded-tr-[15px] z-50'>$50 per night</div>
                        <div className="absolute bottom-[22px] left-[24px] text-white z-50">
                            <h2 className='font-[400] text-[20px]'>Bobox</h2>
                            <p className='font-[300] text-[15px]'>Medan, Indonesia</p>
                        </div>
                        <div className='hotel-gradient absolute top-0 right-0 left-0 bottom-0 z-10'></div>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default MorePickedHotels