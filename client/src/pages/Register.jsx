import React, { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { LogInUser } from '../services/Auth'


const iState = {
   name: '',
   email: '',
   password: '',
   confirmPassword: ''
}

export default function Register(props) {
   const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
   })

   const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await RegisterUser({
         name: formValues.name,
         email: formValues.email,
         password: formValues.password
      })
      setFormValues(iState)

      alert('Your account has been created!')
      // async function logInNow(){
      //    const payload = await LogInUser(formValues)
      //    setFormValues({ email: '', password: '' })
      //    props.setUser(payload)
      //    props.toggleAuthenticated(true)
      //    props.history.push('/events')
      // }
      // logInNow()
      props.setForm(!props.form)
   }

   return (
      <div className="login col">
         <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
               <div className="input-wrapper">
                  <label htmlFor="name">Name</label>
                  <input
                     onChange={handleChange}
                     name="name"
                     type="text"
                     placeholder="First Last"
                     value={formValues.name}
                     required
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                     onChange={handleChange}
                     name="email"
                     type="email"
                     placeholder="example@example.com"
                     value={formValues.email}
                     required
                  />
               </div>

               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                     onChange={handleChange}
                     type="password"
                     name="password"
                     value={formValues.password}
                     required
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                     onChange={handleChange}
                     type="password"
                     name="confirmPassword"
                     value={formValues.confirmPassword}
                     required
                  />
               </div>
               <button
                  disabled={
                     !formValues.email ||
                     (!formValues.password &&
                        formValues.confirmPassword === formValues.password)
                  }
               >
                  Sign Up
               </button>
            </form>
         </div>
      </div>
   )
}
