import React, { useEffect, useState } from 'react';
import { MovieDb } from '../../services/movie_db';
import SliderCarousel from '../SlideCarousel/SliderCarousel';
import SliderShow from '../SliderShow/SliderShow';


function Content() {
    

    return (
        <>
            <SliderShow category={MovieDb.Categories.NOW_PLAYING}/>
            <SliderCarousel title="Sinemalarda" category={MovieDb.Categories.NOW_PLAYING} />
        </>
    )
}

export default Content