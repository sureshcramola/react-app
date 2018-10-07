import {restful, liveApi} from '../services/api-calls'
import get from 'lodash.get'
import * as config from '../config'
import {NOTIFICATIONS_CHANGE, CHANNEL_CHANGE} from './types'
import {apiDebug} from '../utils/debugs'



// call to get notification tubes
export const getNotifications = (token=null,cb) => {
  return (dispatch,getState) => {
    const {user:{user}} = getState()
    if(!user.token && !token){return}
    console.log('getting ')
    restful(token || user.token).get(config.notificationTubeUrl)
    .then( res => {
      console.log("API upcoming response===> ",res)
      let tubes = get(res,'data.RSVP')
      if(user){
        dispatch(
          {
            type:NOTIFICATIONS_CHANGE,
            payload:tubes
          }
        )
        cb(null,tubes)
      }else{
        cb({message:'Cannot get the notifications'},null)
      }
    }
    )
    .catch( error =>{
      cb({message:'Cannot get the notifications'},null)
    }
    )
  }
}

// call to get notification tubes
export const getChannel = (token=null,cb) => {
  return (dispatch,getState) => {
    const {user:{user}} = getState()
    if(!user.token && !token){return}
    restful(token || user.token).get(config.channelGet)
    .then( res => {
      apiDebug('get',config.channelGet,res)
      let channel = get(res,'data.channel') || {}
      if(user){
        dispatch(
          {
            type:CHANNEL_CHANGE,
            payload:channel
          }
        )
        cb(null,channel)
      }else{
        cb({message:'Cannot get the channel'},null)
      }
    }
    )
    .catch( error =>{
      cb({message:'Cannot get the notifications'},null)
    }
    )
  }
}




// call to subscribe
export const subscribeToChannel = (channelid,token=null,value=true,cb) => {
  return (dispatch,getState) => {
      if (!token){

      }
      const url = `${value?config.subscribeUrl:config.unSubscribeUrl}/${channelid}`
      restful(token).get(url)
      .then( res => {
        console.log("API upcoming response===> ",res)
        let isSuccess = get(res,'data.isSuccess')
        if(isSuccess){
          // update tubeins
          cb(null,isSuccess)
        }else{
          cb({message:'Cannot subscribe'},null)
        }
      }
      )
      .catch( error =>{
        cb({message:'Cannot subscribed'},null)
      }
      )
    }
  }








// call to get poll question and results





// call to participate in poll





// call to request for tubeIn offline
export const requestOffTubein = (tubeid,token=null,args,cb) => {
  return (dispatch,getState) => {
      if (!token){

      }
      restful(token).post(config.requestRSVP+'/'+tubeid,{
        ...args
      })
      .then( res => {
        console.log("API upcoming response===> ",res)
        let isSuccess = get(res,'data.isSuccess')
        if(isSuccess){
          // update tubeins

          cb(null,isSuccess)
        }else{
          cb({message:'Cannot tubein'},null)
        }
      }
      )
      .catch( error =>{
        cb({message:'Cannot tubein'},null)
      }
      )
    }
  }







// call to request for TubeIn Online













// call to send video comment
