import { ERROR_ALERT_CHANGE } from './types'
export const alertError = (value) => {
  return (dispatch,getState) => {
    console.log('dispatch error...',value)
    dispatch(
      {
        type:ERROR_ALERT_CHANGE,
        payload:{...value,active:true}
      }
    )
    if (value.active){
      setTimeout(()=>{
        dispatch(
          {
            type:ERROR_ALERT_CHANGE,
            payload:{...value,active:false}
          }
        )
      },5000)
    }
  }

}
