import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const {
    data: articles = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["articles", searchQuery, selectedPublisher, selectedTag],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/news", {
        params: {
          title: searchQuery,
          publisher: selectedPublisher,
          tags: selectedTag,
        },
      });
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading articles!</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h3 className="text-3xl font-bold text-center mb-6">All Articles</h3>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search by title"
          className="border p-3 rounded-lg shadow-sm w-full sm:w-auto"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-3 rounded-lg shadow-sm w-full sm:w-auto"
          onChange={(e) => setSelectedPublisher(e.target.value)}
        >
          <option value="">Filter by Publisher</option>
          <option value="Publisher1">Publisher1</option>
          <option value="Publisher2">Publisher2</option>
        </select>
        <select
          className="border p-3 rounded-lg shadow-sm w-full sm:w-auto"
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">Filter by Tag</option>
          <option value="Tag1">Tag1</option>
          <option value="Tag2">Tag2</option>
        </select>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ${
              article.isPremium ? "bg-yellow-100" : "bg-white"
            }`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
            <p className="text-sm text-gray-500 mb-2">By {article.publisher}</p>
            <p className="text-gray-700 mb-4">{article.description.slice(0, 100)}...</p>
            <Link
              to={`/articles/${article._id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
