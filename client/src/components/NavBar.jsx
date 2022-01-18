import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './Logo-8.jpg'
import '../styles/Nav.css'


export default function NavBar({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.name}!</h3>
        <NavLink to="/" id="navItem">HOME</NavLink>
        <NavLink to='/events' id="navItem">EVENTS</NavLink>
        <NavLink to='/profile' id="navItem">PROFILE</NavLink>
        <NavLink onClick={handleLogOut} to="/" id="navItem">LOG OUT</NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/" id="navItem">HOME</NavLink>
      <NavLink to='/events' id="navItem">EVENTS</NavLink>
      <NavLink to="/register" id="navItem">SIGN-UP</NavLink>
      <NavLink to="/login" id="navItem">LOG-IN</NavLink>
    </nav>
  )

  return (
    <header className='header'>
      <NavLink to="/">
          <img src={logo} alt="Tajj" id='navLogo'/>
      </NavLink>
      <div className='navigation'>{authenticated && user ? authenticatedOptions : publicOptions}</div>
    </header>
  )
}
