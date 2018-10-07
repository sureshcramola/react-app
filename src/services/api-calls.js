import axios from 'axios';
import * as config from '../config'
import get from 'lodash.get'


const restful = (token)=>(
  axios.create({
    baseURL: config.NewAPIBaseUrl,
    headers: {'Authorization': `bearer ${token}`, 'agent':'iOS'},
    transformResponse: [function (_data) {
      let data = JSON.parse(_data)
      if(!get(data,'RSVP')){
        return data
      }
      let rsvp = data.RSVP.map((elem,index)=>{return {...elem,index:index}})
      data.RSVP = rsvp
    return data
}],
})
)

const liveApi = axios.create({
  baseURL: config.LiveAPIUrr,
  headers: {'Authorization': `bearer ${config.restfulToken}`}
});

module.exports.restful    =   restful
module.exports.liveApi    =   liveApi
