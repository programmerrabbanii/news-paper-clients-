import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "This platform is amazing! It has completely changed how I work.",
      rating: 5,
      image:
        "https://i.ibb.co/vY1VCmz/smiling-young-brunette-caucasian-girl-looks-camera-isolated-pink-wall-with-copy-space.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Great features and easy to use. Highly recommend!",
      rating: 4,
      image:
        "https://i.ibb.co/MnPXGCX/image-2-1.png",
    },
    {
      id: 3,
      name: "Michael Brown",
      feedback: "Outstanding customer service and excellent features!",
      rating: 5,
      image:
        "https://i.ibb.co/Yt7Nj93/closeup-shot-young-male-smiling-isolated-turquoise-background.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className=" py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            ❮
          </button>

          {/* Testimonial Card */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center w-full md:w-2/3 transition-transform duration-500">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="rounded-full w-24 h-24 object-cover border-4 border-pink-300"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              {testimonials[currentIndex].name}
            </h3>
            <p className="mt-2 text-yellow-400">
              {"★".repeat(testimonials[currentIndex].rating)}{" "}
              <span className="text-gray-500">
                {5 - testimonials[currentIndex].rating > 0
                  ? "☆".repeat(5 - testimonials[currentIndex].rating)
                  : ""}
              </span>
            </p>
            <p className="mt-4 text-gray-600 italic">
              {testimonials[currentIndex].feedback}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}; 

export default Testimonials;
