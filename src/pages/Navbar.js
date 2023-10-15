import React, { useState } from 'react';
import  {Link } from 'react-router-dom';
import './navbar.css';
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
const Navbar = () => {
    const[Mobile,setMobile] = useState(false)
  return (
   <nav className="navbar">
    <h3 className="logo">Bhanu Plaza</h3>
    <ul className= {Mobile ? "nav-Links-mobile": "nav-Links"}  >
        <Link to ='/'><li>Home</li></Link>
        <Link to ='/room'><li>Room</li></Link>
        <Link to ='/services'><li>Services</li></Link>
        <Link to ='/about'><li>Pictures</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/table'><li>Table</li></Link>
       </ul>
     <button className='mobile-menu-icon'onClick={()=> setMobile(!Mobile)}>
    { Mobile ? <ImCross/>: <FaBars/> }
    </button>
    </nav>

  )
}

export default Navbar
