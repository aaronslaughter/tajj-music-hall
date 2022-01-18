import { useState } from 'react'
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import '../styles/LogInOut.css'

function LogInOut (){
  const [form, setForm] = useState(false)

  function handleClick(){
    setForm(!form)
  }

  let display
  form ? display=<LogIn/> : display=<Register/>
  let text
  form ? text=<p onClick={handleClick}>Need to create a new account</p>:text=<p onClick={handleClick}>Already have an account</p>

  return(
  <div className="pop">
    <div className="popUpForm">
      {display}
      {text}
    </div>

  </div>)

}

export default LogInOut;