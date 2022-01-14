import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import BITTestReducer from './reducers/BITTestReducer'

const store = createStore(
  combineReducers({
    bitState: BITTestReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
