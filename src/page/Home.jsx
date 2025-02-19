import React from 'react';
import Slider from '../components/Slider';
import TrendingArticles from '../components/TrendingArticles';
import Plans from '../components/Plans';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import LatestNews from '../components/LatestNews';
import FeaturedInterviews from '../components/FeaturedInterviews';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <LatestNews></LatestNews>
           <TrendingArticles></TrendingArticles>
           <Statistics></Statistics>
           <Plans></Plans>
           <FeaturedInterviews></FeaturedInterviews>
           <FAQ></FAQ>
           <Testimonials></Testimonials> 
        </div>
    );
}; 

export default Home;