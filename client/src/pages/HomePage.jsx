import pic1 from '../assets/landingPic.jpg'
import BrandText from '../assets/BrandText-8.png'
import '../styles/HomePage.css'
import React  from 'react'
import DiscoverEvents from '../components/DiscoverEvents'
import'../styles/Nav.css'

import BigLogo from '../assets/LogoLandingPage-8.png'



const HomePage = (props) => { 
  function handleClick(){
    props.setPop(!props.pop)
  }
  function handleClick2(){
    props.history.push('/events')

  }
  
  return (
    <div className='homePage'>
      <div className='Top'>
        <img src={pic1} alt='Concert_picture' id="pic1"/>
        <div className='homeRender'>
          <img src={BigLogo} alt='BigLogo' id="BigLogo"/>

          <div  id="homeBox">
            <img  className="BrandText" src={BrandText}/>
            <h1 className='BrandTextInfo'>FOLLOW YOUR FAVOURITE  STARS ON TOUR</h1>
            {props.user === null ?<button className='actionButton' onClick={handleClick}>Get Started</button> : <button className='actionButton' onClick={handleClick2}>All Events</button>}
          </div>
        </div>
      </div>
     
      {/* <DiscoverEvents/> */}
    </div>
  )
}

export default HomePage
