import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import ArtistCard from '../components/ArtistCard'
import { UpdateSearchTerm, LoadEvents, ResetSearchResults } from '../store/actions/SearchActions'
import '../styles/Events.css'
import pic1 from '../assets/EventsImageTop.png'


const SearchPage = (props) => {

  useEffect(() => {
    props.resetSearchResults()
  }, [])

  const handleChange = (e) => {
    props.updateSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchEvents(props.searchState.searchTerm)
    props.updateSearchTerm('')
  }

  const renderArtistResults = () => {
    if (props.searchState.events) {
      return <ArtistCard artist={props.searchState.events[0].artist} events={props.searchState.events}/>
    } else if (props.searchState.searched) {
      return 'No Results'
    } else {
      return ''
    }
  }

  return (
    <div className='EventsPage'>
      <img src={pic1} className='imageEvents'/>
      <h1 className='eventsText'>WHAT ARTIST ARE <br></br>YOU SEEING NEXT?</h1>
      <div className='SearchBar'>
        <form onSubmit={handleSubmit}>
          <input id="searchBox" type='text' placeholder='Search Artist'  value={props.searchState.searchTerm} onChange={handleChange}></input>
          <button disabled={!props.searchState.searchTerm.length > 0}>Search</button>
        </form>
      </div>
      <div>
        {renderArtistResults()}
      </div>
    </div>
  )
}

const mapStateToProps = ({searchState}) => {
  return {searchState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchTerm: (searchTerm) => dispatch(UpdateSearchTerm(searchTerm)),
    fetchEvents: (artist) => dispatch(LoadEvents(artist)),
    resetSearchResults: () => dispatch(ResetSearchResults())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
