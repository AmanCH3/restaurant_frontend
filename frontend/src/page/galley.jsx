import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import picture1 from '../assets/gallery/picture1.png';
import picture2 from '../assets/gallery/picture2.png';
import picture3 from '../assets/gallery/picture3.png';
import picture4 from '../assets/gallery/picture4.png';
import video from '../assets/gallery/resturantvideo.mp4'

const Gallery = () => {
  return (
    <div className='max-w-full'>
      <NavBar />
      <div className='flex justify-center py-10'>
        <h1>Use the hashtag #thespices to be featured!!</h1>
      </div>

      {/* Gallery Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10 h-50'>
        {/* Left Image */}
        <div className='w-full h-full'>
          <img src={picture1} alt="picture 1" className='w-full h-full object-cover' />
        </div>

        {/* Center Column with Two Images */}
        <div className='flex flex-col space-y-6'>
          <div className='w-full h-full'>
            <img src={picture3} alt="picture 3" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-full'>
            <img src={picture4} alt="picture 4" className='w-full h-full object-cover' />
          </div>
        </div>

        {/* Right Image */}
        <div className='w-full h-full'>
          <img src={picture2} alt="picture 2" className='w-full h-full object-cover' />
        </div>
      </div>
     

      {/* Video section */}
      <div className='m-10 h-50 '>

        <video className='rounded-lg' controls autoPlay src={video}></video>

      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
