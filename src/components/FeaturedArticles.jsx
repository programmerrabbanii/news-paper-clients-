import React from "react";

const FeaturedArticles = () => {
  // Static list of articles
  const articles = [
    {
      _id: "1",
      title: "The Future of Technology",
      description:
        "Discover how emerging technologies are shaping the future of various industries...",
      image: "https://via.placeholder.com/400x200",
      viewCount: 1500,
    },
    {
      _id: "2",
      title: "Top 10 Travel Destinations",
      description:
        "Explore the most beautiful and adventurous places to visit this year...",
      image: "https://via.placeholder.com/400x200",
      viewCount: 1200,
    },
    {
      _id: "3",
      title: "Healthy Living Tips",
      description:
        "Learn simple and effective tips to maintain a healthy and balanced lifestyle...",
      image: "https://via.placeholder.com/400x200",
      viewCount: 1100,
    },
    {
      _id: "4",
      title: "Understanding Artificial Intelligence",
      description:
        "An introduction to AI and its applications in everyday life...",
      image: "https://via.placeholder.com/400x200",
      viewCount: 1000,
    },
    {
      _id: "5",
      title: "Mastering Personal Finance",
      description:
        "Essential tips for managing your finances and planning for the future...",
      image: "https://via.placeholder.com/400x200",
      viewCount: 900,
    },
    {
        _id: "6",
        title: "The Rise of Renewable Energy",
        description:
          "Explore how renewable energy sources like solar and wind power are transforming the energy industry...",
        image: "https://via.placeholder.com/400x200",
        viewCount: 1300,
      }, 
  ];

  return (
    <section className="py-10">
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
        <a
          href="/articles"
          className="btn btn-primary bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          View All Articles
        </a>
      </div>
    </section>
  );
};

export default FeaturedArticles;
