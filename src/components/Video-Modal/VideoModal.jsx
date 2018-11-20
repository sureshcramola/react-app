import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/ModalStyles.css'
import modalCloseImage from '../../images/closeIconBlue.png'
import { Modal, ModalBody } from 'reactstrap';
import Video from '../Video';
import 'rc-slider/assets/index.css';
import '../../styles/VideosStyle.css'

class VideoModal extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        console.log(this.props.videoSrc)
        return (
            <div className="video-modal">
                <Modal isOpen={this.props.modalVisibility}  centered="true" className="video-modal">
                    <div className="modal-close" onClick={this.props.toggleModal}>
                        <img src={modalCloseImage} className="img-fluid" alt="close-icon" />
                    </div>
                    <ModalBody>
                        <Video videoSrc={this.props.videoSrc} thumb={this.props.videoThumb} />
                    </ModalBody>
                </Modal>
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
)(VideoModal)