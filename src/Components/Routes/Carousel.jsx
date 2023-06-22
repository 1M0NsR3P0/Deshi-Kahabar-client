import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation,EffectFade, } from "swiper";
import "swiper/css/effect-fade";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";


export default () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation, EffectFade,]}
      className="mySwiper"
    >
      <SwiperSlide><img className=' rounded-full justify-center h-[700px]' src='	https://auditiondateandplace.com/news/wp-content/uploads/2020/06/Popular-Indian-Chef.jpg'></img></SwiperSlide>
      <SwiperSlide><img className=' rounded-full justify-center h-[700px]' src='	https://5.imimg.com/data5/GO/FS/HM/SELLER-91591789/north-indian-chef-jpg-500x500.jpg'></img></SwiperSlide>
      <SwiperSlide><img className=' rounded-full justify-center h-[700px]' src='https://im.rediff.com/getahead/2015/mar/27chef-ranveer-brar-1.jpg'></img></SwiperSlide>
      <SwiperSlide><img className= 'rounded-full justify-center h-[700px]' src='https://i.ibb.co/HG5RNWz/chef1.png'></img></SwiperSlide>
      
    </Swiper>
)}