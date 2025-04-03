import './home.css'
import { homeImages } from '../../data/data'

const Home = () => {
  {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/}
    
  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/}

  {/*A kép hátterében egy alakzat van.*/}

  {/*A gomb mutasson az about részre */}

  {/*Egészítsd ki a hiányzó részekkel (osztálynevek végig hiányoznak)*/}
  return (
    <div className="home" id="home">        
            <h1 className="home__title">COLD COFFEE</h1>

            <div className='home__images'>
                <div className='home__shape'>
                </div>
                {homeImages.map(x => <img className={x.className} src={x.src} alt={x.alt}></img>)}
            </div>

          <img className='home__sticker' src="/img/home-sticker.svg" alt="" />
        <div className='home__data'>
            <p className="home__description ">
                Find delicious hot and cold coffees with the
                best varieties, calm the pleasure and enjoy
                a good coffee, order now.
            </p>
            <a href="" className="button">Learn More</a>
        </div>        
    </div>
  )
}

export default Home
