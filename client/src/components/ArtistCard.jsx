import React from 'react'
import { NavLink } from 'react-router-dom'

const ArtistCard = ({artist, events}) => {
  return (
    <div>
      {artist === undefined ? '' :
        <div>
          <img src={artist.thumb_url} alt={artist.name}/>
          <div>{artist.name}</div>
        </div>
      }
      {events.length === undefined ? 'No Upcoming Events' : 
        <div>
          {events.map((element, index) =>
            <div key={index}>
              <div>{element.datetime}</div>
              <div>{element.venue.name} - {element.venue.location}</div>
              <div>Tickets: {element.offers[0] === undefined ? 'Unavailable' : <div>{element.offers[0].status}</div>}</div>
              <NavLink to={`/events/${artist.name}/${element.id}`}>more info...</NavLink>
              <div>--------------------------</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default ArtistCard
