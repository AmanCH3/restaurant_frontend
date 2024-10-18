import React from 'react';
import eatstreet from '../assets/earstreet.jpg';
import doordash from '../assets/doordash.jpg';
import grubhub from '../assets/grubhub.jpg';
import slice from '../assets/slice.jpg';
import ubereats from '../assets/ubereats.jpg';

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-12 py-12 mt-28'> {/* Added 'mt-28' */}
      {/* Text Section */}
      <div className='flex flex-col font-sans mb-8 md:mb-0'>
        <h1 className='text-2xl font-bold'>You can order <br /> through apps</h1>
        <p className='mt-4 text-gray-600'>
          In the modern era, ordering through apps offers unparalleled <br />
          convenience, allowing you to access a variety of goods and 
          services <br /> with just a few taps on your smartphone. From meals  <br />
          to rides, the power to procure is now firmly in your hands.
        </p>
      </div>

      {/* Logos Section */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <img className='w-[110px] h-[120px]' src={ubereats} alt="Uber Eats logo" />
        <img className='w-[110px] h-[120px]' src={grubhub} alt="Grubhub logo" />
        <img className='w-[110px] h-[120px]' src={slice} alt="Slice logo" />
        <img className='w-[110px] h-[120px]' src={doordash} alt="DoorDash logo" />
        <img className='w-[110px] h-[120px]' src={eatstreet} alt="EatStreet logo" />
      </div>
    </div>
  );
};

export default Banner;
