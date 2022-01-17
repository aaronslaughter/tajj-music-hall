import { GET_EVENT_DETAILS } from "../types"

const initialState = {
  details: null
}

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS:
      return { ...state, details: action.payload}
    default:
      return { ...state }
  }
}

export default EventReducer
