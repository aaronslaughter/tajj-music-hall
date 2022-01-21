import { getFavoriteEvents } from '../../services/ProfileServices';
import { FindAllEvents } from '../../services/BITServices';
import { GET_FAVORITE_EVENTS, FAVORITE_EVENT_DETAIL } from '../types';

export const LoadFavoriteEvents = (userId) => {
  return async (dispatch) => {
    try {
      let favoriteEvents = []
      const events = await getFavoriteEvents(userId);
      


      for (let i = 0; i < events.length; i++) {
        const response = await FindAllEvents(events[i].artist)
        let myArtist = response[0].artist
        let myEvent = response.find((element) => element.id === events[i].event_code)

        favoriteEvents.push({artist: myArtist, event: myEvent})
      }

      dispatch({
        type: GET_FAVORITE_EVENTS,
        payload: favoriteEvents
      });
    } catch (error) {
      throw error;
    }
  };
};
