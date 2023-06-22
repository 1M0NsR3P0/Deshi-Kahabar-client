import React from 'react';

const Footer = () => {
    return (
        <div className='text-center bg-[#f4f1f1] text-[20px] h-[00px]'>
            <div className='md:flex justify-center items-center h-[400px] px-[100px]'>
                <div className='w-[50%] px-[80px] text-center'><h1 className='text-[27px] mb-4 font-semibold'>Yummy</h1>
                    <p className='px-[10%] text-[16px] text-gray-500'>THe one of our say is "first we eat than we do everything else. Thanks for visiting our food recipe website! Don't forget to subscribe for new recipes and cooking tips delivered straight to your inbox."</p>
                </div>
                <div className='grid grid-cols-3 w-[100%]'>
                    <div>
                        <h1 className='text-[27px] text-left font-semibold'>Categories</h1>
                        <ul className='text-left text-sm font-semibold my-2'>
                            <li className='my-1'>Breakfast Recipes</li>
                            <li className='my-1'>Lunch Recipes</li>
                            <li className='my-1'>Dinner Recipes</li>
                            <li className='my-1'>Drink Recipes</li>
                            <li className='my-1'>Appetizer & Snacks</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-[27px] text-left font-semibold'>
                            Learn More
                        </h1>
                        <ul className='text-left text-sm font-semibold my-2'>
                            <li className='my-1'>About Us</li>
                            <li className='my-1'>Team</li>
                            <li className='my-1'>Careers</li>
                            <li className='my-1'>Advertise</li>
                            <li className='my-1'>Content Licensing</li>
                        </ul>
                    </div>
                    <div>
                        <div className='text-left'>
                        <h1 className='text-[27px] text-left font-semibold'>Get in Connect</h1>
                        <p>Follow Us</p>
                        <div className='md:flex gap-6 justify-start items-center my-3'>
                        <img className='w-[25px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn95Mb5k_ValMR-ACT3RcQGJhpCPZoWXl8YDbm_13vA&s" alt="not found" />
                        <img className='w-[25px]' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="not found" />
                        <img className='w-[25px]' src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg" alt="not found" />
                        <img className='w-[25px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzkbjGCYKY2UQeILfWe0bLFz51T1KstkqrjKribk&s" alt="not found" />
                        </div>
                        <div><button className='btn btn-info'>
                            Constact Us
                        </button></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='h-[200px] bg-info pt-10 text-gray-600'>
            <div className=''>
                <small>Copyright © 2022 yumma, All rights reserved. Powered by MoxCreative.</small>

            </div>
            <small className='md:flex justify-center mt-5'>
                <ul className='md:flex justify-center items-center'>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Cookies Policy</li>
                    <li>Sitemap</li>
                </ul>
            </small>
            </div>
        </div>
    );
};

export default Footer;