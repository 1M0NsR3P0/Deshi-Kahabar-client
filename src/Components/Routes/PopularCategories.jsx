import React from 'react';

const PopularCategories = () => {
    return (
        <div className='mt-[100px] relative w-full md:flex justify-center h-[500px]'>
            <div className='h-[350px] w-[99%] md:flex relative justify-center'>
                <p className='absolute text-white text-[27px] text-center font-bold px-[350px] py-[50px]'>here you'll find our readers' all-time favorite recipes. These dishes have been tasted and tested by home cooks like you, and have received rave reviews for their deliciousness and ease of preparation.</p>
                <img className='h-full w-full' src="https://i.ibb.co/XWNztRN/up.png" alt="popular catergory" />
            </div>
            <div className='absolute md:flex  top-52 right-[100px] w-[80%] h-[300px]'>
                <div className='w-full h-full relative mr-[50px]'>
                    <p className='absolute left-[80px] top-[100px] text-white font-bold text-[25px] text-center '>Main Dish<br></br><button className='btn btn-info text-white'>discover more</button></p>
                    
                <img className='rounded-[50%] w-full h-full border-[15px] zoomIn' src="https://img.freepik.com/free-photo/indian-traditional-dish-with-rice-lemon-tomato-coriander-leaf-cutlery-wooden-tray_613910-21740.jpg?size=626&ext=jpg&uid=R89483643&ga=GA1.2.1375357138.1682937394&semt=sph" alt="" />
                </div>
                <div className='w-full h-full relative mr-[100px]'>
                    <p className='absolute left-[80px] top-[100px] text-white font-bold text-[25px] text-center '>Appetizers<br></br><button className='btn btn-info text-white'>discover more</button></p>
                <img className='rounded-[50%] w-full h-full border-[15px] zoomIn' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdIO4NM69sHfVUVx_-TRErf8IExOhtnpAwQ&usqp=CAU" alt="" />
                </div>
                <div className='w-full h-full relative mr-[100px]'>
                    <p className='absolute left-[80px] top-[100px] text-white font-bold text-[25px] text-center '>Drink Recipes<br></br><button className='btn btn-info text-white'>discover more</button></p>
                <img className='rounded-[50%] w-full h-full border-[15px] zoomIn' src="https://www.chefkunalkapur.com/wp-content/uploads/2022/08/DSC00035-1300x868.jpg?v=1661566223" alt="" />
                </div>
                <div className='w-full h-full relative mr-[100px]'>
                    <p className='absolute left-[80px] top-[100px] text-white font-bold text-[25px] text-center '>Breakfast<br></br><button className='btn btn-info text-white'>discover more</button></p>
                <img className='rounded-[50%] w-full h-full  border-[15px] zoomIn' src="https://i.ibb.co/b5KT899/download.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default PopularCategories;