import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.name}!</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink onClick={handleLogOut} to="/">Log Out</NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to='/events'>Events</NavLink>
    </nav>
  )

  return (
    <header>
      <NavLink to="/">
        <div className="logo-wrapper" alt="logo">
          {/* <img
            className="logo"
            src="https://.com or img file.svg"
            alt="logo description"
          /> */}
        </div>
      </NavLink>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}
