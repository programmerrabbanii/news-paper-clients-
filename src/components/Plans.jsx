import React from "react";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <div className="plans w-full p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="plan bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Free Plan</h3>
          <ul className="list-disc ml-4">
            <li>Access to basic features</li>
          </ul>
        </div>
        <div className="plan bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Premium Plan</h3>
          <ul className="list-disc ml-4">
            <li>All features included</li>
          </ul>
          <button
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => navigate("/subscription")}
          >
            Subscribe Now 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
