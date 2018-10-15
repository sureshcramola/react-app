import initialState from '../states/clientUI'
import { VISIBILITY_CHANGE, MODE_CHANGE } from '../actions/types'

export default function clientUIReducer(state = initialState, action) {
  switch (action.type) {

    case VISIBILITY_CHANGE: {
      return {
        ...state, visibile: {
          ...state.visible,
          ...action.payload
        }
      }
    }
    case MODE_CHANGE: {
      return { ...state, mode: action.payload }
    }

    default: {
      return state
    }
  }
}
