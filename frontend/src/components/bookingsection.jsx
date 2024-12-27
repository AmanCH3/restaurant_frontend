import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../utils/useAxios';

const BoookingSection = () => {
  const [location, setLocation] = useState('');
  const [menu, setMenu] = useState('');
  const [sortBy, setSortBy] = useState(''); // State for sorting
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseURL}/category/`);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    // Fetch restaurants
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${baseURL}/restaurant/`);
        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchCategories();
    fetchRestaurants();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${baseURL}/menu/search/`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-center bg-gray-100 py-10">
      <h2 className="text-2xl font-bold mb-8">Filter by Location and Find Your Favorite Dish</h2>
      <div className="flex justify-between space-x-9 items-center pb-2 shadow-sm max-w-4xl mx-auto bg-white p-6 rounded-lg">
        <select
          className="bg-white text-black rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.name}>
              {restaurant.name}
            </option>
          ))}
        </select>
        <select
          className="bg-white text-gray-800 rounded-md"
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button
          className="bg-green-600 text-white px-10 py-2 rounded-md shadow-md hover:border-gray-400 flex items-center"
          onClick={handleSearch}
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>

      {/* Results Section */}
      <div className="mt-8">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-left"
              >
                <h3 className="text-xl font-semibold">{result.name}</h3>
                <p className="text-gray-600">{result.description}</p>
                <p className="text-green-600 font-bold">{result.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BoookingSection;
