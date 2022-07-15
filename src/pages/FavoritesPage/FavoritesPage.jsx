import React from 'react'
import Card from '../../components/Card/Card';
import { Favorites } from '../../static/Favorites'
import './FavoritesPage.scss'

function FavoritesPage() {
  const favorites = Favorites.getAllFavorites();

  return (
    <div className='favorites-page-container'>
      {
        favorites.map((data,index)=>{
          return <Card key={index} data={data} />
        })
      }
    </div>
  )
}

export default FavoritesPage