import React from "react";
import { Link } from "react-router-dom";

const FeaturedArticles = () => {
  // Static list of articles
  const articles = [
    {
      _id: "1",
      title: "The Future of Technology",
      description:
        "Discover how emerging technologies are shaping the future of various industries...",
      image: "https://i.ibb.co.com/vH70pyL/siednji-leon-jbx99-DSg-r-M-unsplash.jpg",
      viewCount: 1500,
    },
    {
      _id: "2",
      title: "Top 10 Travel Destinations",
      description:
        "Explore the most beautiful and adventurous places to visit this year...",
      image: "https://i.ibb.co.com/yYcq8mv/joseph-costa-l-WHJwo-SZf7-M-unsplash.jpg",
      viewCount: 1200,
    },
    {
      _id: "3",
      title: "Healthy Living Tips",
      description:
        "Learn simple and effective tips to maintain a healthy and balanced lifestyle...",
      image: "https://i.ibb.co.com/Jx32nkd/brooke-lark-W9-OKrx-Bqi-ZA-unsplash.jpg",
      viewCount: 1100,
    },
    {
      _id: "4",
      title: "Understanding Artificial Intelligence",
      description:
        "An introduction to AI and its applications in everyday life...",
      image: "https://i.ibb.co.com/2NyNT2T/maxim-tolchinskiy-v3z79-Wzs9k-A-unsplash.jpg",
      viewCount: 1000,
    },
    {
      _id: "5",
      title: "Mastering Personal Finance",
      description:
        "Essential tips for managing your finances and planning for the future...",
      image: "https://i.ibb.co.com/vxc6shD/traxer-k-M6-QNrgo0-YE-unsplash.jpg",
      viewCount: 900,
    },
    {
        _id: "6",
        title: "The Rise of Renewable Energy",
        description:
          "Explore how renewable energy sources like solar and wind power are transforming the energy industry...",
        image: "https://i.ibb.co.com/XzbvSTL/riccardo-annandale-7e2pe9wj-L9-M-unsplash.jpg",
        viewCount: 1300,
      }, 
  ]; 

  return (
    <section className="py-10 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Trending Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article._id}
            className="border rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={article.image}
              alt={article.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{article.title}</h3>
              <p className="text-gray-500 text-sm">
                {article.description.slice(0, 100)}...
              </p>
              <a
                href={`/article/${article._id}`}
                className="text-blue-500 mt-2 block"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/allartical"
          
          className="btn btn-primary bg-[#070CEC] text-white px-6 py-2 rounded-lg"
        >
          View All Articles
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticles;
