import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["newsData"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/news"); 
      return res.data; 
    },
  });
 
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-1 ">
      {data.map((news) => (
        <div key={news._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={news.image} alt={news.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
            <p>
              <strong>Publisher:</strong> {news.publisher}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
