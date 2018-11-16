import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUIVisibility, changeUIMode } from '../actions/VideoActions'
import '../styles/BlogStyle.css'
import blogImage from '../images/view-1.jpg';
import VideoFile from '../videos/bunny.mp4';

class Blog extends Component {
    constructor(props) {
        super(props)
        this.changeMode = this.changeMode.bind(this);
    }

    componentDidMount() {

    }

    changeMode() {
        this.props.setMode({ mode: 'fullscreen' })
        // this.props.setVisibility({ footer: !this.props.visibilities.footer, header: !this.props.visibilities.header  })
    }

    render() {
        console.log(this.props.mode);
        return (
            <div className="blog-wrapper">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="video-wrapper">
                            <video className="video-div" src={VideoFile}></video>
                            <div className="video-overlay"></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="video-wrapper">
                            <video className="video-div" src={VideoFile}></video>
                            <div className="video-overlay"></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="video-wrapper">
                            <video className="video-div" src={VideoFile}></video>
                            <div className="video-overlay"></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="video-wrapper">
                            <video className="video-div" src={VideoFile}></video>
                            <div className="video-overlay"></div>
                        </div>
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
        setMode: (...args) => dispatch(changeUIMode(...args)),
        setVisibility: (...args) => dispatch(changeUIVisibility(...args))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)