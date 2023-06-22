import React from 'react';

const Error = () => {
    return (
        <div className='bg-white flex flex-col md:flex-row md:flex justify-center items-center w-full md:h-[800px] h-[500px] gap-[200px]'>
            <div><img src="https://i.ibb.co/xhrNFBQ/404.png" alt="" /></div>
            <div>
                <h1 className='text-[100px] font-semibold'>404</h1>
                <p className='text-[22px]'>Not Found!!!</p>
                <p>The Resource Request Cannot Be Found On This Server</p>
            </div>
        </div>
    );
};

export default Error;