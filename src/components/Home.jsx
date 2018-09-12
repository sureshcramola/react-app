import React, { Component } from 'react';
import aboutImage from '../images/view-2.jpg'
import userImage from '../images/user-image.jpg'
import '../styles/homeStyle.css'
import { FullPage, Slide } from 'react-full-page';
class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="homeWrap">
                    <FullPage controls>
                        <Slide className="slide-1">
                         
                        </Slide>
                        <Slide className="slide-2">
                         
                        </Slide>
                        <Slide className="slide-3">
                         
                        </Slide>
                    </FullPage>
            </div>
        );
    }
}
export default Contact;