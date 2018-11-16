import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUIVisibility, changeUIMode } from '../actions/VideoActions'
import '../styles/BlogStyle.css'
import Video from './Video';
class Videos extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="blog-wrapper">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <Video />
                    </div>
                </div>
                {/* <div className="mt-3 mb-3">
                    <button onClick={this.changeMode} className="button-primary mr-2">Theatre Mode</button>
                    <button onClick={this.props.toggleModal} className="button-secondary">Normal Mode</button>
                </div> */}
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
)(Videos)