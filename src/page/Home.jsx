import React from 'react';
import Slider from '../components/Slider';
import TrendingArticles from '../components/TrendingArticles';
import Plans from '../components/Plans';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FeaturedArticles from '../components/FeaturedArticles';
import LatestNews from '../components/LatestNews';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <LatestNews></LatestNews>
           <TrendingArticles></TrendingArticles>
           <Statistics></Statistics>
           <Plans></Plans>
           <FeaturedArticles></FeaturedArticles>
           <Testimonials></Testimonials> 
        </div>
    );
}; 

export default Home;