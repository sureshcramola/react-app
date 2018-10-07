import initialState from '../states/errors'
import { ERROR_AUTHORIZATION_CHANGE, ERROR_ALERT_CHANGE } from '../actions/types'

export default function errorsReducer (state = initialState, action) {
  switch (action.type) {

    case ERROR_AUTHORIZATION_CHANGE : {
      return { ...state, authorizations:{...action.payload }}
    }

    case ERROR_ALERT_CHANGE : {
      return { ...state, alert:{...action.payload }}
    }

    default: {
      return state
    }
  }
}
