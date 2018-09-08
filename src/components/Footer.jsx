import React, { Component } from 'react'
import logoImage from '../images/logoh.png'
import '../styles/FooterStyles.css'
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="contact-details">
                               &copy; Copyright 2018. All rights reserved.
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="contact-details">
                                
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="contact-details text-right">
                                {/* EasyBite is a trademark of Think Elements LLC. All rights reserved. */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer