import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
  // API থেকে ডেটা ফেচ করো
  const { data, isLoading, error } = useQuery({
    queryKey: ["sliderData"],
    queryFn: async () => {
      const res = await axios.get("https://newspaper-server-two.vercel.app/news"); // তোমার API URL
      return res.data;
    },
  });

  // লোডিং বা এরর মেসেজ দেখানো
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // ভিউ কাউন্ট অনুযায়ী ডেটা সাজানো
  const sortedData = [...data].sort((a, b) => b.viewCount - a.viewCount);

  // স্লাইডারের UI
  return (
    <div className="carousel w-full">
      {sortedData.slice(0,6).map((item, index) => (
        <div
          key={item._id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[70vh]" // স্লাইডারের উচ্চতা 70vh সেট করা
        >
          <div className="w-full h-[70vh]">
          <Link  to={`/articles/${item._id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover" // ইমেজ পুরো স্লাইডার কভার করবে
          />
          </Link>
          </div>
          <Link to={`/articles/${item._id}`}><div className="absolute bottom-5 left-5 bg-black bg-opacity-50 p-5 rounded-lg text-white">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div></Link>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? sortedData.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${(index + 1) % sortedData.length + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
