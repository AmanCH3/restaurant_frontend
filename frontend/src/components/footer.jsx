import React from 'react';
import GoogleMap from "../assets/googlemap.png";
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-12">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold">Find us on Google maps:</h3>
          <img src={GoogleMap} alt="Google maps" className="w-48 h-32 my-4" />
        </div>
          <div className='flex flex-col justify-center items-start'>

          <p>+1-920-226-7186</p>
          <p>4404 S Business Dr. Sheboygan, WI 53081</p>
          <div className='flex flex-row mt-4 px-4'>

          <p className=" ">Our Social Media:</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 px-2">
              <FaFacebookF size={24} />
            </a>
          </div>
          </div>
        
       

        {/* Right Section */}
        <div className="flex flex-row text-right gap-4">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/menu" className="hover:underline">Menu</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/about-us" className="hover:underline">About us</a>
          <a href="/book-a-table" className="hover:underline text-yellow-500">Book a table</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-4">
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:underline">Terms and Conditions</a>
        </div>
        <p className="text-sm">The Space Copyright © 2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
