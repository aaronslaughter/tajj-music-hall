import { AUTHClient } from './index'


export const LogInUser = async (data) => {
   try {
      const res = await AUTHClient.post('/login', data)
      // Set the current signed in users token to localstorage
      localStorage.setItem('token', res.data.token)
      return res.data.user
   } catch (error) {
      throw error
   }
}

export const RegisterUser = async (data) => {
   try {
      const res = await AUTHClient.post('/register', data)
      return res.data
   } catch (error) {
      throw error
   }
}

export const UpdateUser = async (data, user_id) => {
   try {
      const respond = await AUTHClient.put(`/update/${user_id}`, data)
      return respond.data
   } catch (error) {
      throw error
   }
}

export const CheckSession = async () => {
   try {
      // Checks if the current token if it exists is valid
      const res = await AUTHClient.get('/session')
      return res.data
   } catch (error) {
      throw error
   }
}
