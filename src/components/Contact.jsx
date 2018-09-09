import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../styles/ContactStyle.css'
class Contact extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        center: {
            lat: 30.0869,
            lng: 78.2676
        },
        zoom: 11
    };
    render() {
        return (
            <div className="contact-wrapper">
                <div className="container">
                    <h1 className="page-heading text-center">Contact Us</h1>
                    <div className="row contact-row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="form-wrapper">
                                <div className="form-group">
                                    <label className="w-100">Name</label>
                                    <input type="text" className="border-input" name="name" />
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">Email</label>
                                    <input className="border-input" type="text" name="email" />
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">Phone Number</label>
                                    <input className="border-input" type="text" name="phone_number" />
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <label className="w-100">Message</label>
                                    <textarea  className="border-input" rows="3"></textarea>
                                    <span className="focus-border"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="map-wrapper">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 
                                    'AIzaSyC_yIwFMF1IzBYUkpm9Y9EkzxmsX70iBLg'
                                     }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                <div
                                    lat={30.0869}
                                    lng={78.2676}
                                    text={'Suresh Ramola'}
                                ></div>
                            </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <button className="button-primary">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;