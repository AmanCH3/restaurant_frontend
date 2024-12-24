import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(7); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cart data from the Django API
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${baseURL}/cart/`);
        const data = await response.json();
        setCartItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (total - promoDiscount).toFixed(2);
  };

  const handlePromoApply = () => {
    alert(`Promo code "${promoCode}" applied!`);
    setPromoCode("");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold text-center mb-4">My Bag</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-semibold">Spice level: {item.spice_level}</p>
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
              <div className="flex items-center justify-end space-x-2 mt-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span className="px-2">{item.quantity}</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter a Promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="border p-2 w-2/3"
        />
        <button
          onClick={handlePromoApply}
          className="bg-green-500 text-white px-4 py-2 ml-2 rounded"
        >
          Apply
        </button>
      </div>

      <div className="mt-6 border-t pt-4">
        <p className="flex justify-between">
          <span>Promo discount</span>
          <span>${promoDiscount}</span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
