import React from 'react'
import { Product } from '../Products/Products'
import './productcard.css'

const ProductCard = (props: Product) => {
  return (
    <div className='products__card'>
        <div className='products__image'>
            <div className='products__shape'>

            </div>
            <img className='products__coffe' src={props.image} alt={props.name}></img>
            <img src="/img/ice-img.png" className='products__ice-1' />
            <img src="/img/ice-img.png" className='products__ice-2' />
        </div>
        <div className='products__data'>
            <p className='products__name'>{props.name}</p>
            <p className='products__price'>{props.price}$</p>
            <img src='/img/favicon.png' className='products__button'></img>
        </div>
    </div>
  )
}

export default ProductCard