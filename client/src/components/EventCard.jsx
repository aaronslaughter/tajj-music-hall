import React from 'react'
import { NavLink } from 'react-router-dom'

const EventCard = ({event, artist}) => {

  return (
    <div> 
      {event === undefined ? '' :
        <div>
          <img src={artist.thumb_url} alt={artist.name}/>
          <div>{artist.name} - {event.datetime}</div>
          <div>{event.venue.name} - {event.venue.location}</div>
          <div>Tickets: {event.offers[0] === undefined ? 'Unavailable' : <div>{event.offers[0].status}</div>}</div>
          <NavLink to={`/events/${artist.name}/${event.id}`}>more info...</NavLink>
        </div>
      }
    </div>
  )
}

export default EventCard
