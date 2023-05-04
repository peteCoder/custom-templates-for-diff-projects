import React from 'react'
import NavBar from './NavBar';
import HeroImage from '../assets/hero-side.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // Change the padding top for smaller screen devices to a lower number
    <div className='bg-[#05001E] min-h-[100vh] md:min-h-[90vh] lg:min-h-[80vh] pt-[100px] md:pt-[8rem] flex flex-col justify-start 2xl:justify-center'> 
      <div className='container mx-auto px-3 md:px-5'>
        
        <div className='flex flex-col md:flex-row items-center justify-center '>
          {/* Description */}
          
            <div className="w-full md:w-[50%] text-center md:text-left mb-10">
              <div className=" bg-[#17132F] max-w-[365px] mx-auto md:mx-0 h-[32px] flex justify-start items-center rounded-[100px] ">
                <span className=' bg-[#1FD392] text-[#136849] font-bold h-full rounded-[100px] text-[12px] md:text-sm mr-[14px] px-[16px] py-[6px]'>HOT</span>
                <span className='text-[10px] sm:text-xs md:text-sm text-[#FFFFFF] font-[400]'>Reporting integrated with A.I technology</span>
              </div>

              {/* Text Header */}
              <h2 className='text-[#FFFFFF] max-w-full text-center lg:max-w-[400px] md:text-left  font-bold text-[30px] sm:text-[35px] lg:text-[55px] md:text-[45px]'>Dropship Your Products Faster & Integrated</h2>
              <p className='text-[#9B99A5] text-[16px] max-w-full lg:max-w-[390px] text-center md:text-left mt-2'>
                Menunjukan caranya bagaimana bekerja lebih smart
                sehingga meningkatkan produktifitas yang baik.
              </p>

              <div className='mt-5 text-center md:text-left'>
                <Link 
                  to="/login"
                  className='text-[#136849] font-[600] text-center py-[14px] px-[26px] md:py-[15px] md:px-[32px] bg-[#1FD392] inline-block rounded-[200px]'
                >Get Started</Link>
              </div>
            </div>
          
          
          {/* Hero Picture */}
          <div className="w-full md:w-[50%] mb-5">
            <img src={HeroImage} width="100%" height="100%" alt="" />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Hero;