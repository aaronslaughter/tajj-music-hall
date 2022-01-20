import { GET_FAVORITE_EVENTS, FAVORITE_EVENT_DETAIL } from '../types';

const initialState = {
  events: null
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_EVENTS:
      return { ...state, events: action.payload };
    case FAVORITE_EVENT_DETAIL:
      return { ...state, details: action.payload };
    default:
      return { ...state };
  }
};

export default ProfileReducer;
