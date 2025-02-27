import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import { API_BASE_URL } from '../utils/EventApi';

const Event = () => {
  // State to store the events data
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_BASE_URL}/events/`) ;
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();

        console.log(data);
        setEvents(data);  // Store the fetched events data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error.message);  // Store error message if any
        setLoading(false); // Set loading to false in case of an error
      }
    }

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetching fails
  }

  return (
    <div className="max-w-full bg-orange-10">
      <NavBar />
      <div className="bg-gallery">
        {/* Event title */}
        <div className="flex items-center justify-center py-10">
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
        </div>

        {/* Event list */}
        <div className="container mx-auto px-4 py-8">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row items-center bg-gallery overflow-hidden mb-8">
              {/* Event Image */}
              <div className="md:w-1/3 w-full">
                <img src={event.image} alt={event.Title} className="w-full h-64 object-cover rounded-lg" />
              </div>

              {/* Event Details */}
              <div className="md:w-2/3 w-full p-6">
                <h1 className="text-orange-400 text-xl font-semibold">{event.date}</h1>
                <h2 className="text-2xl font-bold mt-2">{event.Title}</h2>
                <p className="text-gray-600 mt-4">{event.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Event;
