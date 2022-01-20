import React from 'react'
import { connect } from 'react-redux'
import { DeleteComment, GetAllComments } from '../store/actions/EventActions'

const Comments = (props) => {

const arr = [...props.eventState.comments]
const rarr = arr.reverse()

const handleDelete = async (commentId) => {
  await props.deleteComment(commentId)
  await props.getComments(props.match.params.eventCode)
}

  return (
    <div className='commentBox'>
      
      {rarr.map((element, index) => 
        <div className='Acomment' key={index}>
          {props.eventState.attendees.length > 0 && 
            <div className='Acomment'>
              <div className='commentName'>
                {props.eventState.attendees.find((attendee) => attendee.user_list[0].id === element.user_id).user_list[0].name}
              </div> 
              <div className='commentText'> 
                {element.content}
              </div>
              {props.user.id === element.user_id && props.authenticated && 
                <button onClick={() => handleDelete(element.id)}>Delete</button>
              }
            </div>
          }
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({eventState}) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(DeleteComment(commentId)),
    getComments: (eventCode) => dispatch(GetAllComments(eventCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
