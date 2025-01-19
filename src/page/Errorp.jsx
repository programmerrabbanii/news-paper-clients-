import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai"; // Importing an icon from react-icons

const Errorp = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="text-blue-500 text-9xl mb-6">
          <AiOutlineExclamationCircle /> {/* Icon for error */}
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-2xl font-bold mt-4 text-gray-700">Page Not Found</h2>
        <p className="text-gray-500 mt-2">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={goHome}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Errorp;
