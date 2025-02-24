import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import booking from "../assets/booking.png";
import { baseURL } from "../utils/useAxios";
import { createReservation } from "../utils/reservation";

const TableSection = () => {
  const [reservationData, setReservationData] = useState({
    resturant: "",
    name: "",
    date: "",
    time: "",
    email: "",
    number_of_people: 0,
    notes: "",
  });

  const [resturantData, setResturantData] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${baseURL}/restaurant/`);
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        const data = await response.json();
        setResturantData(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { resturant, name, date, time, email, number_of_people, notes } = reservationData;
    try {
      await createReservation({ resturant, name, date, time, email, number_of_people, notes });
      Swal.fire({
        icon: 'success',
        title: 'Reservation Successful!',
        text: 'Your table has been booked.',
      });
    } catch (error) {
      console.error("Error during reservation:", error);
      Swal.fire({
        icon: 'error',
        title: 'Reservation Failed',
        text: 'There was an error booking your table. Please try again.',
      });
    }
  };

  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
  };

  return (
    <div className="relative mb-28">
      <div className="flex flex-col">
        <div className="relative w-full overflow-hidden h-[80vh]">
          <img src={booking} alt="table image" className="w-full h-full object-cover" />
        </div>

        <section className="relative z-10 bg-white border border-gray-200 shadow-sm rounded-lg mx-4 md:mx-20 -mt-20 p-8">
          <h1 className="text-2xl font-semibold mb-6">Book a Table</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Restaurant Selection */}
            <div className="flex flex-col">
              <label htmlFor="resturant" className="text-sm font-medium text-gray-700 mb-1">
                Select Restaurant
              </label>
              <select
                name="resturant"
                value={reservationData.resturant}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a restaurant</option>
                {resturantData.map((restaurant) => (
                  <option key={restaurant.id} value={restaurant.id}>
                    {restaurant.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={reservationData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Date and Time */}
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={reservationData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="time" className="text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={reservationData.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={reservationData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Number of People */}
            <div className="flex flex-col">
              <label htmlFor="number_of_people" className="text-sm font-medium text-gray-700 mb-1">
                Number of People
              </label>
              <input
                type="number"
                name="number_of_people"
                value={reservationData.number_of_people}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Notes */}
            <div className="flex flex-col md:col-span-2 lg:col-span-4">
              <label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                value={reservationData.notes}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default TableSection;