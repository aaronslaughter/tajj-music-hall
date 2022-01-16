import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadEvents } from '../store/actions/DiscoverActions'
import EventCard from './EventCard'

export const DiscoverEvents = (props) => {

  useEffect(() => {
    props.fetchEvents()
  }, [])

  return (
    <div>
      <EventCard event={props.discoverState.events[0]}/>
      <EventCard event={props.discoverState.events[1]}/>
      <EventCard event={props.discoverState.events[2]}/>
      <EventCard event={props.discoverState.events[3]}/>
      <EventCard event={props.discoverState.events[4]}/>
      <EventCard event={props.discoverState.events[5]}/>
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
