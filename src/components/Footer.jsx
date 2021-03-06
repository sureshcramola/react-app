import React, { Component } from 'react'
import '../styles/FooterStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer className={`${window.location.pathname === '/' ? 'fixed' : ''}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="contact-details">
                                <span className="align-self-center social-icon fb-icon">
                                    <FontAwesomeIcon icon={Brands.faFacebookF} />
                                    {/* <i className="fa fa-facebook" aria-hidden="true"></i> */}
                                </span>
                                <span className="align-self-center social-icon twt-icon">
                                    <FontAwesomeIcon icon={Brands.faTwitter} />
                                </span>

                                <span className="align-self-center social-icon insta-icon">
                                    <FontAwesomeIcon icon={Brands.faInstagram} />
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="contact-details">

                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6  align-self-center">
                            <div className="contact-details text-right ">
                                &copy; Copyright 2018. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer