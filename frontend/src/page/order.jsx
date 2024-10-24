import React, { useState } from 'react';

const Orders = () => {
  // Sample orders data (you can replace this with actual data)
  const orders = [
    { id: 1, number: '23843', date: '2024-10-01', status: 'Order Completed', value: 29.99 },
    { id: 2, number: '23844', date: '2024-10-02', status: 'On the way', value: 19.99 },
    { id: 3, number: '23845', date: '2024-10-03', status: 'Order Pending', value: 39.99 },
  ];

  // State for the current step in the order process
  const [currentStep, setCurrentStep] = useState(1); // Initial value for stepper
  const [selectedOrder, setSelectedOrder] = useState(orders[0]); // Default order selection

  // Function to move to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  // Function to move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="p-6 pt-20 bg-g min-h-screen">
      {/* Order Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="mb-4 flex flex-col items-start">
          <h2 className="text-xl font-semibold">Order #{selectedOrder.number}</h2>
          <p className="text-sm text-gray-600">Order Date: {selectedOrder.date}</p>
          <p className="px-4 text-sm text-green-600">Paid</p>
        </div>

        <div>
          <button className="bg-green-600 text-white rounded-lg w-50 h-8 px-3 mr-20">In Progress</button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            1
          </div>
          <p className="mt-2 text-sm">Paid</p>
        </div>
        <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-300'}`} />
        <div className="relative flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            2
          </div>
          <p className="mt-2 text-sm">Packed</p>
        </div>
        <div className={`h-1 w-16 ${currentStep >= 3 ? 'bg-green-500' : 'bg-gray-300'}`} />
        <div className="relative flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 3 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            3
          </div>
          <p className="mt-2 text-sm">Received</p>
        </div>
      </div>

      {/* Step Control Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
          Previous
        </button>
        <button onClick={nextStep} className="px-4 py-2 bg-green-500 text-white rounded">
          Next
        </button>
      </div>

      {/* Order History */}
      <div>
        <h1 className="font-semibold text-lg pb-10">Order History</h1>
      </div>

      {/* Order History Table */}
      <table className="w-full">
        <thead className="bg-gray-100 text-left text-sm">
          <tr>
            <th className="px-4 py-2">Order Number</th>
            <th className="px-4 py-2">Order Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Order Value</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedOrder(order)}
            >
              <td className="px-4 py-2">{order.number}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === 'On the way'
                      ? 'bg-red-100 text-red-600'
                      : order.status === 'Order Pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : order.status === 'Order Completed'
                      ? 'bg-green-100 text-green-600'
                      : ''
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-4 py-2">${order.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
