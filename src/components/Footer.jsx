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
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <p>&copy; Copyright 2018. All rights reserved</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer