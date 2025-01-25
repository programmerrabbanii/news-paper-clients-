import React from 'react';
import Slider from '../components/Slider';
import TrendingArticles from '../components/TrendingArticles';
// import AllPublishers from '../components/AllPublishers';
import Plans from '../components/Plans';
// import Statistics from '../components/Statistics';
// import SubscriptionPage from '../components/SubscriptionPage';
import Testimonials from '../components/Testimonials';
import FeaturedArticles from '../components/FeaturedArticles';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <TrendingArticles></TrendingArticles>
           {/* <AllPublishers></AllPublishers> */}
           {/* <Statistics></Statistics> */}
           <Plans></Plans>
           {/* <SubscriptionPage></SubscriptionPage> */}
           <FeaturedArticles></FeaturedArticles>
           <Testimonials></Testimonials>

        </div>
    );
};

export default Home;