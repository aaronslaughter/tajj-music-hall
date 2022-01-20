import { TAJJClient } from './index';

export const getFavoriteEvents = async (userId) => {
  try {
    const response = await TAJJClient.get(`users/events/${userId}`);
    if (response.data.length === 0) {
      return [];
    } else {
      return response.data[0].event_list;
    }
  } catch (error) {
    throw error;
  }
};
