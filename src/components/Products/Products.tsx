import React, { useEffect, useState } from 'react'
import './products.css'
import ProductCard from '../productCard/ProductCard'

export type Product = {
  name:string,
  price: number,
  image: string
}

const Products = () => {
  
  {/*Fetcheld be a products.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=>{
    fetch("products.json").then(res => res.json()).then(data => setProducts(data))
  },[])

  {/*Hozz létre egy productCard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <div className='products'>
      <h1 className='section__title'>THE MOST REQUESTED</h1>
      <div className='products__container'>
          {products.map(x => <ProductCard {...x}/>)}
      </div>
    </div>
  )
}

export default Products
