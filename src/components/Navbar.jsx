import React from 'react'
import '../App.css'
import {  Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
    <div className="container">
      <div className="name">
        <Link to={'/'}>rentOmojo</Link>
      </div>
      <div className="search-box">
        <input type='text' placeholder="search here"/>
      </div>
      <div className="detail">
             <Link to={'/'} className="home">Home</Link>
             <Link to={'About'} className="about">About</Link>
             <div className="contact">Contact</div>
      </div>
      <div className="cart">
        <NavLink to={'Cart'} className='add'>Cart</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar
