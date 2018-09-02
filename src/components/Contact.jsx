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
                                    <input type="text" name="name" />
                                </div>
                                <div className="form-group">
                                    <label className="w-100">Email</label>
                                    <input type="text" name="email" />
                                </div>
                                <div className="form-group">
                                    <label className="w-100">Phone Number</label>
                                    <input type="text" name="phone_number" />
                                </div>
                                <div className="form-group">
                                    <label className="w-100">Message</label>
                                    <textarea rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="contact-description">
                                dsadsa welcomes your questions or comments regarding this Statement of Privacy. If you believe
                            </div>
                            <div className="contact-info">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;