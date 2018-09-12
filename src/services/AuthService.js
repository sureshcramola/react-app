//import decode from 'jwt-decode';

import * as constant from '../constant/constant';

export default class AuthService {
    // Initializing important variables
    constructor(domain) {

        //this.domain = domain || constant.API_BASE_URL // API server domain
        // this.fetch = this.fetch.bind(this) // React binding stuff
        //this.login = this.login.bind(this)
        //this.getProfile = this.getProfile.bind(this)
    }


    createAuthorizationHeader(headers: Headers) {
        
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', sessionStorage.getItem('auth_token'));
    }

    createAuthorizationFileUploadHeader(headers: Headers) {
        
        headers.append('Accept', 'application/json');
        headers.append('Authorization', sessionStorage.getItem('auth_token'));
    }



    isLoggedIn() {
        var auth_token = sessionStorage.getItem('auth_token');
        if(auth_token){
            return true;
        }
        return false;
    }



    

    login(username, password) {



        let details = {
            'email': username,
            'password': password
        };
        /*let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");*/

        // Get a token from api server using the fetch api
        return fetch(constant.API_BASE_URL + 'api-user/authenticate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
               // 'Content-Type': 'application/x-www-form-urlencoded'
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details),
        }).then((response) => response.json()).then((responseData) => {
            console.log(responseData.data);
            return responseData;
        });
    }



    signup(firstname,lastname, useremail, userpassword, country_id,city_id, gender, birth_date,birth_month, birth_year) {
        let details = {
            'firstname': firstname,
            'lastname': lastname,
            'email': useremail,
            'password': userpassword,
            'country_id': country_id,
            'city_id': city_id,
            'gender': gender,
            'date_of_birth': birth_year+'-'+birth_month+'-'+birth_date
        };
        return fetch(constant.API_BASE_URL + 'api-user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details),
        }).then((response) => response.json()).then((responseData) => {
            return responseData;
        });
    }



    profileUpdate(firstname,lastname, useremail, country_id,city_id, gender, birth_date,birth_month, birth_year,about_me) {


        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let details = {
            'firstname': firstname,
            'lastname': lastname,
            'email': useremail,
            'country_id': country_id,
            'city_id': city_id,
            'gender': gender,
            'date_of_birth': birth_year+'-'+birth_month+'-'+birth_date,
            'about_me': about_me
        };
        return fetch(constant.API_BASE_URL + 'api-user/update_profile', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(details),
        }).then((response) => response.json()).then((responseData) => {
            return responseData;
        });
    }




    myprofile() {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return fetch(constant.API_BASE_URL + 'api-user/myprofile', {
            method: 'POST',
            headers: headers

            
        }).then((response) => response.json()).then((responseData) => {
            return responseData;
        });
    }












    /*
    
    
        loggedIn() {
            // Checks if there is a saved token and it's still valid
            const token = this.getToken() // GEtting token from localstorage
            return !!token && !this.isTokenExpired(token) // handwaiving here
        }
    
        isTokenExpired(token) {
            try {
                const decoded = decode(token);
                if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                    return true;
                }
                else
                    return false;
            }
            catch (err) {
                return false;
            }
        }
    
        setToken(idToken) {
            // Saves user token to localStorage
            localStorage.setItem('id_token', idToken)
        }
    
        getToken() {
            // Retrieves the user token from localStorage
            return localStorage.getItem('id_token')
        }
    
        logout() {
            // Clear user token and profile data from localStorage
            localStorage.removeItem('id_token');
        }
    
        getProfile() {
            // Using jwt-decode npm package to decode the token
            return decode(this.getToken());
        }
    
    
        fetch(url, options) {
            // performs api calls sending the required authentication headers
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    
            // Setting Authorization header
            // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
            if (this.loggedIn()) {
                headers['Authorization'] = 'Bearer ' + this.getToken()
            }
    
            return fetch(url, {
                headers,
                ...options
            })
                .then(this._checkStatus)
                .then(response => response.json())
        }
    
        _checkStatus(response) {
            // raises an error in case response status is not a success
            if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
                return response
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        }*/
}