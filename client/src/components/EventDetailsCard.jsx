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
    <div className='eventRender'>
      <div className='eventCardInfo'>
        
      <img src={props.eventState.details.artist.thumb_url} alt={props.eventState.details.artist.name}/>
        <div className='eventInfo2'>
          <div>
            <h1 id="HAnEvent">{props.eventState.details.artist.name}</h1>
            <h2 id="HAnEvent">{props.eventState.details.event.venue.name}</h2>
          </div>
          <p>{props.eventState.details.event.venue.location}<br></br>
          {props.eventState.details.event.datetime}</p>
        </div>
      </div>
      <button disabled={!props.authenticated || props.eventState.isFavorite} onClick={addFavorite}>Favorite</button>
      <div className='post'>
        <div className='attendeesBox'>
        <h3>Who is attending?</h3>
          {props.eventState.attendees.map((element, index) => 
            <div className="attendee" key={index}>{/* could use index for a random color */}
              <h4 id='attendeeI'>{element.user_list[0].name.charAt(0)}</h4> {/* needs link to profile */}
            </div>
          )}
        </div>
        <div className='comments'>
          <AddComment {...props} user={props.user} authenticated={props.authenticated}/>
          <Comments/>
        </div>
      </div>  
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
