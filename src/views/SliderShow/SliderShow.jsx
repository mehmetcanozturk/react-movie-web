import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import { MovieDb } from "../../services/movie_db";

// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper";
import "./SliderShow.scss";

function SliderShow(props) {

  const imagePath = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    MovieDb.getMovies(props.category, setMovies,setFetching);

  }, [])



  return (
    <Swiper
      direction={"vertical"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={false}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination, Autoplay]}
      className="slider-show-swiper"
    >
      {
        movies.map((data, index) => {
          return <SwiperSlide key={index}>
            <div className="swipper-container">
              <div className="image-container">
                <img src={imagePath + data.backdrop_path} alt="" />
              </div>
              <div className="detail-container">
                <div className="swipper-title">{data.title}</div>
                <div className="swipper-overview">{data.overview}</div>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
}
export default SliderShow;