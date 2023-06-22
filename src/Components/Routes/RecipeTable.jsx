import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const RecipeTable = ({ recipe,id }) => {
    const [dis,setDis] = useState(false)

    const toaster = ()=>{
        setDis(true)
        toast('Bookmark added')}
    const { name, type, rating, cooking_method, image, description, ingredients } = recipe
    return (
        <div className=' mx-[200px] my-20'>
            <div className="card p-10 lg:card-side bg-base-100 shadow-xl h-[600px]">
                
                <figure className='w-[1000px] h-[500px]'><img className='w-[95%] h-[490px] rounded-[15px] m-3 ' src={image} alt="pic recipe" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-[32px]">{name}</h2><small>ratings: {rating}</small>
                    <p className='text-gray-700 pr-[400px] py-3 '>{description}</p>
                    <ul className='overflow-scroll'>
                        <h1 className='font-bold text-[22px]'>ingredients:</h1>
                        {
                            ingredients.map((every, id) => <li key={id} className='font-semibold'>{id}{": "}{every}</li>)
                        }
                    </ul>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-4" className="btn">Cooking Method</label>
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <h3 className="text-lg font-bold">How to cook?</h3>
                                <p className="py-4">{cooking_method}</p>
                            </label>
                        </label>
                    </div>
                </div>
                        <div >
                           <button onClick={toaster} disabled={dis} > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PRnJs6WoS5gT_qV5iGHmwKeeU_vbTRSmfXU7cW0I&s" alt="favorite" /> </button>
                           <ToastContainer>
                           </ToastContainer>
                        </div>
            </div>
        </div>
    );
};

export default RecipeTable;