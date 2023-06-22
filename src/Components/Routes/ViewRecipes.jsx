import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeTable from './RecipeTable';
import Error from './Error';

const ViewRecipes = () => {
    const chefDetails = useLoaderData()
    const {id,name,bio,image,likes,recipes,experience} = chefDetails
    
    // console.log(chefDetails)
    return (
        <div>
            <div className='md:flex justify-center items-center'>
                <img src={image} alt="" className='w-[1000px] h-[600px]'/>
            </div>
            <div className='md:flex justify-center text-left px-96'>
                <div>
                <div><p className='p-3 text-[32px] font-bold px-96'>Chef Name: {name}</p></div>
                <div><p className='text-left text-[20px] text-gray-600 py-3 px-96'><span className='font-bold text-[24px]'>About: </span>{bio}</p></div>
                <div className='md:flex'>
                <div className='text-left px-96'><p className=' font-bold text-[20px]'>years of experience: <span className='font-bold text-[20px]'>{experience}</span></p></div>
                <div className='text-left px-96'><p className=' font-bold text-[20px]'>Number of recipes: <span className='font-bold text-[20px]'>{recipes?.length? recipes.length :''}</span></p></div>
                </div>
                <div className='text-left px-96 text-xs'><p>Likes: <span className='font-bold'>{likes}</span></p></div>
                </div>
            </div>
            <div>
                {
                    recipes? recipes.map((recipe,id)=><RecipeTable
                    key={id}
                    recipe={recipe}
                    ></RecipeTable>):<p><Error></Error></p>
                }

            </div>

        </div>
    );
};

export default ViewRecipes;