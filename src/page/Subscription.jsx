import React from 'react';

const Subscription = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border-2 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white flex flex-col h-full">
          <button className="bg-[#3F00E7] text-white py-1 px-3 text-sm rounded-full uppercase mb-4">
            Free for 1 Month
          </button>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold text-gray-800">Premium Individual</h2>
            <div className="text-right">
              <h3 className="text-3xl font-bold text-gray-800">FREE</h3>
              <p className="text-gray-500 text-sm">FOR 1 MONTH</p>
            </div>
          </div>
          <ul className="mb-6 space-y-3 text-gray-700 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✔</span> 1 Premium Account
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✔</span> Cancel Anytime
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-600">✔</span> 15 Hours of Audiobook Listening/Month
            </li>
          </ul>
          <button className="w-full bg-[#3F00E7] text-white py-2 rounded-lg font-medium transition-all">
            Try Free For 1 Month
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free for 1 month, then $10.99 per month after. Offer only
            available if you haven't tried Premium before. Terms
          </p>
        </div>

        {/* Card 2 */}
        <div className="border-2 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white flex flex-col h-full">
          <button className="bg-[#3F00E7] text-white py-1 px-3 text-sm rounded-full uppercase mb-4">
            Save 20%
          </button>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold text-gray-800">Family Plan</h2>
            <div className="text-right">
              <h3 className="text-3xl font-bold text-gray-800">$14.99</h3>
              <p className="text-gray-500 text-sm">PER MONTH</p>
            </div>
          </div>
          <ul className="mb-6 space-y-3 text-gray-700 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Up to 6 Premium Accounts
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Share with Family Members
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-600">✔</span> Ad-Free Music and Audiobooks
            </li>
          </ul>
          <button className="w-full bg-[#3F00E7]  text-white py-2 rounded-lg font-medium transition-all">
            Get Family Plan
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Ideal for families who want to enjoy music together.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border-2 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white flex flex-col h-full">
          <button className="bg-[#3F00E7] text-white py-1 px-3 text-sm rounded-full uppercase mb-4">
            Most Popular
          </button>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold text-gray-800">Student Plan</h2>
            <div className="text-right">
              <h3 className="text-3xl font-bold text-gray-800">$4.99</h3>
              <p className="text-gray-500 text-sm">PER MONTH</p>
            </div>
          </div>
          <ul className="mb-6 space-y-3 text-gray-700 flex-grow">
            <li className="flex items-center">
              <span className="mr-2 text-red-600">✔</span> 1 Premium Account
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-red-600">✔</span> Cancel Anytime
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-red-600">✔</span> Exclusive Discounts for Students
            </li>
          </ul>
          <button className="w-full bg-[#3F00E7]  text-white py-2 rounded-lg font-medium transition-all">
            Get Student Plan
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Designed for students to enjoy premium at a discounted price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
