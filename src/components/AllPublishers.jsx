import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllPublishers = ({ publishers }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["sliderData"],
        queryFn: async () => {
          const res = await axios.get("http://localhost:5000/publisher"); // তোমার API URL
          return res.data;
        },
      });
    
  return (
    <div className="all-publishers w-full p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">All Publishers</h2>
      <ul>
        {data.map((publisher, index) => (
          <li key={index} className="p-3 border-b last:border-none">
            {publisher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPublishers;
