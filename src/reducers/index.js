import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import errorsReducer from './ErrorsReducer'

export default combineReducers({
  user:userReducer,
  errors:errorsReducer,
})
