import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm, NavBar } from '../components';
import Logo from "../assets/Maisya.png"

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="sc-bdVaJa intsAz min-h-screen flex flex-col items-center overflow-auto bg-[#05001E] pt-[8rem] pb-12">
          <Link to="/">
              <img height={43} width={106} src={Logo} className='mb-12' alt="" />
          </Link>
          {/* Form */}
          <LoginForm />
          <Link className='sc-kgoBCf bWMhOM block disabled:opacity-75 disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-t rounded-br flex flex-col md:flex-row items-center justify-center py-1 px-3 md:px-5 font-body text-xs md:text-sm #fff bg-transparent font-normal hover:text-primary-500 mt-8' to={"/register"}>Don't have an account? Register</Link>
      </div>
    </>
  )
}

export default Login