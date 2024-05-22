import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaGoogle } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <div className=" bg-white  text-black py-8 text-center">
     <div className="flex  justify-center items-center flex-wrap gap-4 md:gap-8 ">
        <a href="https://www.instagram.com/thakur_589/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="mailto:as3945787@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail size={24} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://www.facebook.com/your-facebook-id" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <FaGoogle size={24} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        &copy; CopyRight @Arun Thakur | All Rights Reserved
      </p>
  
</div>
  )
}

export default Footer
