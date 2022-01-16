import Axios from 'axios'
import { BASE_URL, BIT_URL, AUTH_URL } from '../globals'

export const BITClient = Axios.create({ baseURL: `${BIT_URL}` })

export const AUTHClient = Axios.create({ baseURL: AUTH_URL })
AUTHClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
