import React from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import Content from './pages/Content/Content';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import Navbar from './views/navbar/Navbar';




function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='/favorites' element={<FavoritesPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
