import React, { useEffect, useState } from 'react'
import "./LikeButton.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { Favorites } from '../../static/Favorites';

function LikeButton(props) {

  const [liked, setLiked] = useState(false);


  useEffect(() => {
    if (Favorites.IsFavorites(props.data)) {
      setLiked(true)
      console.log("like")
    }
    Favorites.likeList.push(
      {
        "id": props.data.id,
        "set": setLiked
      }
    );
  }, [])


  const like = () => {
    if (liked) {
      Favorites.removeFavorites(props.data);
      setLiked(false);
    }
    else {
      Favorites.addFavorites(props.data);
      setLiked(true);
    }
  }

  return (
    <div className='like-button-container' onClick={like} >
      {liked ? <FontAwesomeIcon className='solid' icon={solidHeart} /> : <FontAwesomeIcon className='regular' icon={faHeart} />}
    </div>
  )
}

export default LikeButton