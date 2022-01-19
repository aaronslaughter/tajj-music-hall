import React from 'react'
import { connect } from 'react-redux'

const Comments = (props) => {
  return (
    <div className='commentBox'>
      {props.eventState.comments.map((element, index) => 
        <div className='Acomment' key={index}>
          {props.eventState.attendees.length > 0 && <div className='Acomment'><div className='commentName'>{props.eventState.attendees.find((attendee) => attendee.user_list[0].id === element.user_id).user_list[0].name}</div> <div className='commentText'> {element.content}</div></div>}
         
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({eventState}) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
