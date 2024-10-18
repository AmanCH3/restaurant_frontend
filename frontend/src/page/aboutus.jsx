import React from 'react'
import aboutus from '../assets/aboutus/Aboutus.png';
import person1 from '../assets/aboutus/person1.png';
import person2 from '../assets/aboutus/person2.png';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const Aboutus
 = () => {
  return (
    <div className='max-w-full'>
        <NavBar/>
        <div>

            <div className='bg-gallery'>


        <div>
            <img src={aboutus} alt="Logo of the restuarnt" />
        </div>

        <div className='flex  items-center justify-center m-20'>
            <p className='text-center tracking-wide'>
            Our restaurant is a celebration of culinary traditions, offering a rich tapestry of aromatic spices and authentic dishes 
            that transport you to the streets of Kathmandu and the bustling markets of Mumbai. From mouthwatering curries to 
            savory tandoori delights, each dish is meticulously crafted to tantalize your taste buds and evoke the essence of
            South Asian gastronomy. At Spices, we invite you to embark on a culinary journey that honors tradition while
            embracing innovation, all within the welcoming ambiance of our restaurant.
            </p>
        </div>

        {/* Title of the  */}

        <div className=' flex justify-center pt-10'>
            <h1 className=' font-semibold text-2xl'>The Team of The Spices</h1>
        </div>

        {/* image section */}

        <div className='flex flex-row m-20 gap-10 pb-20'>

            <div className='flex flex-col items-center space-y-3'>
            <img src={person1} alt="lady" />
            <h1 className='font-semibold'>Shobha Sharma (Persident)</h1>
            <p className='text-center'>Greeting , I'm Shobha Sharma, acting on behalf of the resturant . You 
                can reach me at (920) 917-9987. We appreciate your patronage .
            </p>
            </div>

            <div className='flex flex-col items-center space-y-3 bg-gallery'>
                <img src={person2} alt="photo of CEO" />
                <h1 className='font-semibold'>Basudev Adhikair (C.E.O)</h1>
                <p className='text-center'>I'm Basudev Adhikari , acting on behalf of the CEO of this resturant . You 
                    can reach me via email of missionbda@gmail.com or by phone at (920) 226-178-1786.
                </p>
            </div>
        </div>
      
        </div>
        <div className='pt-20 bg-gallery'>

            </div>
        <Footer/>
        </div>
    </div>
  )
}

export default Aboutus

