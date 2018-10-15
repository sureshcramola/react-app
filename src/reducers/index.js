import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import errorsReducer from './ErrorsReducer'
import videoReducer from './VideoReducer'
export default combineReducers({
  user: userReducer,
  errors: errorsReducer,
  clientUI: videoReducer
})
