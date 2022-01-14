import { TEST_GET_EVENTS } from "../types";

const initialState = {
  events: []
}

const BITTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_GET_EVENTS:
      return { ...state, events: action.payload }
    default:
      return { ...state }
  }
}

export default BITTestReducer
