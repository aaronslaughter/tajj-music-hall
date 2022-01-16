import { RESET_SEARCH_RESULTS, SEARCH_EVENTS, UPDATE_SEARCH_TERM } from "../types"

const initialState = {
  searchTerm: '',
  events: null,
  searched: false
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload, events: null , searched: false }
    case SEARCH_EVENTS:
      return { ...state, events: action.payload, searched: true }
    case RESET_SEARCH_RESULTS:
      return { ...state, events: null }
    default:
      return { ...state }
  }
}

export default SearchReducer
