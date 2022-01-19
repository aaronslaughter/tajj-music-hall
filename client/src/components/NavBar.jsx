import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo-8.jpg'
import BrandText from '../assets/BrandText-9.png'
import '../styles/Nav.css'


export default function NavBar({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.name}!</h3>
        <NavLink to="/homepage" id="navItem">HOME</NavLink>
        <NavLink to='/events' id="navItem">EVENTS</NavLink>
        <NavLink to='/profile' id="navItem">PROFILE</NavLink>
        <NavLink to='/update'>Update</NavLink>

        <NavLink onClick={handleLogOut} to="/" id="navItem">LOG OUT</NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/homepage" id="navItem">HOME</NavLink>
      <NavLink to='/events' id="navItem">EVENTS</NavLink>
      <NavLink to="/register" id="navItem">SIGN-UP</NavLink>
      <NavLink to="/login" id="navItem">LOG-IN</NavLink>
      <NavLink to='/update'>Update</NavLink>

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
