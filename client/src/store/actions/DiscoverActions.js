import { DiscoverEvents } from '../../services/BITServices'
import { DISCOVER_EVENTS } from '../types'

export const LoadEvents = () => {
  return async (dispatch) => {
    try {
      const events = await DiscoverEvents()

      dispatch({
        type: DISCOVER_EVENTS,
        payload: events
      })
    } catch (error) {
      throw error
    }
  }
}
