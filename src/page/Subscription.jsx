import React from 'react';

const Subscription = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Subscription Card */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border-2 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all bg-white"
          >
            {/* Free Tag */}
            <button className="bg-blue-600 text-white py-1 px-3 text-sm rounded-full uppercase mb-4">
              Free for 1 Month
            </button>
            {/* Title and Price */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-semibold text-gray-800">Premium Individual</h2>
              <div className="text-right">
                <h3 className="text-3xl font-bold text-gray-800">FREE</h3>
                <p className="text-gray-500 text-sm">FOR 1 MONTH</p>
              </div>
            </div>
            {/* Features */}
            <ul className="mb-6 space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> 1 Premium Account
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> Cancel Anytime
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-600">✔</span> 15 Hours/Month of listening time for our audiobooks catalog
              </li>
            </ul>
            {/* Try Free Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all">
              Try Free For 1 Month
            </button>
            {/* Description */}
            <p className="text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis omnis vero
              delectus fugiat pariatur, reprehenderit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
