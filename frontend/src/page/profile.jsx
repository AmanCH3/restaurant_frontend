import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Profile = () => {
  return (
    <div className='bg-white'>
      {/* Navigation bar */}
      {/* Main content */}
      <div className="bg-white space-y-2  p-6 pt-20  ">
        {/* Upper Personal Details */}
        <h1 className="text-xl font-bold mb-4">Personal Details</h1>
        <form className="space-y-4">
          <div className='space-y-2'>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="Enter your name" 
              required 
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="jhondoe@gmail.com" 
              required 
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">My Address</label>
            <input 
              type="text" 
              id="address" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="830 N WATER ST. SHEBOYGAN, WI" 
              required 
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="tel" 
              id="contact" 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              placeholder="9810800087" 
              required 
            />
          </div>

          <div className="flex justify-center">
            <button className="w-32 py-2 bg-green-700 flex justify-center text-white rounded-lg">Save</button>
          </div>
        </form>

        {/* Lower Account Settings */}
        <div className="mt-8">
          <h1 className="text-xl font-bold mb-4">Account Settings</h1>
          <form className="space-y-4">
            <div className='space-y-2'>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Current Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter your password" 
                required 
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor="newpassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input 
                type="password" 
                id="newpassword" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Enter your new password" 
                required 
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input 
                type="password" 
                id="confirmpassword" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                placeholder="Confirm your new password" 
                required 
              />
            </div>

            <div className="flex justify-center">
              <button className="w-32 justify-center py-2 bg-green-700 text-white rounded-lg">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
