import React from 'react';
import { MovieDb } from '../../services/movie_db';
import SliderCarousel from '../../views/SlideCarousel/SliderCarousel';
import SliderShow from '../../views/SliderShow/SliderShow';


function Content() {


    return (
        <>
            <SliderShow category={MovieDb.Categories.NOW_PLAYING} />
            <SliderCarousel title="Popular" category={MovieDb.Categories.POPULAR} />
            <SliderCarousel title="Top Rated" category={MovieDb.Categories.TOP_RATED} />
            <SliderCarousel title="Now Playing" category={MovieDb.Categories.NOW_PLAYING} />
            <SliderCarousel title="Upcoming" category={MovieDb.Categories.UPCOMING} />
        </>
    )
}

export default Content