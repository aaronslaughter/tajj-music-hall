import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadEvents } from '../store/actions/DiscoverActions'
import EventCard from './EventCard'

export const DiscoverEvents = (props) => {

  return (
    <div>
      {props.discoverState.events.length === 6 &&
      <div>
        <EventCard artist={props.discoverState.events[0].artist} event={props.discoverState.events[0].event}/>
        <EventCard artist={props.discoverState.events[1].artist} event={props.discoverState.events[1].event}/>
        <EventCard artist={props.discoverState.events[2].artist} event={props.discoverState.events[2].event}/>
        <EventCard artist={props.discoverState.events[3].artist} event={props.discoverState.events[3].event}/>
        <EventCard artist={props.discoverState.events[4].artist} event={props.discoverState.events[4].event}/>
        <EventCard artist={props.discoverState.events[5].artist} event={props.discoverState.events[5].event}/>
      </div>
      }
    </div>
  )
}

const mapStateToProps = ({discoverState}) => {
  return {discoverState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(LoadEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverEvents)
