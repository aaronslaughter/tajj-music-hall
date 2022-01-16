import { SearchEvents } from "../../services/BITServices"
import { SEARCH_EVENTS, UPDATE_SEARCH_TERM } from "../types"

export const UpdateSearchTerm = (newTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: newTerm
})

export const LoadEvents = (artist) => {
  return async (dispatch) => {
    try {
      const events = await SearchEvents(artist)

      dispatch({
        type: SEARCH_EVENTS,
        payload: events
      })
    } catch (error) {
      throw error
    }
  }
}

