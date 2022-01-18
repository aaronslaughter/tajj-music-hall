import { 
  GET_ALL_COMMENTS,
  GET_ATTENDEES, 
  GET_EVENT_DETAILS, 
  IS_EVENT_FAVORITE,
  UPDATE_NEW_COMMENT } from "../types"

const initialState = {
  details: null,
  isFavorite: true,
  attendees: [],
  comments: [],
  newComment: ''
}

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS:
      return { ...state, details: action.payload }
    case IS_EVENT_FAVORITE:
      return { ...state, isFavorite: action.payload }
    case GET_ATTENDEES:
      return { ...state, attendees: action.payload }
    case UPDATE_NEW_COMMENT:
      return { ...state, newComment: action.payload }
    case GET_ALL_COMMENTS:
      return { ...state, comments: action.payload }
    default:
      return { ...state }
  }
}

export default EventReducer
