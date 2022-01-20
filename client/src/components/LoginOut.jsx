import e from 'cors';
import { useRef, useState } from 'react'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import '../styles/LogInOut.css'
import BWLogo from '../assets/BWlogoBlack-8.png'


function LogInOut (props){
  const [form, setForm] = useState(false)
  const close = useRef()

  function handleClick(){
    setForm(!form)
  }

  function closePop(e){
    if(close.current === e.target){ props.setPop(!props.pop)}
  }

  let display
  form ? display=<LogIn {...props} /> : display=<Register  {...props} setForm={setForm} form={form}/>
  let text
  form ? text=<p className='p' onClick={handleClick}>Need to create a new account</p>:text=<p className='p' onClick={handleClick}>Already have an account</p>

  return(
  <div className="pop" ref={close} onClick={closePop}>
    <div className="popUpForm">
    <img className="BWlogo"src={BWLogo}/>

      {display}
      {text}
    </div>

  </div>)

}

export default LogInOut;