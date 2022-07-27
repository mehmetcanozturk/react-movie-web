import React from 'react'
import LikeButton from '../LikeButton/LikeButton';
import './Card.scss'


function Card(props) {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <div name={props.data.id} className='card-container'>
      <div className='image'>
        <img src={imagePath + props.data.poster_path} alt="" />
      </div>
      <div className='detail'>
        <div className='title'>{props.data.title}</div>
        <div className='vote'>{props.data.vote_average}</div>

      </div>
      <div className='likebtn'>
        <LikeButton data={props.data} />
      </div>
    </div>
  )
}

export default Card