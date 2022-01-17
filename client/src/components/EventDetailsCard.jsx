import React from 'react'

const EventDetailsCard = ({artist, event, user, authenticated}) => {

  const addFavorite = () => {
    // TODO:
  }

  return (
    <div>
      <img src={artist.thumb_url} alt={artist.name}/>
      <div>{event.venue.name}</div>
      <button disabled={!authenticated} onClick={addFavorite}>TODO: Favorite</button>
      <div>{event.venue.location}</div>
      <div>{event.datetime}</div>
      <div>TODO: Who is attending?</div>
      <div>TODO: Comments Component</div>
    </div>
  )
}

export default EventDetailsCard
