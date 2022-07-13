import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from '../../components/Card/Card'

// Import Swiper styles
import "swiper/css";

import "./SliderCarousel.scss";
import { MovieDb } from "../../services/movie_db";

function SliderCarousel(props) {

  const [movies, setMovies] = useState([])
    
  useEffect(()=>{
    MovieDb.getMovies(props.category,setMovies);
  },[])

  return (
    <div className="carousel-container">

      <div className='carousel-cards'>
      <div className="carousel-container-title">
            {props.title}
      </div>
        <div className='cards'>

      <Swiper watchSlidesProgress={true} slidesPerView={7} className="mySwiper">
      {
                movies.map((data,index)=>{
                   return <SwiperSlide key={index}><Card data={data}/></SwiperSlide>
                })
            }

      </Swiper>
      </div>
      </div>


    </div>
  );
}
export default SliderCarousel