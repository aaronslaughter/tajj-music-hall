import { SearchEvents } from "../../services/BITServices"
import { RESET_SEARCH_RESULTS, SEARCH_EVENTS, UPDATE_SEARCH_TERM } from "../types"

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
      dispatch({
        type: SEARCH_EVENTS,
        payload: null
      })
      throw error
    }
  }
}

export const ResetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS,
  payload: null
})
