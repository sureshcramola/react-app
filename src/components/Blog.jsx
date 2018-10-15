import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUIVisibility, changeUIMode } from '../actions/VideoActions'
import '../styles/BlogStyle.css'

class Blog extends Component {
    constructor(props) {
        super(props)
        this.changeMode = this.changeMode.bind(this);
    }

    componentDidMount() {

    }

    changeMode() {
        this.props.setMode({ mode: 'fullscreen' })
    }

    render() {
        console.log(this.props.mode);
        return (
            <div className="blog-wrapper">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-8">
                        <video className="video-div"></video>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                        <video className="video-div"></video>
                    </div>
                </div>
                <div className="mt-3">
                    <button onClick={this.changeMode} className="button-primary mr-2">Theatre Mode</button>
                    <button onClick={this.props.toggleModal} className="button-secondary">Normal Mode</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    visibilities: state.clientUI.visible,
    mode: state.clientUI.mode,
})

function mapDispatchToProps(dispatch) {
    return {
        setMode: (...args) => dispatch(changeUIMode(...args))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)