import React, { useEffect, useState } from 'react';
import { baseURL } from '../utils/useAxios';

const MenuSection = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${baseURL}/menu/`);
        if (!response.ok) {
          throw new Error('Failed to fetch menus');
        }
        const data = await response.json();
        setMenus(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section id="menu" className="py-12">
      <div className="w-full overflow-x-auto">
        <div className="flex flex-nowrap gap-5">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="w-[300px] h-[400px] flex-shrink-0 rounded-tl-2xl overflow-hidden shadow-md rounded-md"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{menu.name}</h2>
                <p className="text-gray-500 mb-4">{menu.description}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{menu.price}</h3>
                  <button className=" bg-green-600 text-white px-4 py-1 rounded-md shadow-md hover:border-gray-400">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
