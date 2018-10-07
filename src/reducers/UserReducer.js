import initialState from '../states/user'
import { USER_CHANGE } from '../actions/types'

export default function userReducer (state = initialState, action) {
  switch (action.type) {

    case USER_CHANGE : {
      return { ...state, user:{...action.payload }}
    }

    default: {
      return state
    }
  }
}
