import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUIVisibility, changeUIMode } from '../actions/VideoActions'
import '../styles/BlogStyle.css'
import VideoFile from '../videos/bunny.mp4';
import VideoFileOGV from '../videos/bunny.ogg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowsAlt,faVolumeUp,faVolumeDown } from '@fortawesome/fontawesome-free-solid'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoHeight: 0,
            videoPlaying: false,
            isMuted:false
        }
        this.changeMode = this.changeMode.bind(this);
        this.videoPlay = this.videoPlay.bind(this);
        this.muteVideo = this.muteVideo.bind(this);
    }

    componentDidMount() {
        this.aspectRatioCalculor();
    }

    changeMode() {
        this.props.setMode({ mode: 'fullscreen' })
        // this.props.setVisibility({ footer: !this.props.visibilities.footer, header: !this.props.visibilities.header  })
    }

    videoPlay() {
        this.refs.videoFile.play();
        this.setState({
            videoPlaying: !this.state.videoPlaying
        })
    }

    muteVideo(){
        this.refs.videoFile.muted = true;
        this.setState({
            isMuted: !this.state.isMuted
        })
        
    }

    aspectRatioCalculor() {
        const width = this.refs.videoBox.clientWidth;
        const videoHeight = width * (9 / 16);
        this.setState({
            videoHeight: videoHeight
        });
    }

    render() {
        const styles = {
            videoBoxStyle: {
                height: this.state.videoHeight
            }
        };
        const { videoBoxStyle } = styles;
        console.log(this.props.mode);
        return (
            <div className="video-block">
                <div className="video-wrapper" ref="videoBox" style={videoBoxStyle}>
                    <video className="video-div" ref="videoFile">
                        <source src={VideoFile} type="video/mp4" />
                        <source src={VideoFileOGV} type="video/ogg" />
                    </video>
                    <div className="video-overlay d-flex align-items-center justify-content-center">
                        <span className="video-play-icon" onClick={this.videoPlay}>
                            <FontAwesomeIcon icon={`${this.state.videoPlaying ? 'pause' : 'play'}`} />
                        </span>
                    </div>
                </div>
                <div className="video-controls d-flex flex-row">
                    <button className="video-btm-play-icon" onClick={this.videoPlay}>
                        <FontAwesomeIcon icon={`${this.state.videoPlaying ? 'pause' : 'play'}`} />
                    </button>
                    <button className="video-btm-play-icon" onClick={this.muteVideo}>
                        <FontAwesomeIcon icon={`${this.state.isMuted ? 'volume-down' : 'volume-up'}`} /> 
                    </button>
                    <button className="full-screen-btn">
                        <FontAwesomeIcon icon={faArrowsAlt} />
                    </button>
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
)(Video)