import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Events.css'


const ArtistCard = ({artist, events}) => {
  return (
    <div className='results'>
      {artist === undefined ? '' :
        <div className='artistProfile'>
          <img id="artistImage" src={artist.thumb_url} alt={artist.name}/>
          <div id="artistName">{artist.name}</div>
        </div>
      }
      {events.length === undefined ? 'No Upcoming Events' : 
        <div className='artistsEvents'>
          {events.map((element, index) =>
            <div key={index} className='eventCard'>
              <div className='eventInner'>
                <h2 className="h2EventCard" id="hEvent">{element.venue.name} </h2> 
                <div className='eventInfo'>
                  <h5 id="hEvent">{element.datetime}</h5>
                  <h5 id="hEvent"> {element.venue.location}</h5>
                </div>
                <div id="available">Tickets: {element.offers[0] === undefined ? 'unavailable' : <div id="availability"> { element.offers[0].status}</div>}</div>
              </div>
              <NavLink className="eventLink" to={`/events/${artist.name}/${element.id}`}>more info...</NavLink>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default ArtistCard
