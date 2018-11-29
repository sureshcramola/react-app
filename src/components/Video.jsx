import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeVideo } from '../actions/VideoActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import VideoModal from './Video-Modal/VideoModal';
class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoHeight: 0,
            videoPlaying: false,
            isMuted: false,
            maxTime: 0,
            slideValue: 0,
            videoModalVisibility: false,
            modalVideoSource: '',
            modalVideoThumb: ''
        }
        this.videoPlay = this.videoPlay.bind(this);
        this.muteVideo = this.muteVideo.bind(this);
        this.onVideoProgressChange = this.onVideoProgressChange.bind(this);
        this.getVideoLength = this.getVideoLength.bind(this);
        this.updateSliderTime = this.updateSliderTime.bind(this);
        this.videoAspectRatio = this.videoAspectRatio.bind(this);
        this.toggleVideoModal = this.toggleVideoModal.bind(this);
        this.navigatePlaylist = this.navigatePlaylist.bind(this);
    }

    componentDidMount() {
        this.videoAspectRatio();
        window.addEventListener("resize", this.videoAspectRatio);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.videoAspectRatio);
    }

    getVideoLength(videoID) {
        // alert(videoID)
        let ref = 'video'+videoID;
        this.setState({
            maxTime: this.refs[ref].duration
        })
    }

    updateSliderTime(videoID) {
        let ref = 'video'+videoID;
        this.setState({
            slideValue: this.refs[ref].currentTime
        })
    }

    onVideoProgressChange(event,videoID) {
        let ref = 'video'+videoID;
        if (this.state.videoPlaying) {
            this.refs[ref].play();
        }

        if (event >= this.state.maxTime) {
            this.setState({
                videoPlaying: false,
                slideValue: event
            })
        } else {
            this.setState({
                videoPlaying: true,
                slideValue: event
            })
        }

        this.refs[ref].currentTime = event;

    }

    videoPlay(videoID) {
        console.log(videoID)
        let ref = 'video'+videoID;
        if (this.state.videoPlaying) {
            this.refs[ref].pause();
        } else {
            this.refs[ref].play();
        }

        if (this.state.slideValue >= this.state.maxTime) {
            this.setState({
                slideValue: 0,
                videoPlaying: !this.state.videoPlaying
            })
        } else {
            this.setState({
                videoPlaying: !this.state.videoPlaying
            })
        }


    }

    muteVideo(videoID) {
        let ref = 'video'+videoID;
        if (this.state.isMuted) {
            this.refs[ref].muted = false;
        } else {
            this.refs[ref].muted = true;
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

    toggleVideoModal() {
        this.setState({
            videoModalVisibility: !this.state.videoModalVisibility,
            modalVideoSource: this.props.videoSrc,
            modalVideoThumb: this.props.thumb
        })
    }

    enlargeVideo() {
        console.log(this.props.videoSrc)
        if (this.state.videoPlaying) {
            this.refs.videoRef.pause();
        }
        if (this.state.videoModalVisibility) {
            return (
                <VideoModal modalVisibility={this.state.videoModalVisibility} videoSrc={this.state.modalVideoSource}toggleModal={this.toggleVideoModal} videoThumb={this.state.modalVideoThumb} videoID={this.props.videoID}videoProgress={this.state.slideValue}></VideoModal>
            );
        }
    }

    navigatePlaylist(type) {
        console.log(this.props.videoID);
        if(type=='next'){
            
        } else {

        }

    }

    render() {
        const styles = {
            videoBoxStyle: {
                height: this.state.videoHeight
            }
        };
        const { videoBoxStyle } = styles;
        let videoRef = this.props.videoRef;
        console.log(this.props.videoRef);
        console.log(this.props.videoID)
        return (
            <div className="video-block">
                <div className="video-wrapper" ref="videoBox" style={videoBoxStyle}>
                    <video className="video-div" ref={videoRef} 
                    onLoadedMetadata={(e)=>this.getVideoLength(this.props.videoID)}
                        onTimeUpdate={()=>this.updateSliderTime(this.props.videoID)} poster={this.props.thumb} videoID={this.props.videoID}>
                        <source src={this.props.videoSrc} type="video/mp4" />
                        <source src={this.props.videoSrc} type="video/ogg" />
                    </video>
                    <div className="video-overlay d-flex align-items-center justify-content-center">
                        <span className="video-play-icon" onClick={() => this.videoPlay(this.props.videoID)}>
                            <FontAwesomeIcon icon={`${this.state.videoPlaying ? 'pause' : 'play'}`} />
                        </span>
                    </div>
                    <div className={`video-nav-wrapper ${this.props.navControls ? 'show' : 'hide'}`}>
                        <div className="d-flex justify-content-between">
                            <button className="prev-btn" onClick={() => this.navigatePlaylist('prev')}>
                                <FontAwesomeIcon icon={'backward'} />
                            </button>
                            <button className="next-btn" onClick={() => this.navigatePlaylist('next')}>
                                <FontAwesomeIcon icon={'forward'} />
                            </button>
                        </div>
                    </div>
                </div>
                {/* ${this.props.navControls ? 'show' : 'hide'} */}
                <div className="video-controls d-flex flex-row justify-content-between">
                    <div className="left-controls">
                        <button className="video-btm-play-icon" onClick={()=>this.videoPlay(this.props.videoID)}>
                            <FontAwesomeIcon icon={`${this.state.videoPlaying ? 'pause' : 'play'}`} />
                        </button>
                        <button className="video-btm-play-icon" onClick={()=>this.muteVideo(this.props.videoID)}>
                            <FontAwesomeIcon icon={`${this.state.isMuted ? 'volume-down' : 'volume-up'}`} />
                        </button>
                    </div>
                    <div className="slider-controls align-self-center">
                        <Slider onChange={(e)=>this.onVideoProgressChange(e,this.props.videoID)} min={0} max={this.state.maxTime} value={this.state.slideValue} />
                    </div>
                    <div className="right-controls text-right">
                        <button className={`full-screen-btn ${this.props.videoEnlarged ? '':'hide'}`} onClick={() => this.toggleVideoModal()}>
                            <FontAwesomeIcon icon={'expand'} />
                        </button>
                        <button className={`full-screen-btn ${this.props.videoEnlarged ? 'hide':''}`}  onClick={() => this.setState({videoModalVisibility:false})}>
                            <FontAwesomeIcon icon={'compress'} />
                        </button>
                    </div>
                </div>
                {this.state.videoModalVisibility ? this.enlargeVideo() : ''}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    videos: state.clientUI.videos
})

export default connect(
    mapStateToProps,
    null
)(Video)