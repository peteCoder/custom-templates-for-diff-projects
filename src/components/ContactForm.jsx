import React from 'react'
import { Link } from 'react-router-dom'


const ContactForm = () => {
  return (
    <form
    action=""
    className="bg-[#FFFFFF] shadow-md w-[80%] md:w-[564px] h-[620px] mt-6 rounded-[20px] p-[40px] space-y-3 flex flex-col md:absolute md:right-[183px] top-[10rem]"
  >
    {/* Input 1 */}
    <div className="border-[#5e5d5d] border h-[60px] rounded-[5px] outline-none overflow-hidden">
      <input
        type="text"
        placeholder="Jean Masad"
        className="w-full h-full outline-none text-[15px] px-[20px] placeholder:text-[rgba(10,20,47,1)]"
      />
    </div>
    <div className="border-[#5e5d5d] border h-[60px] rounded-[5px] outline-none overflow-hidden">
      <input
        type="text"
        placeholder="Correo electrónico"
        className="w-full h-full outline-none text-[15px] px-[20px] placeholder:text-gray"
      />
    </div>
    <div className="border-[#5e5d5d] border h-[60px] rounded-[5px] outline-none overflow-hidden">
      <input
        type="text"
        placeholder="Teléfono"
        className="w-full h-full outline-none text-[15px] px-[20px]"
      />
    </div>

    <div className="border-[#5e5d5d] border rounded-[5px] outline-none overflow-hidden">
      <textarea
        placeholder="Mensaje"
        className="w-full h-full outline-none text-[15px] px-[20px] py-[10px]"
        name=""
        id=""
        cols="30"
        rows="10"
        aria-expanded="false"
      ></textarea>
    </div>

    <div className="flex flex-row items-center">
      <input className="mr-2 w-4 h-4" type="checkbox" />
      <p className="text-[400] text-[14px]">
        He leido y acepto la{" "}
        <a className="text-[#1FD392] " href="">
          política de privacidad.
        </a>{" "}
      </p>
    </div>

    <div>
      <Link
        className="py-[16px] px-[16px] inline-block bg-[#1FD392] text-[#136849] rounded-[10px]"
        to="/"
      >
        Enviar mensaje
      </Link>
    </div>
  </form>
  )
}

export default ContactForm