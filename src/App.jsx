import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import { MovieDb } from './services/movie_db';
import Content from './views/Content/Content';
import Navbar from './views/navbar/Navbar';
import SliderShow from './views/SliderShow/SliderShow';



function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
