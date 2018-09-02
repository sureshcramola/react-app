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
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="contact-details">
                                <span className="phone-icon"></span> (336) 298-1377
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="contact-details">
                                <span className="envelope-icon"></span> sales@kasybite.us
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