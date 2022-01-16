import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import DiscoverReducer from './reducers/DiscoverReducer'
import BITTestReducer from './reducers/BITTestReducer'

const store = createStore(
  combineReducers({
    discoverState: DiscoverReducer,
    bitState: BITTestReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
