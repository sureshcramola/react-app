import {
  USER_CHANGE,
  MY_TUBES_CHANGE,
  NOTIFICATIONS_CHANGE,
  ERROR_AUTHORIZATION_CHANGE,
  CHANNEL_CHANGE, TUBE_TUBEINS_CHANGE
} from './types'
// import { restful, liveApi } from '../services/api-calls'
// import get from 'lodash.get'
// import * as config from '../config'
// import { getNotifications, getChannel } from './GeneralAPICalls'
// import { getMyTubes } from './TubesActions'


// login api call

// export const userLogin = (val, cb) => {
//   return (dispatch, getState) => {
//     console.log(val)
//     console.log(config.LoginUrl)
//     restful('').post(config.LoginUrl, {
//       ...val
//     })
//       .then(res => {
//         console.log("API upcoming response===> ", res)
//         let user = get(res, 'data.data.user')
//         let token = get(res, 'data.data.token')
//         user['token'] = token ? token.length > 0 ? token : null : null
//         if (user && token) {
//           dispatch(
//             {
//               type: USER_CHANGE,
//               payload: user
//             }
//           )
//           dispatch(
//             {
//               type: ERROR_AUTHORIZATION_CHANGE,
//               payload: {
//                 type: 'login',
//                 message: '',
//                 active: false
//               }
//             }
//           )
//           let tmp = JSON.parse(localStorage.getItem('user')) || {}
//           localStorage.setItem('user', JSON.stringify({ ...tmp, 'user': { ...user } }));
//           dispatch(getNotifications(token, (err, data) => {
//             if (err || !data) {
//               return
//             } else {
//               let tmp = JSON.parse(localStorage.getItem('user')) || {}
//               localStorage.setItem('user', JSON.stringify({ ...tmp, 'notifications': { ...data } }));
//             }
//           }))
//           dispatch(getChannel(token, (err, data) => {
//             if (err || !data) {
//               return
//             } else {
//               let tmp = JSON.parse(localStorage.getItem('user')) || {}
//               localStorage.setItem('user', JSON.stringify({ ...tmp, 'channel': { ...data } }));
//             }
//           }))
//           dispatch(getMyTubes(token, (err, data) => {
//             if (err || !data) {
//               return
//             } else {
//               let tmp = JSON.parse(localStorage.getItem('user')) || {}
//               localStorage.setItem('user', JSON.stringify({ ...tmp, 'tubes': { ...data } }));
//             }
//           }))
//           cb(null, user)
//         } else {
//           dispatch(
//             {
//               type: ERROR_AUTHORIZATION_CHANGE,
//               payload: {
//                 type: 'login',
//                 message: 'Something went wrong! please try again',
//                 active: true
//               }
//             }
//           )
//         }

//       }
//       )
//       .catch(error => {
//         console.log('bad')
//         dispatch({
//           type: ERROR_AUTHORIZATION_CHANGE,
//           payload: {
//             type: 'login',
//             message: 'Your email or password is not correct',
//             active: true
//           }
//         })
//       }
//       )
//   }
// }

// export const userAutoLogin = (val) => {
//   return (dispatch, getState) => {
//     dispatch(
//       {
//         type: USER_CHANGE,
//         payload: val.user || { token: null }
//       }
//     )
//     dispatch(
//       {
//         type: NOTIFICATIONS_CHANGE,
//         payload: val.notifications || []
//       }
//     )
//     dispatch(
//       {
//         type: CHANNEL_CHANGE,
//         payload: val.channel || {}
//       }
//     )
//   }
// }

// export const userSignOut = (val) => {
//   return (dispatch, getState) => {
//     let { user: { user } } = getState()
//     localStorage.setItem('user', JSON.stringify({ user: { ...user, token: null }, notifications: [] }));

//     dispatch(
//       {
//         type: USER_CHANGE,
//         payload: { token: null }
//       }
//     )
//     dispatch(
//       {
//         type: NOTIFICATIONS_CHANGE,
//         payload: []
//       }
//     )
//     dispatch(
//       {
//         type: CHANNEL_CHANGE,
//         payload: {}
//       }
//     )

//   }
// }

export const userRegistration = (val, cb) => {
  return (dispatch, getState) => {
    // restful('').post(config.RegistrationUrl,{
    //   ...val
    // })
    // .then( res => {
    //   console.log("API upcoming response===> ",res)
    //   let user = get(res,'data.data.user')
    //   let token = get(res,'data.data.token')
    //   user['token'] = token?token.length>0?token:null:null
    //   if(user && token){
    //     dispatch(
    //       {
    //         type:USER_CHANGE,
    //         payload:user
    //       }
    //     )
    //     dispatch(getNotifications(token,(err,data)=>{
    //       if(err || !data){
    //         return
    //       }else{
    //         localStorage.setItem('user', JSON.stringify({user,notifications:data}));
    //       }
    //     }))
    //     cb(null,user)
    //   } else{
    //     dispatch({
    //       type:ERROR_AUTHORIZATION_CHANGE,
    //       payload:{
    //         type:'signup',
    //         message:'Authorization failed!',
    //         active:true
    //       }
    //     })
    //     cb('Error',user)
    //   }
    // }
    // )
    // .catch(error =>{
    //   dispatch({
    //     type:ERROR_AUTHORIZATION_CHANGE,
    //     payload:{
    //       type:'signup',
    //       message:'Registration failed, please try again!',
    //       active:true
    //     }
    //   })
    // }
    // )
  }
}


// // forgot password api call

