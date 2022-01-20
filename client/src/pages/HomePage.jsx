import pic1 from '../assets/landingPic.jpg'
import BigLogo from '../assets/LogoLandingPage-8.png'
import BrandText from '../assets/BrandText-8.png'
import '../styles/HomePage.css'
import React  from 'react'
import DiscoverEvents from '../components/DiscoverEvents'




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
        <div className='TopOver'>
          <img src={BigLogo} alt='BigLogo' id="BigLogo"/>
          <div  id="BrandText">
            <img src={BrandText} alt='BrandText'  id="BrandText"/>
            {props.user === null ?<button className='actionButton' onClick={handleClick}>Get Started</button> : <button className='actionButton' onClick={handleClick2}>All Events</button>}
          </div>
        </div>
      </div>
      <h1>FOLLOW YOUR FAVOURITE <br></br> STARS ON TOUR</h1>
      {/* <DiscoverEvents/> */}
    </div>
  )
}

export default HomePage
