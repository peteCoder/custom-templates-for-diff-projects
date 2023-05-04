import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from "../assets/Maisya.png"

const NavBar = () => {

    const [showNavBg, setShowNavBg] = useState(false);
    const [activeNavbar, setActiveNavbar] = useState(false)


    useEffect(() => {
        let navScroll = window.addEventListener('scroll', () => {
            if (window.scrollY >= 40){
                setShowNavBg(true)
            } else {
                setShowNavBg(false)
            }
        })

        return () => {
            window.removeEventListener("scroll", navScroll);
        }
    }, [])



    return (
        <>
            {/* Mobile Navbar */}
            <nav className='block md:hidden fixed top-0 right-0 w-full z-[1000] transition-all duration-200 ease-in-out bg-[#05001E]'>
                <div className='relative w-full h-[69px] py-[20px] px-[16px] flex justify-between items-center'>
                    <Link to="/">
                        <img height={33} width={96} src={Logo} alt="" />
                    </Link>
                    
                    {/* Hamburger Menu */}
                    <div className='hamburger cursor-pointer' 
                        onClick={() => setActiveNavbar(!activeNavbar)}
                    >
                        <span className={`line  ${activeNavbar ? "nav-active-a rotate-[45deg]" : ""} `}></span>
                        <span className={`line ${activeNavbar ? "opacity-0" : "opacity-100"} `}></span>
                        <span className={`line  ${activeNavbar ? "nav-active-b rotate-[-45deg]" : ""} `}></span>
                    </div>
                </div>
                <div className=' text-white'>
                    <div className={`flex flex-col  overflow-hidden transition-all duration-300 ${activeNavbar ? "max-h-[1000px]" : "max-h-0"}`}>
                        <div className='px-[16px] py-[25px]'>
                            <ul className='flex flex-col space-y-7 text-center'>
                                <li><Link className='text-[#1FD392] text-[16px] font-[500]' to="/">Features</Link></li>
                                <li><Link className='text-[#FFFFFF] text-[16px] font-[500]' to="/">Pricing</Link></li>
                                <li><Link className='text-[#FFFFFF] text-[16px] font-[500]' to="/">Showcase</Link></li>
                                <li><Link className='text-[#FFFFFF] text-[16px] font-[500]' to="/contact">Contact Us</Link></li>
                                <li><Link className='text-[#FFFFFF] text-[16px] font-[500]' to="/about">About</Link></li>
                            </ul>
                            {/* Sign In */}
                            <Link className='text-[16px]  w-full h-[45px] mt-5 rounded-[100px] flex justify-center items-center bg-[#1FD392] text-[#136849]' to="/login">Sign In</Link>
                        </div>
                    </div>

                </div>
            </nav>

            {/* Desktop Navbar */}
            <nav className={`hidden md:block py-[25px] px-[16px] fixed w-full z-[1000] top-0 right-0  transition-all duration-300 ease-in-out ${showNavBg ? "bg-[#05001E]" : "bg-transparent"}`}>
                <div className='container mx-auto md:flex items-center justify-between relative'>
                    <Link to="/">
                        <img height={33} width={96} src={Logo} alt="" />
                    </Link>
                    {/* Hamburger Icon */}
                    {/* Continue from here */}

                    <ul className='flex  flex-col md:flex-row md:items-center md:space-x-5'>
                        <li><Link className='text-[#1FD392] text-[16px] font-[500] transition-all duration-300 ease-in-out' to="/">Features</Link></li>
                        <li><Link className='text-[#FFFFFF] text-[16px] font-[500] transition-all duration-300 ease-in-out' to="/">Pricing</Link></li>
                        <li><Link className='text-[#FFFFFF] text-[16px] font-[500] transition-all duration-300 ease-in-out' to="/">Showcase</Link></li>
                        <li><Link className='text-[#FFFFFF] text-[16px] font-[500] transition-all duration-300 ease-in-out' to="/contact">Contact Us</Link></li>
                        <li><Link className='text-[#FFFFFF] text-[16px] font-[500] transition-all duration-300 ease-in-out' to="/about">About</Link></li>
                    </ul>

                    {/* Sign In */}
                    <Link className='text-[16px]  w-[125px] h-[45px] rounded-[100px] flex justify-center items-center bg-[#1FD392] text-[#136849]' to="/login">Sign In</Link>
                </div>
            </nav>
        </>
        
    )
}

export default NavBar