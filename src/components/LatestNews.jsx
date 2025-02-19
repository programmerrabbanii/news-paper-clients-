import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
   

    return (
        <section className=" py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Latest  News </h2>
                <p className="text-lg text-gray-600 mb-6">Stay updated with the latest headlines from around the world</p> 
                <Marquee pauseOnHover={true} speed={60} gradient={true} gradientWidth={50} gradientColor={[245, 245, 245]}>
                    <div className="flex space-x-8">
                        <div className="bg-white p-5 shadow-lg rounded-xl w-96 hover:shadow-2xl transition duration-300 border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-800">🚀 Tech Giants Unveil AI Innovations</h3>
                            <p className="text-gray-600 mt-3">Leading companies announce groundbreaking AI developments at global tech summit.</p>
                            
                        </div>
                        <div className="bg-white p-5 shadow-lg rounded-xl w-96 hover:shadow-2xl transition duration-300 border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-800">📈 Global Markets Reach Record High</h3>
                            <p className="text-gray-600 mt-3">Stock markets worldwide hit all-time highs amid economic recovery.</p>
                           
                        </div>
                        <div className="bg-white p-5 shadow-lg rounded-xl w-96 hover:shadow-2xl transition duration-300 border border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-800">🌍 Climate Summit 2025: Key Takeaways</h3>
                            <p className="text-gray-600 mt-3">World leaders discuss critical climate change actions to tackle global warming.</p>
                            
                        </div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

export default LatestNews;
