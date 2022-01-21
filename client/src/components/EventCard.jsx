import React from 'react'
import { NavLink } from 'react-router-dom'

const EventCard = ({event, artist}) => {

  return (
    <div> 
      {event === undefined ? '' :
        <div className='discoverArtist'>
          <NavLink to={`/events/${artist.name}/${event.id}`}><img className='imageDiscoverArtist' src={artist.image_url} alt={artist.name}/></NavLink>
        </div>
      }
    </div>
  )
}

export default EventCard
