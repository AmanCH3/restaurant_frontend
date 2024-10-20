import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile1.jpg';

const Sidebar = () => {
  return (
    <div className="bg-profile p-4 w-70">
      <div className="flex flex-col items-center pt-20">
        <img src={profile} alt="profile" className="rounded-full w-24 h-24 mb-4" />
        <h1 className="text-lg font-bold">Aman Chaudhary</h1>
        <p className="text-gray-700">amanchaudhary@gmail.com</p>
        
        {/* Correctly link to nested profile routes */}
        <Link to="/profile" className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center my-4">
          Profile
        </Link>
        <Link to="/profile/orders" className="text-black px-4 py-2 rounded-lg flex items-center justify-center mb-4">
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