// export const forgotPassword = (email, cb) => {
//   return (dispatch, getState) => {
//     console.log(email)
//     console.log(config.PasswordRecoverUrl)
//     restful('').post(config.PasswordRecoverUrl, {
//       email
//     })
//       .then(res => {
//         console.log("API upcoming response===> ", res)
//         cb(null, res)
//       }
//       )
//       .catch(error => {
//         console.log(error)
//         cb({ message: 'Please enter a valid email address!' }, null)
//       }
//       )
//   }
// }





// export const resetPassword = (val, cb) => {
//   return (dispatch, getState) => {
//     restful('').post(config.ResetPasswordUrl, {
//       ...val
//     })
//       .then(res => {
//         console.log("API upcoming response===> ", res)

//         cb(null, res)
//       }
//       )
//       .catch(error => {
//         cb({ message: 'Password reset failed, please try again!' }, null)
//       }
//       )
//   }
// }




// export const updateProfileInfo = (val, cb) => {
//   return (dispatch, getState) => {

//     let { user: { user } } = getState()
//     restful(user['token']).patch(config.UpdateUserInfoURL, {
//       ...val
//     })
//       .then(res => {
//         console.log("API upcoming response===> ", res)
//         user = get(res, 'data.data.user')
//         let token = get(res, 'data.data.token')
//         user['token'] = token ? token.length > 0 ? token : null : null
//         if (user) {
//           dispatch(
//             {
//               type: USER_CHANGE,
//               payload: user
//             }
//           )
//           let tmp = JSON.parse(localStorage.getItem('user')) || {}
//           localStorage.setItem('user', JSON.stringify({ ...tmp, 'user': { ...user } }));
//           dispatch(getNotifications(token, (err, data) => {
//             if (err || !data) {
//               return
//             } else {
//               let tmp = JSON.parse(localStorage.getItem('user')) || {}
//               localStorage.setItem('user', JSON.stringify({ ...tmp, 'notifications': { ...data } }));
//             }
//           }))
//           dispatch(getChannel(token, (err, data) => {
//             if (err || !data) {
//               return
//             } else {
//               let tmp = JSON.parse(localStorage.getItem('user')) || {}
//               localStorage.setItem('user', JSON.stringify({ ...tmp, 'channel': { ...data } }));
//             }
//           }))
//         }
//       }
//       )
//       .catch(error => {
//         console.log(error)
//       }
//       )
//   }
// }

// export const channelManager = (val, cb) => {
//   return (dispatch, getState) => {
//     let { user: { user, channel } } = getState()
//     let isCreate = user.channels.length === 0
//     console.log(user.channels)
//     console.log(user.channels.length)
//     if (isCreate) {
//       restful(user['token']).post(config.channelCreate, {
//         ...val
//       }).then(res => {
//         let cId = get(res, 'data.channel._id')
//         if (!cId) { return }
//         cb(null, res)
//         user.channels[0] = cId
//         dispatch({
//           type: USER_CHANGE,
//           payload: user
//         })
//         dispatch({
//           type: CHANNEL_CHANGE,
//           payload: get(res, 'data.channel')
//         })
//       }).catch(err => {
//         cb(err, null)
//       })
//     } else {
//       restful(user['token']).patch(config.channelPatch + '/' + user.channels[0], {
//         ...val
//       }).then(res => {
//         cb(null, res)
//         dispatch(
//           {
//             type: CHANNEL_CHANGE,
//             payload: { ...channel, ...val }
//           }
//         )
//       }).catch(err => {
//         cb(err, null)
//         console.log('err creating channel....')
//         console.log(err)
//       })

//     }

//   }
// }

// export const updateChannelPhoto = (kind, cb = null) => {
//   return (dispatch, getState) => {

//     let { user: { user, channel } } = getState()
//     console.log(kind)
//     if (channel[kind]) { return }
//     channel[kind] = true
//     console.log(channel)
//     restful(user['token']).patch(config.channelPatch + '/' + user.channels[0], {
//       ...channel
//     }).then(res => {
//       dispatch(
//         {
//           type: CHANNEL_CHANGE,
//           payload: { ...channel }
//         }
//       )
//       if (cb) cb(null, res)
//     }).catch(err => {
//       console.log(err)
//       if (cb) cb(err, null)
//     })
//   }
// }

// // get tubeins
// export const getTubeins = (tubeId) => {
//   return (dispatch, getState) => {
//     let { user: { user, tubeins } } = getState()
//     restful(user['token']).get(config.tubeinsGet + tubeId).then(res => {
//       let _tubeins = get(res, 'data')
//       let id = get(_tubeins, 'global.tubeID')
//       tubeins[id] = _tubeins
//       dispatch(
//         {
//           type: TUBE_TUBEINS_CHANGE,
//           payload: tubeins
//         }
//       )
//     }
//     ).catch(err => {
//       console.log(err)
//     })
//   }
// }

// // get tubeins
// export const tubeinDecide = (tubeId, val, cb) => {
//   return (dispatch, getState) => {
//     let { user: { user, tubeins } } = getState()
//     restful(user['token']).post(config.tubeinDecide + tubeId, {
//       ...val
//     }).then(res => {
//       let _tubeins = get(res, 'data')
//       let id = get(_tubeins, 'global.tubeID')
//       tubeins[id] = _tubeins
//       dispatch(
//         {
//           type: TUBE_TUBEINS_CHANGE,
//           payload: tubeins
//         }
//       )
//       cb()
//     }
//     ).catch(err => {
//       console.log(err)
//     })
//   }
// }
