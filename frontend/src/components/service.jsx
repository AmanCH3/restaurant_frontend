import React from 'react'
import Oldlady from '../assets/oldlady.png'

const Services = () => {
  return (
    <div className='flex flex-row m-6 justify-between overflow-hidden'>
        <div>
            <img src={Oldlady} alt="old lady images" />

        </div>
        <div className='flex flex-col gap-6 tracking-wide justify-center'>
            <h1 className='text-2xl font-medium'>We provide healthy <br /> food for your family.</h1>
            <p className='font-bold'>Our story began with a vision to create a unique doing experience <br /> that merges fine dinnig, exceptional service, and a vibrant ambience. <br />
            Rooted in city's rich cullinary culture , we aim to honor our local roots <br />while infusing a gloval palate. <br />
            
            
            
            </p>
            <p>
                At place, we believe that dining is not just about food, but also the <br /> overall experience . Our staff, renowned for their warmth and dedication, <br /> 
                strives to make every visit an unforgettable event. <br />
            </p>

            <button className='bg-green-600 text-white w-[140px] h-[50px] rounded-lg shadow-sm px-3'> More About us</button>

        </div>
      
    </div>
  )
}

export default Services
