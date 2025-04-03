import React from 'react'
import { Popular } from '../Popular/Popular'
import './popularcard.css'

const PopularCard = (props: Popular) => {
  return (
    <div className='popular__card'>
        <div className='popular__images'>
            <div className='popular__shape'></div>
            <img src='/img/bean-img.png' className='popular__bean-1'></img>
            <img src='/img/bean-img.png' className='popular__bean-2'></img>
            <img className='popular__coffee' src={props.image} alt={props.name} />
        </div>
            <div className='popular__data'>
                <p className='popular__name'>{props.name}</p>
                <p className='popular__description'>{props.description}</p>
                <a href="" className='button'>Order now: {props.price}</a>
            </div>
    </div>
  )
}

export default PopularCard