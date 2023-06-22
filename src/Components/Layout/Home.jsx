import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import ChefCard from '../Routes/ChefCard';
import PopularCategories from '../Routes/PopularCategories';
import PopularChef from '../Routes/PopularChef';
import { AuthContext } from '../AuthProviders/AuthProvider';
import Loading from './Loading';
import LazyLoad from 'react-lazy-load';
import Reviews from '../Routes/Reviews';

const Home = () => {
    const { loading } = useContext(AuthContext)
    const [showMore, setMOre] = useState(true)
    const [chefs, setChefs] = useState([])
    useEffect(() => {

        fetch('https://deshi-khabar-1m0nsr3p0.vercel.app/chefs')
            .then(data => data.json())
            .then(chefs => showMore ? setChefs(chefs.slice(0, 3)) : setChefs(chefs))
    }, [showMore])

    return (


        <div className=''>
            {
                loading ? <Loading></Loading> : ''
            }
            <div className='mb-[100px] md:mb-[100px]'>
                <Header></Header>
            </div>

            <div className='pl-52 pr-[180px]'>
                <div className=' border border-[#a8a7a7] border-t-0 border-x-0 text-left '><h1 className='font-bold text-[36px]'>Our Chefs </h1></div>
            </div>
            <LazyLoad width={"100%"} height={"100%"} threshold={0.99}>
                <div className='animateChefs grid grid-cols-1 my-10 mx-[100px] gap-5 md:grid-cols-3 relative' id='animate'>
                    <div className=' absolute -top-[100px] right-[80px]'>
                        <div className='text-center mb-5  '>
                            <button onClick={() => setMOre(!showMore)} className={`btn btn-info w-[150px] text-left ${chefs.length <= 3 ? 'block' : 'hidden'}`} ><span>show more</span> <span ><img className='w-[24px] myArrow' src="https://i.ibb.co/ky77r49/images-2-1.png" alt="" />

                            </span> </button>
                        </div>
                    </div>

                    {
                        loading ? <Loading></Loading> : chefs.map(chef =>
                            <ChefCard
                                key={chef.id}
                                chef={chef}
                            ></ChefCard>)
                    }
                </div>
            </LazyLoad>

            <LazyLoad width={"100%"} height={"100%"} threshold={0.99}>
                <div className='md:flex justify-center items-center w-full'>
                    {
                        loading ? <Loading></Loading> : <div className='w-full'>
                            <PopularCategories></PopularCategories>
                        </div>
                    }
                </div>
            </LazyLoad>
            <LazyLoad width={"100%"} height={"100%"} threshold={0.99}>
                    <Reviews></Reviews>
            </LazyLoad>
            <LazyLoad width={"100%"} height={"100%"} threshold={0.99}>
                <div className='mt-[80px]'>
                    {
                        loading ? <Loading></Loading> : <PopularChef></PopularChef>
                    }
                </div>
            </LazyLoad>

        </div>

    );
};

export default Home;