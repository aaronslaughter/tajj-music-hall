import React, { useState } from 'react'
import { LogInUser } from '../services/Auth'

export default function LogIn(props) {
   const [formValues, setFormValues] = useState({ email: '', password: '' })

   const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await LogInUser(formValues)
      setFormValues({ email: '', password: '' })
      props.setUser(payload)
      props.toggleAuthenticated(true)
      props.fetchFavoriteEvents(payload.id)
      props.setPop(!props.pop)
      props.notifyLogin()
   }

   return (
      <div className="login col">
         <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
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
               <button disabled={!formValues.email || !formValues.password}>
                  Log In
               </button>
            </form>
         </div>
      </div>
   )
}
