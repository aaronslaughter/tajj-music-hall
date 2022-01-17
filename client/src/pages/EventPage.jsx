import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadEvent } from '../store/actions/EventActions'
import EventDetailsCard from '../components/EventDetailsCard'

export const EventPage = (props) => {

  useEffect(() => {
    props.fetchEvent(props.match.params.artistName, props.match.params.eventId)
  }, [])

  return (
    <div>
      {props.eventState.details && 
        <EventDetailsCard 
          artist={props.eventState.details.artist} 
          event={props.eventState.details.event}
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
    fetchEvent: (artist, eventId) => dispatch(LoadEvent(artist, eventId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPage)
