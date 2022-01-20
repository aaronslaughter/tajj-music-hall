import { getFavoriteEvents } from '../../services/ProfileServices';
import { FindAllEvents } from '../../services/BITServices';
import { GET_FAVORITE_EVENTS, FAVORITE_EVENT_DETAIL } from '../types';

export const LoadFavoriteEvents = (userId) => {
  return async (dispatch) => {
    try {
      let favoriteEvents = [];
      const events = await getFavoriteEvents(userId);

      events.forEach(async (element) => {
        const response = await FindAllEvents(element.artist);
        let artist = response[0].artist;
        const event = response.find((e) => e.id === element.event_code);

        favoriteEvents.push({ artist: artist, event: event });
      });
      dispatch({
        type: GET_FAVORITE_EVENTS,
        payload: favoriteEvents
      });
    } catch (error) {
      throw error;
    }
  };
};
