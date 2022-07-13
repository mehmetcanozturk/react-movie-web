import React from 'react'
import Card from '../../components/Card/Card'
import './SliderCarousel.scss'

function SliderCarousel(props) {
  return (
    <div className='carousel-container'>
        <div className='title'>
            {props.title}
        </div>
        <div className='cards'>
            {
                props.list.map((data)=>{
                   return <Card data={data}/>
                })
            }
        </div>
    </div>
  )
}

export default SliderCarousel