import React from 'react'
import { connect } from 'react-redux'

const Comments = (props) => {
  return (
    <div>
      {props.eventState.comments.map((element, index) => 
        <div key={index}>
          <div>User: {props.eventState.attendees.find((attendee) => attendee.user_list[0].id === element.user_id).user_list[0].name}</div>
          <div>Comment: {element.content}</div>
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
