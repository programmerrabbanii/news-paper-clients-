import React, { useContext } from "react";
import CountUp from "react-countup";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Statistics = () => {
  const { user } = useContext(AuthContext);

  const { data: user_count = [], isLoading, error } = useQuery({
    queryKey:  ['user_count',axios],
    queryFn: async () => {
      const response = await axios.get('http://localhost:5000/users-count');
      console.log(response.data);
      return response.data;  // Returning the fetched data
    },
  });
  const totalUsers = Array.isArray(user) ? user.length : 0;
  const premiumUsers = Array.isArray(user) 
    ? user.filter((user) => user.isPremium).length 
    : 0;
  const normalUsers = totalUsers - premiumUsers;

  return ( 
    <div className="statistics p-5 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-blue-500">
            <CountUp end={user_count.count} />
          </p> 
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Premium Users</h3>
          <p className="text-3xl font-bold text-green-500">
            <CountUp end={premiumUsers} />
          </p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold">Normal Users</h3>
          <p className="text-3xl font-bold text-red-500">
            <CountUp end={normalUsers} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
