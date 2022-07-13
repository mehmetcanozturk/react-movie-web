import React from 'react'
import './Card.scss'

function Card(props) {
    const imagePath="https://image.tmdb.org/t/p/w500";
  return (
    <div className='card-container'>
        <div className='image'>
            <img src={imagePath+props.data.poster_path} alt="" />
        </div>
        <div className='detail'>
            <div className='title'>{props.data.title}</div>
            <div className='vote'>{props.data.vote_average}</div>
        </div>
    </div>
  )
}

export default Card