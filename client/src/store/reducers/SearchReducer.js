import { SEARCH_EVENTS, UPDATE_SEARCH_TERM } from "../types"

const initialState = {
  searchTerm: '',
  events: []
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload }
    case SEARCH_EVENTS:
      return { ...state, events: action.payload }
    default:
      return { ...state }
  }
}

export default SearchReducer
