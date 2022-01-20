import { TAJJClient } from './index'

export const UserHasEvent = async (userId, eventId) => {
  try {
    const response = await TAJJClient.get(`/users/events/${userId}`)

    return response.data[0].event_list.some((element) => element.event_code === eventId)
  } catch (error) {
    throw error
  }
}

export const AddEventForUser = async (userId, newEvent) => {
  try {
    
    const createdEvent = await TAJJClient.post(`/events`, newEvent)
    await TAJJClient.post(`/users_events`, {event_id: createdEvent.data.id, user_id: userId})

  } catch (error) {
    throw error
  }
}

export const GetUsersFromEvent = async (eventCode) => {
  try {
    const response = await TAJJClient.get(`events/users/event_code/${eventCode}`)
    
    if (response.data.length === 0) {
      return []
    } else {
      return response.data
    }

    return response.data
  } catch (error) {
    throw error
  }
}

export const PostComment = async (eventId, userId, newComment) => {
  try {
    const response = await TAJJClient.post(`/comments`, {event_id: eventId, user_id: userId, content: newComment})
  } catch (error) {
    throw error
  }
}

export const GetEventByEventCode = async (eventCode) => {
  try {
    const response = await TAJJClient.get(`/events`)
    let event = response.data.filter((element) => element.event_code === eventCode)

    if (event.length === 0) {
      return null
    }

    return event[0].id
  } catch (error) {
    throw error
  }
}

export const GetCommentsByEventCode = async (eventCode) => {
  try {
    const allComments = await TAJJClient.get(`/comments`)
    let eventId = await GetEventByEventCode (eventCode)
    let filteredComments = allComments.data.filter((element) => element.event_id === eventId)

    return filteredComments
  } catch (error) {
    throw error
  }
}

export const DeleteCommentById = async (commentId) => {
  try {
    await TAJJClient.delete(`/comments/${commentId}`)
  } catch (error) {
    throw error
  }
}
