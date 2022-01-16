import { BITClient } from './index';

export const GetEvents = async () => {
  try {
    let events = []
    let response = await BITClient.get(`/artists/Adele/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    
    events.push(response.data[0])
    response = await BITClient.get(`/artists/Dua Lipa/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    events.push(response.data[0])
    response = await BITClient.get(`/artists/Olivia Rodrigo/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    events.push(response.data[0])
    response = await BITClient.get(`/artists/The Weeknd/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    events.push(response.data[0])
    response = await BITClient.get(`/artists/Luke Combs/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    events.push(response.data[0])
    response = await BITClient.get(`/artists/Justin Bieber/events/?app_id=${process.env.REACT_APP_BIT_API_KEY}`)
    events.push(response.data[0])
    
    events.forEach((element) => {
      let date = new Date(element.datetime)
      element.datetime = date.toDateString()
    })

    return events
  } catch (error) {
    throw error
  }
}