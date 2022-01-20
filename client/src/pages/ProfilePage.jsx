import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import EventCard from '../components/EventCard'
import { LoadFavoriteEvents } from '../store/actions/ProfileActions';

const ProfilePage = (props) => {

  const handlesubmit = (e) => {
  e.preventDefault();
  props.history.push("/update")
  };

  return (
    <div>
      Profile Page
      <div className="userinfo">
        {props.user && <h3>User Name: {props.user.name}</h3>}
        {props.user && <h3>User Email: {props.user.email}</h3>}
      </div>
      <button className="changePassword" onClick={handlesubmit}>
        Change Password
      </button>
      <div className="favoriteEvents">
        {props.profileState.events.map((element, index) => 
          <div key={index}>
            <EventCard event={element.event} artist={element.artist}></EventCard>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ profileState }) => {
  return { profileState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavoriteEvents: (userId) => dispatch(LoadFavoriteEvents(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
