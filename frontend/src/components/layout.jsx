import React from 'react';
import Sidebar from './sidebar';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div className='flex flex-grow'>
        <Sidebar />
        <main className='flex-grow p-6 bg-gray-100'>
          {/* This is where the main content will change */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
