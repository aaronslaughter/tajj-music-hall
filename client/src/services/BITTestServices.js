import { BITClient } from "./index";

export const GetEvents = async () => {
  try {
    let example = 'Red Hot Chili Peppers'
    const response = await BITClient.get(`/artists/${example}/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    return response.data
  } catch (error) {
    throw error
  }
}
