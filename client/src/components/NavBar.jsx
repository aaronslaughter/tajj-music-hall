import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar({ authenticated, user, handleLogOut }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <NavLink onClick={handleLogOut} to="/">
          Log Out
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/events'>Events</NavLink>
    </nav>
  )

  return (
    <header>
      <NavLink to="/">
        <div className="logo-wrapper" alt="logo">
          <img
            className="logo"
            src="https://.com or img file.svg"
            alt="logo description"
          />
        </div>
      </NavLink>
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
}

//  const NavBar = () => {
//   return (
//     <nav>
//       <Link to='/'>Home</Link>
//       {true ? <Link to='/login'>Login</Link> : <Link to='/profile'>Profile</Link>}
//       {false ? <Link to='/register'>Register</Link>: ''}
//       <Link to='/events'>Events</Link>
//     </nav>
//   )
// }

// export default NavBar