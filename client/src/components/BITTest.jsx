import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadEvents } from '../store/actions/BITTestActions'


export const BITTest = (props) => {

  useEffect(() => {
    props.fetchEvents()
  }, [])

  return (
    <div>
      BIT Test Placeholder
      <div>
        {props.bitState.events.map((element, index) => 
          <div key={index}>
            {index === 0 ? 
            <div>
              <div>{element.artist.name}</div>
              <img src={element.artist.thumb_url} alt=""/>
            </div> : ''}
          </div>
        )}
      </div>
      {props.bitState.events.map((element, index) => 
        <div key={index}>
          <div>{element.datetime}</div>
          <div>{element.venue.name} in {element.venue.location}</div>
          <div>-----------------------</div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ bitState }) => {
  return { bitState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(LoadEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BITTest)
