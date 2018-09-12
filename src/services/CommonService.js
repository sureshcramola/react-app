//import decode from 'jwt-decode';

import * as constant from '../constant/constant';

export default class CommonService {


    // Initializing important variables
    constructor(domain) {

        //this.domain = domain || constant.API_BASE_URL // API server domain
        // this.fetch = this.fetch.bind(this) // React binding stuff
        //this.login = this.login.bind(this)
        //this.getProfile = this.getProfile.bind(this)
    }

    getCountryList() {

        return fetch(constant.API_BASE_URL + 'api-user/get-country-list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.json()).then((responseData) => {
            return responseData;
        });
    }


    getCityList(countryId) {

        return fetch(constant.API_BASE_URL + 'api-user/get-city-list/'+countryId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        }).then((response) => response.json()).then((responseData) => {
            return responseData;
        });
    }




}