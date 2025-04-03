import React, { useState } from 'react'
import { useEffect } from 'react'
import './header.css'
import "remixicon/fonts/remixicon.css";


const Header = () => {

    {/*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */}

    {/* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */}

     {/*
     Használd hozzá ezt a kódot
     useEffect(()=>{
     const handleScroll = () => {
        setHasShadow(window.scrollY >= 50);
       }; 
       window.addEventListener("scroll", handleScroll);
       },[])
    */}

    const [hasShadow, setHasShadow] = useState(false)

    const[showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(()=>{
        const handleScroll = () => {
           setHasShadow(window.scrollY >= 50);
          }; 
          window.addEventListener("scroll", handleScroll);
          },[])

    

    {/*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/}
        
    {/*A szükséges css osztályokat megtalálod a header.css - ben.*/}

    {/*Mobil nézetben jobb felső sarokban legyen egy toggle aminek hatására legördül a menu.*/}

    {/*Mobil nézetben a legördült menüben legyen egy X amivel visszagördül a menü*/}

    {/*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/}

    {/*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */}

    {/*close ikon osztálya: ri-close-large-line */}

    {/*toggle ikon osztálya: ri-apps-2-fill */}

    return(
        <div className = {hasShadow ? 'header shadow-header' : 'header'}>
            <nav>
            <a href="" className='nav__logo'>STARCOFFE</a>
                <div className = {showMenu ? 'show-menu nav__menu' : 'nav__menu'}>

                    <ul className='nav__list'>
                        <li><a href="" className='nav__link '>HOME</a></li> 
                        <li><a href="" className='nav__link '>POPULAR</a></li> 
                        <li><a href="" className='nav__link '>ABOUT US</a></li> 
                        <li><a href="" className='nav__link '>PRODUCTS</a></li> 
                        <li><a href="" className='nav__link '>CONTACT</a></li> 
                    </ul>
                </div>
                <div className= {showMenu ? 'nav__close' : 'nav__toggle'}>
                    <i className= {showMenu ? 'ri-close-large-line' :'ri-apps-2-fill '} onClick={() =>setShowMenu(prev => !prev)}></i>
                </div>
            </nav>
        </div>
    )
}

export default Header
