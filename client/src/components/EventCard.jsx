import React from 'react'

const EventCard = ({event}) => {

  return (
    <div>
      {event === undefined ? '' :
        <div>
          <img src={event.artist.thumb_url} alt={event.artist.name}/>
          <div>{event.artist.name} - {event.datetime}</div>
          <div>{event.venue.name} - {event.venue.location}</div>
          <div>Tickets: {event.offers[0] === undefined ? 'Unavailable' : <div>{event.offers[0].status}</div>}</div>
          <div>more info...</div>
        </div>
      }
    </div>
  )
}

export default EventCard
