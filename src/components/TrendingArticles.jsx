import React from "react";

const TrendingArticles = ({ articles }) => {
  // Trending Articles (sorted by view count)
  const trendingArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="trending-articles w-full p-5 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Trending Articles</h2>
      <ul>
        {trendingArticles.map((article) => (
          <li key={article._id} className="mb-4 p-3 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">{article.title}</h3>
            <p>{article.description}</p>
            <p className="text-sm text-gray-500">Views: {article.views}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingArticles;
