import React from 'react'
import logo from '../assets/navlogo.png'
import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import cart from "../assets/cart.png";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleProfileClick = () => {
      navigate("/Login"); 
    };
  
    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY > 120) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className="flex justify-between items-center  border-solid  shadow-sm h-[80px]">
    <img
      src={logo}
      alt="Logo"
      className="w-[50px] h-[60px] mx-20"
    />

    <ul className="hidden sm:flex gap-6 md:gap-10">
      {["Menu", "Gallery", "About us", "Events"].map((item) => (
        <li key={item}>

          <a
            href={`#${item.toLowerCase()}`}
            className="capitalize  text-[15px] sm:text-[19px] font-semibold hover:border-slate-400 cursor-pointer"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

    <div className="flex items-center gap-2 sm:gap-4 px-12">
      <button
        to={"/order"}
        className="bg-white text-black border-2 px-2 py-1 sm:px-4 sm:py-2 rounded-md font-bold hover:border-slate-200 text-xs sm:text-sm border-spacing-1 border-black"
      >
        ORDER NOW
      </button>
      <img
      src = {cart}
      alt='Cart image'
      className='rounded-full object-cover w-8 h-8 sm:w-10 sm:h-8'>
        
      </img>
      <img
        src={profile}
        alt="Profile"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        onClick={handleProfileClick}
      />

    </div>
  </div>
  )
}

export default NavBar
