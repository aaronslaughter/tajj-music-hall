import React, { useState } from 'react'
import { UpdateUser } from '../services/Auth'

const iState = {
   oldPassword: '',
   newPassword: '',
   confirmNewPassword: ''
}

export default function Update(props) {

   const [formValues, setFormValues] = useState({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
   })


   const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await UpdateUser(formValues, props.user.id)
      setFormValues({
         oldPassword: '',
         newPassword: '',
         confirmNewPassword: ''
      })
      props.handleLogOut()
      props.history.push('/login')
   }

   return (
      <div className="update">
         <div className="card-overlay centered">
            <form className="col" onSubmit={handleSubmit}>
               <div className="input-wrapper">
                  <label htmlFor="old_password">Old Password</label>
                  <input
                     onChange={handleChange}
                     name="oldPassword"
                     type="password"
                     placeholder="Old Password"
                     value={formValues.oldPassword}
                     required
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="new_password">New Password</label>
                  <input
                     onChange={handleChange}
                     type="password"
                     name="newPassword"
                     value={formValues.newPassword}
                     required
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="confirmNewPassword">Confirm New Password</label>
                  <input
                     onChange={handleChange}
                     type="password"
                     name="confirmNewPassword"
                     value={formValues.confirmNewPassword}
                     required
                  />
               </div>
               <button
                  disabled={
                     !formValues.oldPassword ||
                     (!formValues.newPassword &&
                        formValues.confirmNewPassword === formValues.password)}>
                  Confirm
               </button>
            </form>
         </div>
      </div>
   )
}

