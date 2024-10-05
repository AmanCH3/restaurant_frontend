import React from 'react'
import booking from '../assets/booking.png'

const TableSection = () => {
  return (
    <div className="relative">
      <div className="flex flex-col">
        {/* Image section */}
        <div className="w-full">
          <img src={booking} alt="table image" className="w-full h-full object-cover" />
        </div>

        {/* Form section */}
        <section className="w-full flex flex-col  bg-white p-12 border-1 shadow-sm">
          <div className="mx-6 flex flex-row justify-between">
            <h1 className="text-lg font-bold mb-4">Book a Table</h1>
            <select className=" shadow-sm  rounded">
              <option value="">Select a branch</option>
            </select>
          </div>
          <div className="flex flex-row items-start mx-6  space-y-4">
            <form className="w-full">
              <label htmlFor="Date" className="block text-sm font-medium mb-1">Date</label>
              <input type="date" className="w-full p-2 mb-4 border border-gray-300 rounded" />

              <label htmlFor="Time" className="block text-sm font-medium mb-1">Time</label>
              <input type="time" className="w-full p-2 mb-4 border border-gray-300 rounded" />

              <label htmlFor="Number of People" className="block text-sm font-medium mb-1">Number of People</label>
              <input type="number" placeholder="4 People" className="w-full p-2 mb-4 border border-gray-300 rounded" />

              <label htmlFor="Email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" placeholder="Jhondoe@gmail.com" className="w-full p-2 mb-4 border border-gray-300 rounded" />

              <label htmlFor="Note" className="block text-sm font-medium mb-1">Note</label>
              <input type="text" placeholder="Write down if you want to mention anything..." className="w-full p-2 mb-4 border border-gray-300 rounded" />

              <button className="bg-green-600 text-white py-2 px-4 rounded mt-4">Check Availability</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TableSection;
