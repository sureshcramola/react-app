import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeVideo } from '../actions/VideoActions'
import '../styles/VideosStyle.css'
import Video from './Video';
class Videos extends Component {
    constructor(props) {
        super(props)
    }
    
    
    renderVideoList(){
        const { videos } = this.props
        return videos.map((video,index) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <Video videoID={index} videoRef={`video${index}`} videoSrc={video.videoSrc} thumb={video.thumb} navControls={false} videoEnlarged={true}/>
              </div>)
          });
    }

    render() {
        return (
            <div className="blog-wrapper">
                <div className="row">
                    {this.renderVideoList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    videos: state.clientUI.videos
})

function mapDispatchToProps(dispatch) {
    return {
        setVideo: (...args) => dispatch(changeVideo(...args))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Videos)