import React, { useEffect, useState } from 'react';
import { MovieDb } from '../../services/movie_db';
import SliderCarousel from '../SlideCarousel/SliderCarousel';
import SliderShow from '../SliderShow/SliderShow';


function Content() {
    

    return (
        <>
            <SliderShow category={MovieDb.Categories.NOW_PLAYING}/>
            <SliderCarousel title="Popüler Filmler" category={MovieDb.Categories.POPULAR} />
            <SliderCarousel title="En Çok Oy Alan Filmler" category={MovieDb.Categories.TOP_RATED} />
            <SliderCarousel title="Vizyondaki Filmler" category={MovieDb.Categories.NOW_PLAYING} />
            <SliderCarousel title="Vizyona Girecek Filmler" category={MovieDb.Categories.UPCOMING} />
        </>
    )
}

export default Content