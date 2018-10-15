import { VISIBILITY_CHANGE, MODE_CHANGE } from './types'

export const changeUIVisibility = (value) => ({
  type: VISIBILITY_CHANGE,
  payload: value
})

export const changeUIMode = (value) => ({
  type: MODE_CHANGE,
  payload: value
})
