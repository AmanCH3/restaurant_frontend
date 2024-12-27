import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";
import profile from "../assets/profile1.jpg";
import cart from "../assets/cart1.jpg";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Cart from "../page/cart";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleCartClick = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-bg flex justify-between items-center h-[80px] px-4 lg:px-16 transition-all duration-300 shadow-md ${
        isScrolled ? "shadow-lg" : "shadow-md"
      } z-50`}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-[50px] h-[60px]"
        onClick={handleLogoClick}
      ></img>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-6 md:gap-10 font-Spartan">
        {menuItems.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="capitalize text-[15px] sm:text-[19px] hover:text-gray-600 transition-all duration-300 cursor-pointer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right section: Order button, cart, and profile */}
      <div className="flex items-center gap-4">
        <button
          className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-slate-400 transition-all duration-300 text-xs sm:text-sm border"
          onClick={() => navigate("/order")}
        >
          ORDER NOW
        </button>

        <Sheet>
          <SheetTrigger>
            <img
              src={cart}
              alt="Shopping Cart"
              className="w-8 h-8 sm:w-10 sm:h-8 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
            />
          </SheetTrigger>
          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>

        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={handleProfileClick}
        />
      </div>
    </div>
  );
};

const menuItems = [
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "About Us",
    href: "/aboutus",
  },
  {
    label: "Events",
    href: "/events",
  },
];

export default NavBar;
