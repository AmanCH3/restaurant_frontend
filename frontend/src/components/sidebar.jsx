import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import profile from '../assets/profile1.jpg';
import Orders from '../page/order';

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleProfileClick = () => {
    // Toggle isClicked state when the button is clicked
    Navigate("/profile");
    setIsClicked(!isClicked);
  };




  return (
    <div className="bg-profile p-4 w-70">
      <div className="flex flex-col items-center pt-20">
        <img src={profile} alt="profile" className="rounded-full w-24 h-24 mb-4" />
        <h1 className="text-lg font-bold">Aman Chaudhary</h1>
        <p className="text-gray-700">amanchaudhary@gmail.com</p>
        
        {/* Profile Button with color change on click */}
        <Link
          to="/profile"
          className={`px-4 py-2 rounded-lg flex items-center justify-center my-4 ${isClicked ? 'bg-green-500' : ''} text-black`}
          onClick={handleProfileClick}
        >
          Profile
        </Link>

        {/* Other links */}
       <Link to = "/profile/orders" className={`px-4 py-2 rounded-lg flex items-center justify-center my-4 ${isClicked ? 'bg-green-500' : ''} text-black`}
      >
          My Orders
        </Link>
        <Link to="/profile/logout" className="text-black px-4 py-2 rounded-lg flex items-center justify-center">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
