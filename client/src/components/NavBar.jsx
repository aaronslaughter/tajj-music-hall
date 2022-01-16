import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      {true ? <Link to='/login'>Login</Link> : <Link to='/profile'>Profile</Link>}
      {false ? <Link to='/register'>Register</Link>: ''}
      <Link to='/events'>Events</Link>
    </nav>
  )
}

export default NavBar
