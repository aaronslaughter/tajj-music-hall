import pic1 from './landingPic.jpg'
import BigLogo from './LogoLandingPage-8.png'
import BrandText from './BrandText-8.png'
import '../styles/HomePage.css'


const homePage = () => {
  return (
    <div className='homePage'>
      <div className='Top'>
        <img src={pic1} alt='Concert_picture' id="pic1"/>
        <div className='TopOver'>
          <img src={BigLogo} alt='BigLogo' id="BigLogo"/>
          <div  id="BrandText">
            <img src={BrandText} alt='BrandText'  id="BrandText"/>
            <button className='actionButton'>Login</button>
          </div>
        </div>
      </div>
      <h1>FOLLOW YOUR FAVOURITE <br></br> STARS ON TOUR</h1>
    </div>
  )
}

export default homePage
