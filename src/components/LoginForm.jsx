import React from 'react'

const LoginForm = () => {
  return (
    <div className="rounded-t-lg rounded-br-lg bg-white p-8 pb-10 sm:p-10 sm:pb-12 w-11/12 max-w-md">
        <header className="mb-6 sm:mb-8 flex flex-col items-center">
            <h1 className="text-xl md:text-2xl font-bold font-display text-center text-[#1FD392] ]">Login to your account</h1>
            <p className="text-sm font-body text-gray-700 text-center">Securely login to your PiggyVest</p>
        </header>
        <form className="flex-1 flex flex-col min-h-min-content my-8 overflow-y-auto mt-8 mb-0">
            <div className="flex flex-col mb-8 relative">
                <label className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display" htmlFor="4fd639d6-e955-4359-887a-2307f8463870">Email or Phone Number</label>
                <input className="py-3 pr-2 md:py-4 md:pr-4 rounded-xs bg-gray-200 text-gray-900 outline-none pl-3 md:pl-4" name="email" id="4fd639d6-e955-4359-887a-2307f8463870" type="email" />
            </div>
            <div className="flex flex-col mb-8 relative">
                <label className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display" htmlFor="ac07aa9e-c625-4f02-adfe-992db54377be">Password</label>
                <input className="py-3 pr-2 md:py-4 md:pr-4 rounded-xs bg-gray-200 text-gray-900 outline-none pl-3 md:pl-4" name="password" id="ac07aa9e-c625-4f02-adfe-992db54377be" type="password" autoComplete="new-password"/>
            </div>
            
            <div className="flex flex-1 items-end">
                <button className=" block disabled:opacity-75 text-[#136849] bg-[#1FD392]  hover:bg-[#26e19c] transition-all duration-300 disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-t rounded-br w-full flex flex-col md:flex-row items-center justify-center pt-4 py-3 px-10 font-display text-sm md:text-sm uppercase #083E9E font-bold  hover:bg-primary-500 mt-0" type="submit">Create Account</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm