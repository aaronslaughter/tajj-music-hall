import { FindAllEvents } from "../../services/BITServices"
import { UserHasEvent, GetUsersFromEvent, GetCommentsByEventCode } from "../../services/TAJJServices"
import { 
  GET_EVENT_DETAILS, 
  IS_EVENT_FAVORITE, 
  GET_ATTENDEES, 
  UPDATE_NEW_COMMENT, 
  GET_ALL_COMMENTS} from "../types"

export const LoadEvent = (artistName, eventCode) => {
  return async (dispatch) => {
    try {
      const response = await FindAllEvents(artistName)

      const artist = response[0].artist
      const event = response.find(element => element.id === eventCode)

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

export const IsFavorite = (userId, eventId) => {
  return async (dispatch) => {
    try {
      let hasEvent = await UserHasEvent(userId, eventId)

      dispatch({
        type: IS_EVENT_FAVORITE,
        payload: hasEvent
      })

    } catch (error) {
      throw error
    }
  }
}

export const GetAttendees = (eventCode) => {
  return async (dispatch) => {
    try {
      const response = await GetUsersFromEvent(eventCode)

      dispatch({
        type: GET_ATTENDEES,
        payload: response
      })
    } catch (error) {
      throw error
    }
  }
}

export const UpdateNewComment = (newComment) => ({
  type: UPDATE_NEW_COMMENT,
  payload: newComment
})


export const GetAllComments = (eventCode) => {
  return async (dispatch) => {
    try {
      let response = await GetCommentsByEventCode(eventCode)

      dispatch({
        type: GET_ALL_COMMENTS,
        payload: response
      })
    } catch (error) {
      throw error
    }
  }
}
