import React from 'react'
import { Link } from 'react-router-dom'
import TajjMuHall from '../src/videos/TajjMuHall.mov'


export default function LandingSplash() {


  return (

    <div className='tajj_vid'>
      <Link to='/home'><video autoPlay muted loop src={TajjMuHall} width="100%">
      </video></Link>
    </div >
  )
}