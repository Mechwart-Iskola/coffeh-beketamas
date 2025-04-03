import React, { useEffect, useState } from 'react'
import PopularCard from '../popularCard/popularCard'
import './popular.css'

export type Popular = {
  name: string,
  description : string,
  price: string,
  image: string
}

const Popular = () => {
  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  const [populars, setPopulars] = useState<Popular[]>([])

  useEffect( () => {
    fetch("popular.json").then(x => x.json()).then(y => setPopulars(y))
  },[])


  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <div className='popular'>
      <p className='section__title '>POPULAR CREATIONS</p>
      <div className='popular__coffes'>
        {populars.map(x => <PopularCard {...x}/>)}
      </div>
    </div>
  )
}

export default Popular
