import React from 'react'

const menus = [
  {
    image: "https://via.placeholder.com/150",
    title: "Fish Fuison",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$20",
    button: "order now"
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Chips Chilly",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$20",
    button: "order now"
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Chicken Chilly",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$17.99",
    button: "order now"
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Paneer Chilly",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    price: "$19.99",
    button: "order now" 
  }
];

const MenuSection = () => {
  return (
    <section id='menu '>
      <div className="w-full h-full flex flex-wrap justify-between py-12 grid-cols-1 " style={{ gap: "5rem" }}>
        {menus.map((menu, index) => (
          <div key={index} className="w-[300px] h-[400px] rounded-tl-2xl overflow-hidden shadow-md rounded-md">
            <img src={menu.image} alt={menu.title} className="w-full h-[200px] object-cover rounded-t-md" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{menu.title}</h2>
              <p className="text-gray-500 mb-4">{menu.description}</p>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{menu.price}</h3>
                <button className="bg-green-600 text-white px-4 py-1  rounded-md shadow-md hover:border-gray-400">
                  {menu.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
