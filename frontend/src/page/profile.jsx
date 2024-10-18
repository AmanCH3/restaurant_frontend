import React from 'react';
import profile from '../assets/profile1.jpg';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Profile = () => {
  return (
    <div className='w-max[full]'>
        <NavBar/>

    <div className="flex mt-20 ">
        
      {/* Sidebar */}
      <div className="bg-profile p-2 w-55">
        <div className="flex flex-col items-center pt-10">
          <img src={profile} alt="profile picture" className="rounded-full w-24 h-24 mb-4" />
          <h1 className="text-lg font-bold">Aman Chaudhary</h1>
          <p className="text-gray-700">amanchaudhary@gmail.com</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center my-4">
           
            Profile
          </button>
          <button className="text-black px-4 py-2 rounded-lg flex items-center justify-center mb-4">

            My Orders
          </button>
          <button className="text-black px-4 py-2 rounded-lg flex items-center justify-center">Logout</button>
        </div>
      </div>

      {/* Upper Personal Details */}
      <div className="bg-white space-y-2 p-6 w-3/4 pt-10">
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

        {/* Lower Account Setting */}
        <div className="mt-8">
          <h1 className="text-xl font-bold mb-4">Account Setting</h1>
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
    <Footer/>
    </div>
  );
}

export default Profile;
