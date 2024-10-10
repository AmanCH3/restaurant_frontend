import React from 'react';
import banner from '../assets/banner.png';

const Offer = () => {
  return (
    <div className="relative m-8">
      {/* Image Section */}
      <div>   
        <img className="m-12 object-cover" src={banner} alt="banner promotion" />
      </div>

      {/* Text Section (Overlay) */}
      <div className="absolute inset-0 flex flex-col justify-between m-12 px-6 z-10">
        {/* Headline and Description */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            🎉 Exclusive Online Offer! 🎉
          </h1>
          <p className="text-white">
            Order now from our Website and Savor Exclusive Discounts!
          </p>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-row items-start justify-between">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:border-gray-400 hover:bg-green-700 transition-all duration-200 mb-4">
            Order Now
          </button>
          <section className="text-white">
            <h1>
              Save 10% with coupon code <strong>spiceorder</strong> when you spend more than $50.
            </h1>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Offer;
