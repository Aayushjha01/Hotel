import './services.css'
import img1 from '../images/b9.jpg'
import refresh from '../images/b10.png'
import b11 from '../images/b11.png'
import { Readmore } from './Readmore.js'

export const Services = () => {
  return (
    <>
    <div className="about">
      <div className="card">
        <img src={img1} alt=""/>
        <h2 id="head">Food Service / Guest aminities </h2>
         <Readmore>
         Welcome To Hotel Bhanu Plaza
Offering extraordinary accommodations, the Plaza’s guest rooms feature a beautiful decor, which provides a unique experience for our guests.
Guest amenities including room lunch & dinner services (if requested, at 
          additional cost) 
         </Readmore>
      </div>
      <div className="card">
        <img src={refresh} alt=""/>
        <h2 id="head">Parking </h2>
        <Readmore>
        Bhanu Chowk neighborhood convenient to business centers and city attractions; walking distance to restaurants and shopping 
	Parking is available for bikes. Cars can park in front of the hotel on the road
        </Readmore>
      </div>
      <div className="card">
        <div className="image"> <img src={b11} alt=""/></div>
       
        <h2 id="head">Room Service</h2>
        <Readmore>
        Guest amenities including room lunch & dinner services (if requested, at 
          additional cost) 
	Additional guest amenities including room tea/coffee services, iron/ironing board, laundry and dry cleaning services (at additional costs)
  
        </Readmore>
      </div>
    </div>
    </>
  )
}
