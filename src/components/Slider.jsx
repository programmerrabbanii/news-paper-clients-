import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
 
  const { data, isLoading, error } = useQuery({
    queryKey: ["sliderData"],
    queryFn: async () => {
      const res = await axios.get("https://newspaper-server-two.vercel.app/news"); 
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const sortedData = [...data].sort((a, b) => b.viewCount - a.viewCount);

  return (
    <div className="carousel w-full">
      {sortedData.slice(0,6).map((item, index) => (
        <div 
          key={item._id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-[70vh]" // 
        >
          <div className="w-full h-[70vh]">
          <Link  to={`/articles/${item._id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover" 
          />
          </Link>
          </div>
          <Link to={`/articles/${item._id}`}><div className="absolute bottom-5 left-24 w-[40%] bg-black bg-opacity-50 p-5 rounded-lg text-white">
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
