import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo-8.jpg'
import BrandText from '../assets/BrandText-9.png'
import '../styles/Nav.css'


export default function NavBar({ authenticated, user, handleLogOut, pop, setPop }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <NavLink to="/home" id="navItem">HOME</NavLink>
        <NavLink to='/events' id="navItem">EVENTS</NavLink>
        <NavLink to='/profile' id="navItem">PROFILE</NavLink>
        {/* <NavLink to='/update'>Update</NavLink> */}
        <NavLink onClick={handleLogOut} to="/home" id="navItem">LOG OUT</NavLink>
      </nav>
    )
  }
  function handleClickLogRegister(){
    setPop(!pop)
  }
  const publicOptions = (
    <nav>
      <NavLink to="/home" id="navItem">HOME</NavLink>
      <NavLink to='/events' id="navItem">EVENTS</NavLink>
      <button className="buttonNav" onClick={handleClickLogRegister}>SignUp / LogIn</button>
    </nav>
  )

  return (
    <header className='header'>
      <NavLink to="/">
        <img src={logo} alt="Tajj" id='navLogo' />
        <img src={BrandText} alt="Tajj" id='navLogo2' />
      </NavLink>
      <div className='navigation'>{authenticated && user ? authenticatedOptions : publicOptions}</div>
    </header>
  )
}
