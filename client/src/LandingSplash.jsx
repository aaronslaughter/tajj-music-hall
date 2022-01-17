import React from 'react'
import TajjMuHall from '../src/videos/TajjMuHall.mov'


export default function LandingSplash() {
  return (
    <div>
      WHAT EVENT ARE YOU GOING TO NEXT?
      <div className='travel'>
        <video loop autoPlay src={TajjMuHall} width="750" height="500" >
        </video>
      </div >
      {/*TODO: add splash image*/}
    </div>
  )
}