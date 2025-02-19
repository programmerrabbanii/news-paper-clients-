import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrendingArticles = () => {
  const {
    data: articles = [],
    isLoading,
    error,
  } = useQuery({ 
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        "https://newspaper-server-two.vercel.app/news"
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-600">
        Loading articles...
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600">
        Error fetching articles!
      </div>
    );
  }

  const trendingArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  return (
    <div className="trending-articles w-full p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Trending Articles
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingArticles.map((article) => (
          <Link to={`/articles/${article._id}`} key={article._id}>
            <motion.div
              className="p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-all h-80 py-3" // Set a fixed height for all cards
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg mb-2 line-clamp-2"> {/* line-clamp to limit title lines */}
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {article.description.slice(0, 100)}
              </p>
              <p className="text-sm text-gray-500">
                Views: {article.viewCount}
              </p>
            </motion.div>
          </Link>
        ))} 
      </div>
    </div>
  );
};

export default TrendingArticles;
