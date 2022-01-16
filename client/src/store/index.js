import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import DiscoverReducer from './reducers/DiscoverReducer'
import SearchReducer from "./reducers/SearchReducer"
import BITTestReducer from './reducers/BITTestReducer'

const store = createStore(
  combineReducers({
    discoverState: DiscoverReducer,
    searchState: SearchReducer,
    bitState: BITTestReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
