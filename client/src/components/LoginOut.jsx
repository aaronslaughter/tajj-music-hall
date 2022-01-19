import e from 'cors';
import { useRef, useState } from 'react'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import '../styles/LogInOut.css'

function LogInOut (props){
  const [form, setForm] = useState(false)
  const close = useRef()

  function handleClick(){
    setForm(!form)
  }

  function closePop(e){
    console.log(props)
    if(close.current === e.target){ props.setPop(!props.pop)}
  }

  let display
  form ? display=<LogIn/> : display=<Register/>
  let text
  form ? text=<p className='p' onClick={handleClick}>Need to create a new account</p>:text=<p onClick={handleClick}>Already have an account</p>

  return(
  <div className="pop" ref={close} onClick={closePop}>
    <div className="popUpForm">
      {display}
      {text}
    </div>

  </div>)

}

export default LogInOut;