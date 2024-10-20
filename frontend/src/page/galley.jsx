import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import picture1 from '../assets/gallery/picture1.png';
import picture2 from '../assets/gallery/picture2.png';
import picture3 from '../assets/gallery/picture3.png';
import picture4 from '../assets/gallery/picture4.png';
import video from '../assets/gallery/resturantvideo.mp4' ;
import paneer from '../assets/gallery/paneer.png' ;
import thali from '../assets/gallery/thali.png' ;
import roti from '../assets/gallery/roti.png' ;
import amb1 from '../assets/gallery/ambience1.png' ;
import amb2 from '../assets/gallery/ambience2.png'
import amb3 from '../assets/gallery/ambience3.png' ;

const Gallery = () => {
  return (
    <div className='max-w-full '>
      

      <NavBar  />
    
      <div className='bg-gallery '>

      <div className='flex justify-center py-20 mt-10  '>
        <h1 className='font-semibold'>Use the hashtag #thespices to be featured!!</h1>
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
      <div className='m-10'>

        <video className='rounded-lg h-50' controls autoPlay muted src={video}></video>

      </div>
      {/* text for food section */}
      <div className=' flex  items-center '>
        <h1 className='font-semibold px-20'>Our Food</h1>
      </div>

      {/* our food section */}
      <div className='flex flex-row m-10 items-center justify-center gap-3'>
        <img src={paneer} alt="Food items" />
        <img src={thali} alt=" Food items" />
        <img src={roti} alt="Food items" />
      </div>


      {/* text for ambience */}
      <div className=' flex  items-center '>
        <h1 className='font-semibold px-20'>Our Ambience</h1>
      </div>

      {/* our ambiencence section */}
      <div className='flex flex-row m-10 items-center justify-center gap-3'>
        <img src={amb1} alt="Our ambience" />
        <img src={amb2} alt=" Our ambience" />
        <img src={amb3} alt="Our ambience" />
      </div>




      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
