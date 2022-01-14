import Axios from 'axios'
import { BASE_URL, BIT_URL } from '../globals'

export const BITClient = Axios.create({ baseURL: `${BIT_URL}`})
