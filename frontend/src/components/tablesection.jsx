import React from 'react';
import booking from '../assets/booking.png';

const TableSection = () => {
  return (
    <div className="relative mb-28"> {/* Add bottom margin here */}
      <div className="flex flex-col">
        {/* Image section */}
        <div className="relative w-full overflow-hidden h-[80vh]"> {/* Add height */}
          <img src={booking} alt="table image" className="w-full h-full object-cover" />
        </div>

        {/* Form section */}
        <section className="relative z-10 flex flex-col bg-white  border shadow-sm rounded-lg items-stretch mx-20 mt-12"> {/* Added 'mt-12' for space */}
          <div className="mx-6 flex flex-row justify-between">
            <h1 className="text-lg font-bold mb-4">Book a Table</h1>
            <select className="shadow-sm rounded">
              <option value="">Select a branch</option>
            </select>
          </div>

          <div className="flex flex-row mx-6 space-y-4">
            <form className="w-full">
              <div className="flex flex-wrap space-x-4 items-end space-y-3">
                {/* Date */}
                <div className="flex flex-col w-1/5">
                  <label htmlFor="Date" className="block text-sm font-medium mb-1">Date</label>
                  <input type="date" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                </div>

                {/* Time */}
                <div className="flex flex-col w-1/5">
                  <label htmlFor="Time" className="block text-sm font-medium mb-1">Time</label>
                  <input type="time" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                </div>

                {/* Number of People */}
                <div className="flex flex-col w-1/5">
                  <label htmlFor="Number of People" className="block text-sm font-medium mb-1">Number of People</label>
                  <input type="number" placeholder="4 People" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                </div>

                {/* Email and Check Availability in the same flex container */}
                <div className="flex flex-col w-1/5">
                  <label htmlFor="Email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" placeholder="jhondoe@gmail.com" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                </div>

                {/* Button placed next to the Email */}
                <div className="flex flex-col py-4">
                  <button className="bg-green-600 text-white py-2 px-4 rounded mt-7">Check Availability</button>
                </div>
              </div>

              {/* Note Section */}
              <div className="">
                <label htmlFor="Note" className="block text-sm font-medium mb-1">Note</label>
                <input type="text" placeholder="Write down if you want to mention anything..." className="w-full p-2 mb-4 border border-gray-300 rounded" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TableSection;
