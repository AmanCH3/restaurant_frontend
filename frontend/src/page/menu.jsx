import  { useEffect, useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { baseURL } from '../utils/useAxios';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]); // Store categories from the API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to "All"
  const [sortOption, setSortOption] = useState('');

  const sortOptions = ['Price: Low to High', 'Price: High to Low', 'Alphabetical'];

  // Fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${baseURL}/category/`);
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();

      // Assume `data` is an array of category objects with "id" and "name"
      setCategories([{ id: 'all', name: 'All' }, ...data]); // Add "All" as a default option
    } catch (error) {
      setError(error.message);
    }
  };

  // Fetch menu items based on category and sort option
  const fetchMenu = async () => {
    setLoading(true);
    setError(null);
    try {
      const categoryQuery = selectedCategory !== 'All' ? `category=${selectedCategory}` : '';
      const sortQuery = sortOption ? `sort=${sortOption.replace(/\s/g, '').toLowerCase()}` : '';
      const query = [categoryQuery, sortQuery].filter(Boolean).join('&');

      const response = await fetch(`${baseURL}/menu/?${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch menu');
      }
      const data = await response.json();
      setMenu(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch menu when selectedCategory or sortOption changes
  useEffect(() => {
    fetchMenu();
  }, [selectedCategory, sortOption]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-max[full]">
      <div className="pb-10">
        <NavBar />
      </div>

      <div className="pt-20 bg-gallery">
        <div className="flex flex-row justify-between items-center space-x-4 m-6">
          <section className="border border-black text-black bg-gallery rounded p-4 w-100">
            Search for food, coffee, etc ...........
          </section>

          <div className="text-black flex space-x-4 bg-gallery">
            {/* Dropdown for selecting category */}
            <select
              className="border px-4 py-2 rounded border-black bg-gallery"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Dropdown for sorting */}
            <select
              className="border px-4 py-2 rounded border-black bg-gallery"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Display menu items */}
        <section className="grid grid-cols-4 gap-6 p-4 px-10">
          {menu.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-lg p-4">
              <img
                src={item.image} // Ensure the backend provides correct image URLs
                alt={item.name}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-black text-xl">${item.price}</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-white text-black px-3 py-1 rounded">
                  Order now
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
