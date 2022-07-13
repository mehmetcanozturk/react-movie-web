import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../../components/Card/Card'

// Import Swiper styles
import "swiper/css";

import "./SliderCarousel.scss";

function SliderCarousel(props) {
  return (
    <div className="carousel-container">
      <h3>
            {props.title}
      </h3>
      <div className='carousel-cards'>      <div className='cards'>
      <Swiper watchSlidesProgress={true} slidesPerView={7} className="mySwiper">
      {
                props.list.map((data)=>{
                   return <SwiperSlide><Card data={data}/></SwiperSlide>
                })
            }

      </Swiper>
      </div>
      </div>


    </div>
  );
}
export default SliderCarousel