import React from 'react'
import {
    google,
    adobe,
    apple,
    slack,
    spotify
} from '../assets/sponsors';
const Sponsors = () => {
  return (
    // Remove the height soon enough
    <div className='bg-[#EEF0F7] w-full'>
        <div className='max-w-[803px] mx-auto p-5'>
            <div className='flex items-center justify-center md:justify-between flex-wrap'>
                <div className='w-[125px] flex justify-center items-center'>
                    <img className='w-2/3 my-5' src={apple} alt="" />
                </div>
                <div className='w-[125px] flex justify-center items-center'>
                    <img className='w-2/3 my-5' src={adobe} alt="" />
                </div>
                <div className='w-[125px] flex justify-center items-center'>
                    <img className='w-2/3 my-5' src={slack} alt="" />
                </div>
                <div className='w-[125px] flex justify-center items-center'>
                    <img className='w-2/3 my-5' src={spotify} alt="" />
                </div>
                <div className='w-[125px] flex justify-center items-center'>
                    <img className='w-2/3 my-5' src={google} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sponsors