import React from 'react';
import TajjMuHall2 from '../videos/TajjMuHall2.mov'
import { Link } from 'react-router-dom'
import '../styles/About.css'
import Tajj_team from '../videos/Tajj_team.png'

export default function About() {
   return (
      <div className='about_page'>
         <p className='about_text1'>TAJJ Music Hall is a concert/event locator, planner and social app, with a huge library of concert venues that users can access anywhere.</p>
         <p className='about_text2'>Tajj Mu'Hall is geared towards finding music events and locating other users that will attend the same function.</p>
         <p className='about_text3'>Users can access this large database whenever they need to find a local event and meet-up with friends, or even strangers with similar tastes in music.</p>
         <div className='tajj_vid'>
            <Link to='/'><video autoPlay muted src={TajjMuHall2} width="750" height="500" controls>
            </video></Link>
            <br></br>
            <div>
               <p className='about_pT'><b><i>Terra Smith</i></b> - Music & video technician; Authentication correlation; README resolution; troubleshooting and debugging assistance.</p>
               <p className='about_pA'><b><i>Aaron Slaughter</i></b> - React App front-end Redux coordinator; Github management; troubleshooting and debugging extraordinaire.</p>
               <p className='about_pJa'><b><i>Jane Wang</i></b> - Server side Back-end Specialist; Profile Guru; troubleshooting and debugging helper.</p>
               <p className='about_pJu'><b><i>Julio Rodriguez</i></b> - Creator of the pop up windows and all things Design; Front-end, back-end, troubleshooting and debugging.</p>
            </div>
            <div>
               <img src={Tajj_team} width="450" height="270" alt="Tajj Team" />
            </div>


         </div >
      </div>
   )
}