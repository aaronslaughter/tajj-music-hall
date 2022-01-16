import React from 'react'
import { connect } from 'react-redux'
import ArtistCard from '../components/ArtistCard'
import { UpdateSearchTerm, LoadEvents } from '../store/actions/SearchActions'

const SearchPage = (props) => {

  const handleChange = (e) => {
    props.updateSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchEvents(props.searchState.searchTerm)
    props.updateSearchTerm('')
  }

  return (
    <div>
      Search Page
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Artist' onChange={handleChange}></input>
        <button>Search</button>
      </form>
      {props.searchState.events.length < 1 ? '' : 
        <ArtistCard artist={props.searchState.events[0].artist} events={props.searchState.events}/>
      }
    </div>
  )
}

const mapStateToProps = ({searchState}) => {
  return {searchState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchTerm: (searchTerm) => dispatch(UpdateSearchTerm(searchTerm)),
    fetchEvents: (artist) => dispatch(LoadEvents(artist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
