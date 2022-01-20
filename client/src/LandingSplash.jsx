import React from 'react'
import { Link } from 'react-router-dom'
import TajjMuHall from '../src/videos/TajjMuHall.mov'


export default function LandingSplash() {

  //onclick go to homepage

  return (

    <div className='tajj_vid'>
      <Link to='/home'><video autoPlay muted loop src={TajjMuHall} width="100%">
      </video></Link>
    </div >
  )
}

// <Link to="/signup" className="btn btn-primary">Sign up</Link>