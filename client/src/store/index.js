import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import DiscoverReducer from './reducers/DiscoverReducer';
import SearchReducer from './reducers/SearchReducer';
import EventReducer from './reducers/EventReducer';
import ProfileReducer from './reducers/ProfileReducer';

const store = createStore(
  combineReducers({
    discoverState: DiscoverReducer,
    searchState: SearchReducer,
    eventState: EventReducer,
    profileState: ProfileReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
