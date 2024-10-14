import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import reservation from '../assets/reservationtable.png'

const Menu = () => {
  return (
    <div className='w-max[full]'>
        <NavBar/>

        <div>
        <div className="flex flex-row justify-between items-center space-x-4 m-6">
        <section className="border text-black bg-white rounded p-4 w-full">
         Search for food, coffee, etc ...........
         </section>

         <div className="text-black flex space-x-4">
        <select className="border px-4 py-2 rounded">
      <option>Select a branch</option>
    </select>
    <select className="border px-4 py-2 rounded">
      <option>Sort By</option>
    </select>
  </div>
</div>


            <div>
                <div className='overflow-x-auto flex space-x-4'>
                    <table className='min-w-full'>
                        <thead>
                            <tr>
                                <th>All</th>
                                <th>Appetizer</th>
                                <th>Main Course(veg)</th>
                                <th>Main Course(Non-Veg)</th>
                                <th>Desserts</th>
                                <th>Drinks</th>
                                <th>Nan/Paratha</th>
                                <th>Momo</th>
                                <th>Laasi/shake</th>
                                <th>Rice Biryani</th>
                            </tr>
                        </thead>

                        <tbody>

                        </tbody>


                        </table>

                </div>
            </div>


            <section className="grid grid-cols-4 gap-6 p-4">
               <div className="border rounded-lg shadow-lg p-4">
                 <img src="fish-fusion.jpg" alt="Fish Fusion" className="w-full h-32 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-2">Fish Fusion</h3>
                    <p className="text-black text-xl">$17.99</p>
                    <div className="mt-4 flex justify-between">
                        <h2>$17.99</h2>
                        <button className="bg-white text-black px-3 y-1 rounded">Order now</button>
                </div>
              </div>
  {/* Repeat the card for other menu items */}
  <div className="border rounded-lg shadow-lg p-4">
                 <img src="fish-fusion.jpg" alt="Fish Fusion" className="w-full h-32 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-2">Fish Fusion</h3>
                    <p className="text-black text-xl">$17.99</p>
                    <div className="mt-4 flex justify-between">
                        <h2>$17.99</h2>
                        <button className="bg-white text-black px-3 y-1 rounded">Order now</button>
                </div>
              </div>

              <div className="border rounded-lg shadow-lg p-4">
                 <img src="fish-fusion.jpg" alt="Fish Fusion" className="w-full h-32 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-2">Fish Fusion</h3>
                    <p className="text-black text-xl">$17.99</p>
                    <div className="mt-4 flex justify-between">
                        <h2>$17.99</h2>
                        <button className="bg-white text-black px-3 y-1 rounded">Order now</button>
                </div>
              </div>


              <div className="border rounded-lg shadow-lg p-4">
                 <img src="fish-fusion.jpg" alt="Fish Fusion" className="w-full h-32 object-cover rounded" />
                  <h3 className="text-lg font-semibold mt-2">Fish Fusion</h3>
                    <p className="text-black text-xl">$17.99</p>
                    <div className="mt-4 flex justify-between">
                        <h2>$17.99</h2>
                        <button className="bg-white text-black px-3 y-1 rounded">Order now</button>
                </div>
              </div>
</section>

   <div className="flex justify-center items-center rounded p-2 w-full h-9">
    <button className='bg-green-700 text-white justify-center rounded '>Explore more </button>
   </div>

   <div className='relative flex justify-center items-center m-6'>
    <img  src={reservation} alt="reservation table" />
    <div className='absolute text-center justify-center'>

    <h1 className='text-white ' >
      Dine in Style : Guarantee Your Spot at "The Spices" with a Reservation! 
    </h1>
    </div>

    <button className='bg-transparent border-white text-white'>Book a table</button>


   </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Menu
