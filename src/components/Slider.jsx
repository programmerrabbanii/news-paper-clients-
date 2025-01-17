import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import axios from "axios";


const Slider = () => {
    const { data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () =>
         await axios.post('http://localhost:5000/news')
          
      })
      console.log(data);
  return (
    <div >
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          
          <div className="mx-auto">
          <PostCard/>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
