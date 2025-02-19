import React from "react";

const OpinionArticles = () => {
  const articles = [
    {
      title: "The Impact of Social Media on News Consumption",
      author: "Jane Doe",
      date: "February 15, 2025",
      content: "Social media has transformed the way we consume news, allowing for instant access but also spreading misinformation. This article discusses the implications of this shift.",
      image: "https://i.ibb.co.com/svrzJwZV/roman-kraft-Zua2hyv-TBk-unsplash.jpg", 
    },
    {
      title: "Climate Change: A Global Emergency",
      author: "John Smith",
      date: "February 12, 2025",
      content: "With rising temperatures and extreme weather events, climate change is an urgent issue that requires immediate action from governments and individuals alike.",
      image: "https://i.ibb.co.com/LdyXjzwk/freddy-kearney-56-XYfm-P-NGs-unsplash.jpg", 
    },
    { 
      title: "The Future of Journalism in the Digital Age",
      author: "Emily Johnson",
      date: "February 10, 2025",
      content: "As technology evolves, journalism faces new challenges and opportunities. This piece explores how news organizations can adapt to thrive in the digital landscape.",
      image: "https://i.ibb.co.com/cckxMXjW/mika-baumeister-f3i-V8-JVrs-P8-unsplash.jpg", 
    },
    {
      title: "The Rise of Remote Work: Opportunities and Challenges",
      author: "Michael Brown",
      date: "February 5, 2025",
      content: "Remote work has gained significant popularity, offering flexibility but also presenting unique challenges for workers and employers. This article delves into its pros and cons.",
      image: "https://i.ibb.co.com/svrzJwZV/roman-kraft-Zua2hyv-TBk-unsplash.jpg", 
    },
  ];

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h4 className="text-4xl pb-4 font-bold text-center text-gray-800">
        Opinion Articles
      </h4>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {articles.map((article, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4 border border-gray-300">
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h5 className="text-lg font-semibold ">{article.title}</h5>
          <p className="text-gray-500">{`${article.author} | ${article.date}`}</p>
          <p className="text-gray-700 mt-2">{article.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OpinionArticles;
