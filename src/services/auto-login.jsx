import {USER_CHANGE,
        NOTIFICATIONS_CHANGE,
        CHANNEL_CHANGE,
        S3_CONNECT} from '../actions/types'
import {getNotifications, getChannel, getMyTubes} from '../actions'
import {S3Credentials} from '../config'
import get from 'lodash.get'
export default class LoginSignal {

  constructor () {




    // Redux store
    this.reduxStore = null

    this.fire = this.fire.bind(this)
    this.setReduxStore = this.setReduxStore.bind(this)


    // store all dispatch queue if redux store is not set and once it set then run
    this._dispatchQueue = []

    // Subscribers
    this._subscribers = []

    // queue of publish or subscribe
    this._queue = []



    // Listener
    this._listeners = []


  }

  /**
   * Pass redux store to service for call later
   * @param store
   */
  setReduxStore (store) {
    this.reduxStore = store
    // let dispatch queue

    if (this._dispatchQueue.length) {
      this._dispatchQueue.forEach((queue) => {
        this.dispatch(queue.type, queue.payload)
      })
    }

  }

  /**
   * Dispatch to redux action
   *
   * @param actionType
   * @param payload
   */
  dispatch (actionType, payload) {

    if (!this.reduxStore) {
      // if store is not set let save in queue
      this._dispatchQueue.push({
        type: actionType,
        payload: payload
      })
    } else {
      this.reduxStore.dispatch({
        type: actionType,
        payload: payload
      })
    }
  }

  fire(){
    let val = localStorage.getItem('user')
    val = JSON.parse(val)

    if (!val || get(val,'user.user.token')){
      return
    }

    this.dispatch(USER_CHANGE,val.user || {token:null})
    this.reduxStore.dispatch(getNotifications())
    this.reduxStore.dispatch(getChannel())
    this.reduxStore.dispatch(getMyTubes())
  }

  s3init(){

    let bucketName = S3Credentials.bucketName
    let bucketRegion = S3Credentials.bucketRegion
    let IdentityPoolId = S3Credentials.IdentityPoolId

    AWS.config.update({
      region: bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId
      })
    })

    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: bucketName}
    })

    this.dispatch(S3_CONNECT,s3)

  }


}
