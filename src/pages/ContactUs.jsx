import React from "react";
import { Link } from "react-router-dom";
import { ContactFooter, NavBar } from "../components";
import ContactForm from "../components/ContactForm";

const ContactUs = ({haveNavBar}) => {
  return (
    <>
    {haveNavBar && (
      <NavBar />
    )}
    <div className="w-full bg-[#05001E] py-10 md:py-0">
      <div className="flex justify-center items-center">
      <div className="w-full min-h-[120vh] flex flex-col justify-center items-center relative">
        <div className="matrix w-[80%] min-h-[60vh] bg-white rounded-[30px] overflow-hidden flex justify-center items-start flex-col px-12">
          <h4 className="font-[700] text-[44px] text-[#0A142F] max-w-[460px]">
            Danos un toque para más información
          </h4>
          <p className="font-[400] text-[20px] max-w-[430px] text-[#0A142F]">
            Regístrate y disfruta de todas las ventajas que te ofrecemos,
            introduce tus platos y empieza la transformación de tu restaurante:{" "}
          </p>
          <div className="absolute left-[15rem] -top-[4rem]">
            <img src="./images/Ushape.png" alt="" />
          </div>
        </div>
        {/* Form */}
        <ContactForm />

      </div>

    </div>
    <ContactFooter />
    </div>
    </>
    
  );
};

export default ContactUs;
