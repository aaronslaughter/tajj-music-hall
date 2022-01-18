import React from 'react'
import { connect } from 'react-redux'
import { IsFavorite, GetAttendees } from '../store/actions/EventActions'
import { AddEventForUser } from '../services/TAJJServices'
import AddComment from './AddComment'
import Comments from './Comments'

const EventDetailsCard = (props) => {

  const addFavorite = async () => {
    await AddEventForUser(props.user.id, {
      event_code: props.eventState.details.event.id, 
      likes: 0, 
      artist: props.eventState.details.artist.name}
    )

    await props.isFavorite(props.user.id, props.eventState.details.event.id)
    await props.getAttendees(props.match.params.eventCode)
  }

  return (
    <div>
      <img src={props.eventState.details.artist.thumb_url} alt={props.eventState.details.artist.name}/>
      <div>{props.eventState.details.event.venue.name}</div>
      <button disabled={!props.authenticated || props.eventState.isFavorite} onClick={addFavorite}>Favorite</button>
      <div>{props.eventState.details.event.venue.location}</div>
      <div>{props.eventState.details.event.datetime}</div>
      <div>Who is attending?</div>
      {props.eventState.attendees.map((element, index) => 
        <div key={index}>{/* could use index for a random color */}
          {element.user_list[0].name.charAt(0)} {/* needs link to profile */}
        </div>
      )}
      <div>Comments</div>
      <AddComment {...props} user={props.user} authenticated={props.authenticated}/>
      <Comments/>
    </div>
  )
}

const mapStateToProps = ({eventState}) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    isFavorite: (userId, eventId) => dispatch(IsFavorite(userId, eventId)),
    getAttendees: (eventCode) => dispatch(GetAttendees(eventCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsCard)
