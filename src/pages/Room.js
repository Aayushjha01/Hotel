import React from 'react'
import './room.css'
import img1 from '../images/b2.jpg'
import img2 from '../images/b1.jpg'

const Room = () => {
  return (
    <div className="plate">
        <div className="plate1">
            <img src={img1}  alt="" />
            <h1>Single Bed</h1>
            <h4>Facilities</h4>
                <li>Attached Restrooms</li>
                <li>Custom designed furniture including tea table</li>
                <li>Tv and Free Wifi</li>
                 <li>Room Services including room tea/coffee services,
                    laundary and dry cleaning services
                 </li>
                 <button className="priceH">Rs 800 (US$ 6)</button>
        </div>
        <div className="plate2">
            <img src={img2} alt="" />
            <h1>Double Bed</h1>
            <h4>Facilities</h4>
                <li>Attached Restrooms</li>
                <li>Custom designed furniture including tea table</li>
                <li>Tv and Free Wifi</li>
                 <li>Room Services including room tea/coffee services,
                    laundary and dry cleaning services
                 </li>
                 <button className="priceH">Rs 1000 (US$ 8)</button>
        </div>
        <div className="plate3">
            <img src={img2} alt="" />
            <h1>Triple Bed</h1>
           
                <h4>Facilities</h4>
                <li>Attached Restrooms</li>
                <li>Custom designed furniture including tea table</li>
                <li>Tv and Free Wifi</li>
                 <li>Room Services including room tea/coffee services,
                    laundary and dry cleaning services
                 </li>
                 <button className="priceH">Rs 1300 (US$ 10)</button>
        </div>
    </div>
  )
}

export default Room