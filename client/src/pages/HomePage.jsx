import pic1 from '../assets/landingPic.jpg'
import BigLogo from '../assets/LogoLandingPage-8.png'
import BrandText from '../assets/BrandText-8.png'
import '../styles/HomePage.css'
import React  from 'react'
import { useState } from 'react'
import LogInOut from '../components/LoginOut'
import DiscoverEvents from '../components/DiscoverEvents'




const HomePage = () => {
  const [pop, setPop] = useState (false)


  function handleClick(){
    setPop(!pop)
  }
  return (
    <div className='homePage'>
        {!pop ? null : (
        <LogInOut pop={pop} setPop={setPop}/>
      )}
      <div className='Top'>
        <img src={pic1} alt='Concert_picture' id="pic1"/>
        <div className='TopOver'>
          <img src={BigLogo} alt='BigLogo' id="BigLogo"/>
          <div  id="BrandText">
            <img src={BrandText} alt='BrandText'  id="BrandText"/>
            <button className='actionButton' onClick={handleClick}>Get Started</button>
          </div>
        </div>
      </div>
      <h1>FOLLOW YOUR FAVOURITE <br></br> STARS ON TOUR</h1>
      <DiscoverEvents/>
    </div>
  )
}

export default HomePage
