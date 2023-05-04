import React from 'react'
import BottomShapeBankImage from '../assets/bottom-shape-bank.png';
import AboutHeroImage from '../assets/abouthero.jpg';
import {FaArrowRight } from 'react-icons/fa'

const AboutHero = () => {
  return (
    <section className="w-full min-h-screen relative hero-bg bg-cover bg-center bg-no-repeat pt-[11.25rem] pb-[7.5rem]" 
        style={{backgroundImage: `url(${AboutHeroImage})`}}
    >
        <div className="w-full h-full absolute bg-[#062233] top-0 right-0 left-0 bottom-0 opacity-75"></div>
        <div className="absolute bottom-0 left-0 right-0">
            <img className='w-full h-auto' src={BottomShapeBankImage} alt="" />
        </div>

        <div className="text-center text-white absolute top-0 left-0 bottom-0 right-0 z-1 pt-[6rem] md:pt-[11.25rem] pb-[7.5rem]">
            {/* Check the above padding */}
            <div className="container md:max-w-[699px] mx-auto">
                <h2 className='font-bold text-[1.625rem] md:text-[2.625rem]'>
                    Fast and Secure Online Banking System
                </h2>
                <p className='text-[1rem] md:text-[1.125rem] mt-[1.5rem] max-w-[90%] mx-auto'>
                    We offer many DPS plans and FDR plans for your money savings. We also provide loan plans to give loans to our account holders.
                </p>

                <div className='flex items-center justify-center flex-col md:flex-row'>
                    {/* Continue from here */}
                    <div className='flex items-center flex-wrap text-center md:text-left flex-col md:flex-row mt-3 sm:mt-5'>
                        <h3 className='text-white font-extrabold md:mr-[15px] text-[1.625rem] md:text-[2.5rem]'>1.5B</h3>
                        <div className='max-w-[100px]'>Total Transaction</div>
                    </div>
                    <div className='flex items-center flex-wrap text-center md:text-left flex-col md:flex-row mt-3 sm:mt-5' >
                        <h3 className='text-white font-extrabold md:mr-[15px] text-[1.625rem] md:text-[2.5rem]'>24/7</h3>
                        <div className='max-w-[100px]'>Customer Support</div>
                    </div>
                    <div className='flex items-center flex-wrap text-center md:text-left flex-col md:flex-row mt-3 sm:mt-5' >
                        <h3 className='text-white font-extrabold md:mr-[15px] text-[1.625rem] md:text-[2.5rem]'>150+</h3>
                        <div className='max-w-[100px]'>Countries We Serve</div>
                    </div>
                </div>
                {/* padding: 0.875rem 1.875rem; */}
                <div className='text-center mt-4'>
                    <a href="#" className='inline-block items-center py-[0.875rem] px-[1rem] md:px-[1.875rem] text-center cursor-pointer border-transparent border font-[400] bg-[#1FD392]'>
                        <span className='mr-3 max-w-[4rem]'>Create an Account</span>
                        <FaArrowRight className='inline' />
                    </a>
                </div>
                
            </div>  

        </div>
    </section>
  )
}

export default AboutHero