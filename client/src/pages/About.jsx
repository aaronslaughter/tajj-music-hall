import React from 'react';
import TajjMuHall2 from '../videos/TajjMuHall2.mov'
import { Link } from 'react-router-dom'
import '../styles/About.css'


export default function About() {
   return (
      <div className='about_page'>
         <p className='about_text'>TAJJ Music Hall is a concert event social app, essentially geared towards assistance with finding music events and locating other users that will attend the same function. Users can access this large database whenever they need to find a local event and meet-up with friends, or even strangers with similar tastes in music.</p>
         <div className='tajj_vid'>
            <Link to='/'><video autoPlay muted src={TajjMuHall} width="750" height="500" controls>
            </video></Link>
         </div >
      </div>
   )
}