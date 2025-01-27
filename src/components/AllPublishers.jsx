import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const AllPublishers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sliderData"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/publisher"); // তোমার API URL
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="all-publishers w-full p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">All Publishers</h2>
      <ul>
        {data && data.map((publisher, index) => (
          <li key={index} className="p-3 border-b last:border-none">
            {/* এখানে publisher অবজেক্ট থেকে প্রয়োজনীয় প্রপার্টি রেন্ডার করা হচ্ছে */}
            <h3 className="font-bold text-lg">{publisher.title}</h3>
            <p className="text-gray-600">{publisher.description}</p>
            <span className="text-sm text-gray-400">Views: {publisher.viewCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPublishers;
