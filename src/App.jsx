import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './views/navbar/Navbar';
import SliderCarousel from './views/SlideCarousel/SliderCarousel';


function App() {
  const [movies,setMovies]=useState([])
  const apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3a01017aaf287e88713b7c8edd51e903&language=en&page=1';
    useEffect(() => {
      fetch(apiURL).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        setMovies(data.results)
      });
    }, []);
  return (
    <div className="App">
      <Navbar/>
      <SliderCarousel title="Filmler" list={movies}/>
    </div>
  );
}

export default App;
