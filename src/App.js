import React from 'react'
import {BrowserRouter as  Router,Routes,Route,} from "react-router-dom";
import Home from './pages/Home';
import Room from './pages/Room';
import {Services } from './pages/Services'
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Table from './pages/Table';
// import Footer from './pages/Footer';
import './App.css';
const App = () => {
  return (
   <>
   <Router>
   <Navbar/>
  
<Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/room' element={<Room/>} ></Route>
      <Route path='/services'element={<Services/>} ></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
</Routes>

</Router>
     
    
    
   </>
  )
}

export default App
