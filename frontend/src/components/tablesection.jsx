import Swal from "sweetalert2";
import React, { useState, useEffect, useContext } from "react";
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
    console.log(reservationData)
    try {
      await createReservation({resturant, name, date, time, email, number_of_people, notes});
    } catch (error) {
      console.error("Error during reservation:", error);
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

        <section className="relative z-10 flex flex-col bg-white border shadow-sm rounded-lg items-stretch mx-20 mt-12">
       <h1 className="text-lg font-bold mb-4 mx-6">Book a Table</h1>
         <form onSubmit={handleSubmit} className="flex flex-col gap-4 space-y-4 px-6">

    {/* Restaurant Selection */}
      <div className="flex flex-col">
      <label htmlFor="resturant" className="block text-sm font-medium mb-1">
        Select Restaurant
      </label>
      <select
        name="resturant"
        value={reservationData.resturant}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
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
      <label htmlFor="name" className="block text-sm font-medium mb-1">
        Name
      </label>
      <input

        type="text"
        name="name"
        value={reservationData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>

    {/* Date */}
    <div className="flex flex-col">
      <label htmlFor="date" className="block text-sm font-medium mb-1">
        Date
      </label>
      <input
        type="date"
        name="date"
        value={reservationData.date}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>

    {/* Time */}
    <div className="flex flex-col">
      <label htmlFor="time" className="block text-sm font-medium mb-1">
        Time
      </label>
      <input
        type="time"
        name="time"
        value={reservationData.time}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label htmlFor="email" className="block text-sm font-medium mb-1">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={reservationData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>

    {/* Number of People */}
    <div className="flex flex-col">
      <label htmlFor="number_of_people" className="block text-sm font-medium mb-1">
        Number of People
      </label>
      <input
        type="number"
        name="number_of_people"
        value={reservationData.number_of_people}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
    </div>

    {/* Notes */}
    <div className="flex flex-col">
      <label htmlFor="notes" className="block text-sm font-medium mb-1">
        Notes
      </label>
      <textarea
        name="notes"
        value={reservationData.notes}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>
    </div>

    <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded mt-4">
      Book Now
    </button>
  </form>
</section>

      </div>
    </div>
  );
};

export default TableSection;
