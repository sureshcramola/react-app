import React, { Component } from 'react';
import '../styles/homeStyle.css'
import { FullPage, Slide } from 'react-full-page';
class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
        document.body.classList.add('modal-open');
    }

    componentWillUnmount(){
        document.body.classList.remove('modal-open');
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
export default Home;