import React, { Component } from 'react'
// import { connect } from 'react-redux'
import '../styles/HeaderStyles.css'
import '../styles/ModalStyles.css'
import '../styles/ContactStyle.css'
import logoImage from '../images/logoh.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
// import * as utility from "../utils/getURLs"
// import {userSignOut} from '../actions'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUserProfileCardOpen:false,
      loginModalVisibility:false,
      signupModalVisibility:false,
      forgotModalVisibility:false
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignupModal = this.toggleSignupModal.bind(this);
    this.toggleForgotModal = this.toggleForgotModal.bind(this);
    this.modalSwap = this.modalSwap.bind(this);
  }

  // Toggle Login Modal based on loginModalVisibility State
  toggleLoginModal(){
    this.setState({
      loginModalVisibility:!this.state.loginModalVisibility
    })
  }

  toggleSignupModal(){
    this.setState({
      signupModalVisibility:!this.state.signupModalVisibility
    })
  }

  toggleForgotModal(){
    this.setState({
      forgotModalVisibility:!this.state.forgotModalVisibility
    })
  }

  modalSwap(modalName){
    switch(modalName) {
      case 'login':
        this.setState({
          loginModalVisibility:true,
          signupModalVisibility:false,
          forgotModalVisibility:false
        })
        break;
      case 'signup':
        this.setState({
          loginModalVisibility:false,
          signupModalVisibility:true,
          forgotModalVisibility:false
        })
        break;
      case 'forgot':
        this.setState({
          loginModalVisibility:false,
          signupModalVisibility:false,
          forgotModalVisibility:true
        })
        break;
     
      default:
        this.setState({
          loginModalVisibility:false,
          signupModalVisibility:false,
          forgotModalVisibility:false
        })
        break;
  }
  }

  renderForgotModal() {
    if (this.state.forgotModalVisibility) {
      return (
        <Modal isOpen={this.state.forgotModalVisibility} className="modal-container" centered="true">
          <ModalBody>
            <div className="text-center">
              <span className="forgot-icon">

              </span>
              <h4>Forgot Your Password ?</h4>
              <p>No worries ! Enter yout email and we will send you a reset link</p>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label className="width-100">Email:</label>
                <input type="text" value={this.state.name} onChange={this.handleChangeName}  />
              </div>
            </div>
            
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="button-primary" />
            <button color="danger"  onClick={(e) => this.modalSwap('login')}  className="button-secondary">Cancel</button>
          </ModalFooter>
        </Modal>
      );
    }
  }

  renderLoginModal() {
    if (this.state.loginModalVisibility) {
      return (
        <Modal isOpen={this.state.loginModalVisibility} className="" centered="true">
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Username/Email Id:</label>
                <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Password:</label>
                <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="flex-row justify-content-between">
            <div className="">
              <span className="modal-link" onClick={(e) => this.modalSwap('forgot')}>Forgot Password ?</span>
            </div>
            <div className="text-right">
              <input type="submit" value="Submit" color="primary" className="button-primary mr-3" />
              <button color="danger" onClick={this.toggleLoginModal}  className="button-secondary">Cancel</button>
            </div>
          </ModalFooter>
        </Modal>
      );
    }
  }

  renderSignupModal() {
    if (this.state.signupModalVisibility) {
      return (
        <Modal isOpen={this.state.signupModalVisibility} className="" centered="true" backdrop="false">
          <ModalHeader>Signup</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Username/Email Id:</label>
                <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label>Password:</label>
                <input type="text" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="button-primary" />
            <button color="danger" onClick={this.toggleSignupModal} className="button-secondary">Cancel</button>
          </ModalFooter>
        </Modal>
      );
    }
  }

  render() {
    const isUserLoggedIn = false;

    return (
      <div className="header-wrapper">
        <a href="#" className="logo-wrap">
          <img className="width-100" src={logoImage} />
        </a>
        
        <div className="rightBar ml-auto d-flex flex-row justify-content-end">
          {/* <div className="search-input-wrap align-self-center">
            <span className="icon-wrap">
              <FontAwesomeIcon icon="search"/>
            </span>
            <input type="text" placeholder="Search" className="search-input form-input" />
          </div> */}
          <div className="left-links">
            <div>
              <Link className="nav-links underline-none" to="/about">About Us</Link>
              <Link className="nav-links underline-none" to="/blog">Blog</Link>
              {/* <Link className="nav-links underline-none" to="/account">Profile</Link> */}
              <Link className="nav-links underline-none" to="/contact">Contact Us</Link>
              <a className="nav-links underline-none" href="http://www.mcaleicester.co.uk/if-the-lid-fits/tourer">Demo</a>
            </div>
          </div>

          <div className={`user-profile-wrapper ${isUserLoggedIn ? 'd-flex flex-row align-items-center show' : 'hide'}`}>
            <button className="notification-wrapper">
              <FontAwesomeIcon className="bell-icon" icon="bell"/>
              <span className="notification-indicator"></span>
            </button>
            <button className="user-detail-wrapper d-flex flex-row align-items-center justify-content-between">
              <div className="user-profile-img">
                <img src={logoImage} className="width-100" />
                <div className="user-status-indicator">
                </div>
              </div>
              {/* <span className="user-name-span">Salah Faroughi</span> */}
            </button>
            <div className={`dropdown-card dropdown-transition ${this.state.isUserProfileCardOpen ? 'dropdown--toggled' : ''}`} ref="dropdownProfileCard">
              <ul>
                <li >
                  <span className="user-name">SU</span>
                </li>
                <li className="first-child">
                  <span className="left-icon">
                    <FontAwesomeIcon icon="circle" className="status-icon"/>
                  </span>
                  <span className="status-text">Active</span>
                </li>
                <li className="border-list-bottom list-gap-btm"></li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="video" className="profile-icon"/>
                    </span>
                    <span className="link-text">My TubeIns</span>
                  </a>
                </li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                     <FontAwesomeIcon icon="bell" className="profile-icon"/>
                    </span>
                    <span className="link-text">Notifications</span>
                  </a>
                </li>
                <li className="border-list-bottom list-gap-top"></li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="user-edit" className="profile-icon"/>
                    </span>
                    <span className="link-text">Edit Profile</span>
                  </a>
                </li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon={['far', 'credit-card']} className="profile-icon"/>
                    </span>
                    <span className="link-text">Payments</span>
                  </a>
                </li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="cubes" className="profile-icon"/>
                    </span>
                    <span className="link-text">Subscription</span>
                  </a>
                </li>
                <li className="border-list-bottom list-gap-top"></li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="power-off" className="profile-icon"/>
                    </span>
                    <span className="link-text">Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`user-login-signup-wrapper ${isUserLoggedIn ? 'hide' : 'd-flex align-items-center'}`}>
            <button className="main-btn-sm" onClick={this.toggleLoginModal}>Log in</button>
            <button className="main-btn-sm" onClick={this.toggleSignupModal}>Sign up</button>
          </div>
          {this.state.loginModalVisibility ? this.renderLoginModal() : ''}
          {this.state.signupModalVisibility ? this.renderSignupModal() : ''}
          {this.state.forgotModalVisibility ? this.renderForgotModal() : ''}
        </div>
      </div>
    )
  }
}

export default Header
