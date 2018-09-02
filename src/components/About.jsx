import React, { Component } from 'react';
import '../styles/AboutStyles.css'
class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="about-wrapper">
                <div className="container">
                    <h1 className="page-heading text-center">About Us</h1>
                    <div className="about-content">
                        <h4>Mission Statement</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h4>Our brief story</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div className="founder-profile-wrapper">
                            <h4>Founder's Profile</h4>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;