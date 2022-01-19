import React from 'react'
import { connect } from 'react-redux'
import { GetEventByEventCode, PostComment } from '../services/TAJJServices'
import { UpdateNewComment, GetAllComments } from '../store/actions/EventActions'

const AddComment = (props) => {

  const handleChange = (e) => {
    props.updateNewComment(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let eventId = await GetEventByEventCode(props.eventState.details.event.id)
    await PostComment(eventId ,props.user.id,props.eventState.newComment)
    props.updateNewComment('')
    await props.getComments(props.match.params.eventCode)
  }

  return (
    <div>
      <form  className="if" onSubmit={handleSubmit}>
        <input  className='inputfieldComment'
          onChange={handleChange} 
          type="text" 
          placeholder="Add Comment" 
          name="newComment"
          value={props.eventState.newComment}>
        </input>
        <button  className="ifButton" disabled={!props.eventState.newComment ||
          !props.user ||
          !props.authenticated ||
          !props.eventState.isFavorite}>
          Post
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = ({eventState}) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewComment: (newComment) => dispatch(UpdateNewComment(newComment)),
    getComments: (eventCode) => dispatch(GetAllComments(eventCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
