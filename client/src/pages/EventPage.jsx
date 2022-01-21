import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadEvent, IsFavorite, GetAttendees, GetAllComments } from '../store/actions/EventActions'
import EventDetailsCard from '../components/EventDetailsCard'
import '../styles/AnEvent.css'
export const EventPage = (props) => {

  useEffect(() => {
    props.fetchEvent(props.match.params.artistName, props.match.params.eventCode)
    if (props.user && props.authenticated) {
      props.isFavorite(props.user.id, props.match.params.eventCode)
    }
    props.getAttendees(props.match.params.eventCode)
    props.getComments(props.match.params.eventCode)
  }, [])

  return (
    <div className='AnEvent' >
      
      {props.eventState.details && 
        <EventDetailsCard
          {...props}
          user={props.user}
          authenticated={props.authenticated}
        />
      }
    </div>
  )
}

const mapStateToProps = ({eventState}) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvent: (artist, eventCode) => dispatch(LoadEvent(artist, eventCode)),
    isFavorite: (userId, eventCode) => dispatch(IsFavorite(userId, eventCode)),
    getAttendees: (eventCode) => dispatch(GetAttendees(eventCode)),
    getComments: (eventCode) => dispatch(GetAllComments(eventCode))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPage)
