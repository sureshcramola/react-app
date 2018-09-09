import React, { Component } from 'react';
import '../styles/ContactStyle.css'
class Contact extends Component {
    constructor(props) {
        super(props)
    }
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