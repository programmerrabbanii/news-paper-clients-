import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TrendingArticles = () => {
  // Fetching articles using Tanstack Query
  const { data: articles = [], isLoading, error } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:5000/news');
      return response.data;  // Returning the fetched data
    },
  });

  // If data is loading
  if (isLoading) {
    return <div className="p-4 text-center text-gray-600">Loading articles...</div>;
  }

  // If there is an error
  if (error) {
    return <div className="p-4 text-center text-red-600">Error fetching articles!</div>;
  }

  // Trending Articles (sorted by view count)
  const trendingArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="trending-articles w-full p-5 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Trending Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingArticles.map((article) => (
          <div
            key={article._id}
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{article.description}</p>
            <p className="text-sm text-gray-500">Views: {article.viewCount}</p>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default TrendingArticles;
