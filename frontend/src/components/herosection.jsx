import React from 'react';
import house from '../assets/house.png';

const Herosection = () => {
  return (
    <div className="relative">
      {/* Image Section */}
      <div className='flex justify-center items-center h-[90vh]'>
        <img src={house} alt="house" className='w-full h-full object-cover' />
      </div>

      {/* Text Section (Overlay) */}
      <div className="absolute inset-0 flex justify-start items-center m-12">
        <div className="">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Indian and Nepali cuisine: a <br className='gap-10' />
            delicious blend of <span className='text-yellow-500'>spice</span> <br /> <span className='text-yellow-500'>and heritage</span> 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
