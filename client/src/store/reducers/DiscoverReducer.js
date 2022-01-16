import { DISCOVER_EVENTS } from "../types";

const initialState = {
  events: []
}

const DiscoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER_EVENTS:
      return { ...state, events: action.payload }
    default:
      return { ...state }
  }
}

export default DiscoverReducer
