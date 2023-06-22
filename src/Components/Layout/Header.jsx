import React, { useContext, useEffect, useState } from 'react';
import Loading from './Loading';
import { AuthContext } from '../AuthProviders/AuthProvider';

const Header = () => {
  const { loading } = useContext(AuthContext)
  const [img, setImg] = useState(`url('https://i.ibb.co/PCBwmFM/banner-6.jpg')`)
  const [photo, setPhoto] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 5000)
    return () => {
      clearInterval(interval);
    }
  }, [photo]);

  const change = () => {
    if (photo === 4) {
      setPhoto(1);
      return;
    }
    setPhoto((prev) => {
      return prev = prev + 1
    })
    switch (photo) {
      case 1:
        return setImg(`url('https://i.ibb.co/YXy2y6Q/top-view-food-frame-with-copy-space.jpg')`);
      case 2:
        return setImg(`url('https://i.ibb.co/pRbtvzs/top-view-delicious-meat-pie-dark-surface.jpg')`);
      case 3:
        return setImg(`url('https://i.ibb.co/jbYnCWZ/falafel-hummus-pita-middle-eastern-arabic-dishes-1.jpg')`);
      default:
        return null;
    }
  }

  return (
    <div className='bg bg-transparent' style={{ backgroundImage: `${img}` }}>
<div >
        <div className=' md:flex text-cyan-100 mx-[100px] py-[140px]  gap-5 justify-center items-center'>
          <div className='w-full'><img className='rounded-lg pic-anime w-[800px] h-[650px]' src="https://i.ibb.co/PCBwmFM/banner-6.jpg" alt="no cover found" />
          </div>
          <div className='w-[80%] move-right'>
            <div className='font-semibold text-lime-100'>
              <h1 className='text-[85px]'>Deshi Khabar E Beshi SHaad</h1>
            </div>
            <div className='font-semibold text-lime-50 text-[20px]'>
              <p className=''>Welcome to our food recipe website, where you'll find an extensive collection of delicious recipes to inspire your culinary creativity. From quick and easy weeknight dinners to impressive meals for special occasions, our recipes are carefully curated to provide a diverse range of flavors and styles. With detailed instructions, helpful tips, and mouthwatering photos, we make it easy for you to prepare tasty meals that your friends and family will love. So come on in, explore our recipe archive, and start cooking up something delicious today!</p>
            </div>
            <div><button className='btn btn-info mt-5'>click me...</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;