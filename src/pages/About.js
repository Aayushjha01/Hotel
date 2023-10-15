import React from 'react'
import i1 from '../images/b7.jpg'
import i2 from '../images/b6.jpg'
import i3 from '../images/b5.jpg'
import i4 from '../images/b4.jpg'
import i5 from '../images/b3.jpg'
import i6  from '../images/b2.jpg'
import i7 from '../images/b1.jpg'
import './about.css'

const About = () => {
  return (
    <div className="services">
      <div className="photo">
        <img src={i1} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i2} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i3} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i4} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i5} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i1} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i6} alt="" width="300px" height="200px" />
      </div>
      <div className="photo">
        <img src={i7} alt="" width="300px" height="200px" />
      </div>
    </div>
  )
}

export default About
