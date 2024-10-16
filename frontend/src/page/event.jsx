import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import event1 from '../assets/Events/event1.png';
import event2 from '../assets/Events/event2.png';
import event3 from '../assets/Events/event3.png';
const events = [
  {
    id: 1,
    date: 'September 10, 2023',
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quas.',
    image: event1,
  },
  {
    id: 2,
    date: 'September 15, 2023',
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iusto sapiente.',
    image: event2,
  },
  {
    id: 3,
    date: 'September 20, 2023',
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus rem eos.',
    image: event3,
  },
];

const Event = () => {
  return (
    <div className="max-w-full bg-orange-10">
      <NavBar />
      {/* Event title */}
      <div className="flex items-center justify-center py-10">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
      </div>

      {/* Event list */}
      <div className="container mx-auto px-4 py-8">
        {events.map((event) => (
          <div key={event.id} className="flex flex-col md:flex-row items-center bg-white  overflow-hidden mb-8">
            {/* Event Image */}
            <div className="md:w-1/3 w-full">
              <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
            </div>

            {/* Event Details */}
            <div className="md:w-2/3 w-full p-6">
              <h1 className="text-orange-400 text-xl font-semibold">{event.date}</h1>
              <h2 className="text-2xl font-bold mt-2">{event.title}</h2>
              <p className="text-gray-600 mt-4">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Event;
