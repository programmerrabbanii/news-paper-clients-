import React from "react";
import { motion } from "framer-motion";

const FeaturedInterviews = () => {
    const interviews = [
        { id: 1, name: "Elon Musk", title: "The Future of SpaceX and AI", image: "https://i.ibb.co.com/k2BJ873P/tomasz-frankowski-k-BUfvkb-FIo-E-unsplash.jpg" },
        { id: 2, name: "Sundar Pichai", title: "Google's Role in AI Evolution", image: "https://i.ibb.co/XfzBPxRd/arthur-osipyan-5-Oyv-N4-Yx46-E-unsplash.jpg" },
    ];
     

    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Featured Interviews</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {interviews.map((interview, index) => (
                        <motion.div
                            key={interview.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={interview.image}
                                alt={`Interview with ${interview.name}`}
                                className="w-full h-60 md:h-72 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{interview.title}</h3>
                                <p className="text-gray-700 mt-2">Interview with {interview.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedInterviews;
