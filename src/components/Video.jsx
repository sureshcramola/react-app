import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUIVisibility, changeUIMode } from '../actions/VideoActions'
import '../styles/BlogStyle.css'
import videoRef from '../videos/bunny.mp4';
import videoRefOGV from '../videos/bunny.ogg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { faPlay, faPause, faArrowsAlt, faVolumeUp, faVolumeDown } from '@fortawesome/fontawesome-free-solid'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoHeight: 0,
            videoPlaying: false,
            isMuted: false,
            maxTime:0,
            slideValue:0
        }
        this.videoPlay = this.videoPlay.bind(this);
        this.muteVideo = this.muteVideo.bind(this);
        this.onVideoProgressChange = this.onVideoProgressChange.bind(this);
        this.getVideoLength = this.getVideoLength.bind(this);
        this.updateSliderTime = this.updateSliderTime.bind(this);
    }

    componentDidMount() {
        this.videoAspectRatio();
        
    }

    getVideoLength(){
        this.setState({
            maxTime: this.refs.videoRef.duration
        })
    }

    updateSliderTime(){
        this.setState({
            slideValue: this.refs.videoRef.currentTime
        })
    }

    onVideoProgressChange(event){
        // if(this.state.videoPlaying){
        //     this.refs.videoRef.play();
        // }
        
        console.log(event)
        if(event>=this.state.maxTime){
            this.setState({
                videoPlaying: false,
                slideValue: event
            })
        }else{
            this.setState({
                videoPlaying: true,
                slideValue: event
            })
        }
        this.refs.videoRef.currentTime = event;
        
    }

    videoPlay() {
        console.log(this.state.maxTime)

        if (this.state.videoPlaying) {
            this.refs.videoRef.pause();
        } else {
            this.refs.videoRef.play();
        }

        if(this.state.slideValue >= this.state.maxTime){
            this.setState({
                slideValue: 0,
                videoPlaying: !this.state.videoPlaying
            })
        } else{
            this.setState({
                videoPlaying: !this.state.videoPlaying
            })
        }

       
    }

    muteVideo() {
        if (this.state.isMuted) {
            this.refs.videoRef.muted = false;
        } else {
            this.refs.videoRef.muted = true;
        }

        this.setState({
            isMuted: !this.state.isMuted
        })

    }

    videoAspectRatio() {
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
                    <video className="video-div" ref="videoRef" onLoadedMetadata={this.getVideoLength} 
                    onTimeUpdate={this.updateSliderTime}>
                        <source src={videoRef} type="video/mp4" />
                        <source src={videoRefOGV} type="video/ogg" />
                    </video>
                    <div className="video-overlay d-flex align-items-center justify-content-center">
                        <span className="video-play-icon" onClick={this.videoPlay}>
                            <FontAwesomeIcon icon={`${this.state.videoPlaying ? 'pause' : 'play'}`} />
                        </span>
                    </div>
                </div>
                <div className="video-controls d-flex flex-row justify-content-between">
                    <div className="left-controls">
                        <button className="video-btm-play-icon" onClick={this.videoPlay}>
                            <FontAwesomeIcon icon={`${this.state.videoPlaying ? 'pause' : 'play'}`} />
                        </button>
                        <button className="video-btm-play-icon" onClick={this.muteVideo}>
                            <FontAwesomeIcon icon={`${this.state.isMuted ? 'volume-down' : 'volume-up'}`} />
                        </button>
                    </div>
                    <div className="slider-controls align-self-center">
                        <Slider onChange={this.onVideoProgressChange} min={0} max={this.state.maxTime} value={this.state.slideValue}/>
                    </div>
                    <div className="right-controls text-right">
                        <button className="full-screen-btn">
                            <FontAwesomeIcon icon={'expand'} />
                        </button>
                    </div>

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