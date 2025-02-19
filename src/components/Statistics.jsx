import React, { useContext } from "react";
import CountUp from "react-countup";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const Statistics = () => {
  const { user } = useContext(AuthContext);

  const { data: user_count = {}, isLoading, error } = useQuery({
    queryKey: ["user_count", axios],
    queryFn: async () => {
      const response = await axios.get("https://newspaper-server-two.vercel.app/users-count");
      return response.data;
    },
  });

  if (isLoading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading data.</p>;

  return (
    <motion.div 
      className="statistics p-6   w-11/12 mx-auto my-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl text-center font-bold mb-6 text-gray-800">User Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Total Users", count: user_count.totalUsers, color: "text-blue-500" },
          { label: "Premium Users", count: user_count.premiumUsers, color: "text-green-500" },
          { label: "Normal Users", count: user_count.freeUsers, color: "text-red-500" }
        ].map(({ label, count, color }, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 shadow-lg rounded-lg text-center" 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold text-gray-700">{label}</h3>
            <p className={`text-4xl font-bold ${color} mt-2`}> 
              <CountUp end={count || 0} duration={2} />
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Statistics;
