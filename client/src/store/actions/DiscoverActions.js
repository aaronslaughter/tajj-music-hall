import { GetEvents } from '../../services/DiscoverServices'
import { DISCOVER_EVENTS } from '../types'

export const LoadEvents = () => {
  return async (dispatch) => {
    try {
      const events = await GetEvents()

      dispatch({
        type: DISCOVER_EVENTS,
        payload: events
      })
    } catch (error) {
      throw error
    }
  }
}
