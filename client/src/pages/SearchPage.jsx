import React from 'react'
import { connect } from 'react-redux'
import ArtistCard from '../components/ArtistCard'
import { UpdateSearchTerm, LoadEvents, ResetSearchResults } from '../store/actions/SearchActions'
import '../styles/Events.css'
import DiscoverEvents from '../components/DiscoverEvents'

const SearchPage = (props) => {

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
      return <p>Oh no! There are no upcoming events for this artist :( </p>
    } else {
      return ''
    }
  }

  return (
    <div className='EventsPage'>
      <div id='SearchBar'>
          <form  id="searchBarElements" onSubmit={handleSubmit}>
            <input id="searchBox" type='text' placeholder='Search Artist'  value={props.searchState.searchTerm} onChange={handleChange}></input>
            <button  id="searchButton" onClick={() => setShow(false)} disabled={!props.searchState.searchTerm.length > 0}>Search</button>
          </form>
      </div>
      {show ?
      <div>
        <DiscoverEvents/>
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
