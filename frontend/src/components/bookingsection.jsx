import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React from 'react'

const BoookingSection = () => {
  return (
    <section className="text-center bg-gray-100 py-10">
      <h2 className="text-2xl font-bold mb-8">Filter by location and Find the Favorite Dish</h2>
      <div className="flex justify-between space-x-9 items-center pb-2 shadow-sm max-w-4xl mx-auto bg-white p-6 rounded-lg">
        <select className="bg-white text-black rounded-md ">
          <option>Select Location</option>
         
        </select>
        <select className="bg-white text-gray-800 rounded-md ">
          <option>Menu</option>
         
        </select>
        <button className="bg-green-600 text-white px-10 py-2 rounded-md shadow-md hover:border-gray-400 flex  items-center">
          <MagnifyingGlassIcon className="size-5 mr-2" />
          Search
        </button>
      </div>
    </section>

    
  )
}

export default BoookingSection
