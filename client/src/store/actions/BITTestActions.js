import { TEST_GET_EVENTS } from "../types"
import { GetEvents } from "../../services/BITTestServices"

export const LoadEvents = () => {
  return async (dispatch) => {
    try {
      const artist = await GetEvents()

      dispatch({
        type: TEST_GET_EVENTS,
        payload: artist
      })
    } catch (error) {
      throw error
    }
  }
}
