import React from 'react';
import Carousel from './Carousel';

const PopularChef = () => {
    return (
        <div className='w-[98%] py-10 px-5 h-fit md:flex justify-center items-center gap-10 popularChefMOve2 border-[20px]'>
            <Carousel></Carousel>
            <div className='popularChefMOve w-[90%]'>
                <h1 className='pr-[100px] text-[35px]'>Meet Our Most Popular Chefs</h1>
                <p className=' pr-[100px] text-[20px] mt-5 text-gray-600'>"Meet Our Most Popular Chefs" - Discover the culinary geniuses behind some of our most beloved recipes. These chefs have been carefully selected for their expertise and creativity, and their recipes are sure to impress even the most discerning palate.
                you'll find profiles of each chef, along with their favorite recipes and cooking tips. You'll get an inside look at their cooking style and approach, and you'll be able to learn from their years of experience in the kitchen. Whether you're an experienced home cook or just starting out, our most popular chefs are here to inspire and guide you on your culinary journey.</p>
            </div>
        </div>
    );
};

export default PopularChef;