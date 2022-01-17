import { FindAllEvents } from "../../services/BITServices"
import { GET_EVENT_DETAILS } from "../types"

export const LoadEvent = (artistName, eventId) => {
  return async (dispatch) => {
    try {
      const response = await FindAllEvents(artistName)

      const artist = response[0].artist
      const event = response.find(element => element.id === eventId)

      dispatch({
        type: GET_EVENT_DETAILS,
        payload: {
          artist,
          event
        }
      })
    } catch (error) {
      dispatch({
        type: GET_EVENT_DETAILS,
        payload: null
      })
      throw error
    }
  }
}
