import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {

    const { id, name, likes, image, experience, recipes } = chef
    // console.log(image)
    return (

            <div className=''>
                <div className="card card-compact w-[384px] hover:w-[386px]  h-[450px] hover:h-[456px] bg-base-100 shadow-xl mx-[100px]">
                    <div className='md:flex justify-center items-center'>
                    <figure className='w-[95%] h-[300px]'><img className='rounded-lg mt-2 w-full h-full' src={image} alt="chef" /></figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className='md:flex'><span className='mr-[40px]'>Popularity: {likes}</span>
                            <p>EXP: {experience} Years</p>
                            <p>Recipes: {recipes?.length}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/chefs/${id}`} className="btn w-full bottom-0 absolute left-0 ">View Recipes...</Link>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ChefCard;