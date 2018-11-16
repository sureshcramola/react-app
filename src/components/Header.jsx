import React, { Component } from 'react'
// import { connect } from 'react-redux'
import '../styles/HeaderStyles.css'
import '../styles/ModalStyles.css'
import logoImage from '../images/logoh.png'
import { Link } from "react-router-dom";
import Login from './Login/Login';
import ForgotPassword from './Forgot-Password/Forgot-password';
import Signup from './Signup/Signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
// import * as utility from "../utils/getURLs"
// import {userSignOut} from '../actions'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUserProfileCardOpen: false,
      loginModalVisibility: false,
      signupModalVisibility: false,
      forgotModalVisibility: false      
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignupModal = this.toggleSignupModal.bind(this);
    this.toggleForgotModal = this.toggleForgotModal.bind(this);
    this.modalSwap = this.modalSwap.bind(this);
    this.changePasswordVisibility = this.changePasswordVisibility.bind(this);
  }

  // Toggle Login Modal based on loginModalVisibility State
  toggleLoginModal() {
    this.setState({
      loginModalVisibility: !this.state.loginModalVisibility
    })
  }

  toggleSignupModal() {
    this.setState({
      signupModalVisibility: !this.state.signupModalVisibility
    })
  }

  toggleForgotModal() {
    this.setState({
      forgotModalVisibility: !this.state.forgotModalVisibility
    })
  }

  changePasswordVisibility() {
    var passRef = this.refs.loginPassword
  }

  modalSwap(modalName) {
    switch (modalName) {
      case 'login':
        this.setState({
          loginModalVisibility: true,
          signupModalVisibility: false,
          forgotModalVisibility: false
        })
        break;
      case 'signup':
        this.setState({
          loginModalVisibility: false,
          signupModalVisibility: true,
          forgotModalVisibility: false
        })
        break;
      case 'forgot':
        this.setState({
          loginModalVisibility: false,
          signupModalVisibility: false,
          forgotModalVisibility: true
        })
        break;

      default:
        this.setState({
          loginModalVisibility: false,
          signupModalVisibility: false,
          forgotModalVisibility: false
        })
        break;
    }
  }



  renderLoginModal() {
    if (this.state.loginModalVisibility) {
      return (
        <Login modalVisibility={this.state.loginModalVisibility} modalSwap={this.modalSwap} toggleModal={this.toggleLoginModal}></Login>
      );
    }
  }

  renderForgotModal() {
    if (this.state.forgotModalVisibility) {
      return (
        <ForgotPassword modalVisibility={this.state.forgotModalVisibility} modalSwap={this.modalSwap} toggleModal={this.toggleForgotModal}></ForgotPassword>
      );
    }
  }

  renderSignupModal() {
    if (this.state.signupModalVisibility) {
      return (
        <Signup modalVisibility={this.state.signupModalVisibility} toggleModal={this.toggleSignupModal}></Signup>
      );
    }
  }

  render() {
    const isUserLoggedIn = false;

    return (
      <div className={`header-wrapper ${window.location.pathname == '/' ? 'fixed' : ''}`}>
        <Link className="logo-wrap underline-none" to="/">
          <img className="width-100" src={logoImage}  alt="logo"/>
        </Link>

        <div className="rightBar ml-auto d-flex flex-row justify-content-end">
          <div className="left-links">
            <div>
              <Link className="nav-links underline-none" to="/about">About Us</Link>
              <Link className="nav-links underline-none" to="/my-videos">My Videos</Link>
              {/* <Link className="nav-links underline-none" to="/account">Profile</Link> */}
              <Link className="nav-links underline-none" to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className={`user-profile-wrapper ${isUserLoggedIn ? 'd-flex flex-row align-items-center show' : 'hide'}`}>
            <button className="notification-wrapper">
              <FontAwesomeIcon className="bell-icon" icon="bell" />
              <span className="notification-indicator"></span>
            </button>
            <button className="user-detail-wrapper d-flex flex-row align-items-center justify-content-between">
              <div className="user-profile-img">
                <img src={logoImage} className="width-100"  alt="logo"/>
                <div className="user-status-indicator">
                </div>
              </div>
              {/* <span className="user-name-span">Suresh Ramola</span> */}
            </button>
            <div className={`dropdown-card dropdown-transition ${this.state.isUserProfileCardOpen ? 'dropdown--toggled' : ''}`} ref="dropdownProfileCard">
              <ul>
                <li >
                  <span className="user-name">SU</span>
                </li>
                <li className="first-child">
                  <span className="left-icon">
                    <FontAwesomeIcon icon="circle" className="status-icon" />
                  </span>
                  <span className="status-text">Active</span>
                </li>
                <li className="border-list-bottom list-gap-btm"></li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="video" className="profile-icon" />
                    </span>
                    <span className="link-text">My TubeIns</span>
                  </a>
                </li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="bell" className="profile-icon" />
                    </span>
                    <span className="link-text">Notifications</span>
                  </a>
                </li>
                <li className="border-list-bottom list-gap-top"></li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="user-edit" className="profile-icon" />
                    </span>
                    <span className="link-text">Edit Profile</span>
                  </a>
                </li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon={['far', 'credit-card']} className="profile-icon" />
                    </span>
                    <span className="link-text">Payments</span>
                  </a>
                </li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="cubes" className="profile-icon" />
                    </span>
                    <span className="link-text">Subscription</span>
                  </a>
                </li>
                <li className="border-list-bottom list-gap-top"></li>
                <li className="dropdown-link">
                  <a href="#" className="d-inline-flex flex-row align-items-center">
                    <span className="left-icon">
                      <FontAwesomeIcon icon="power-off" className="profile-icon" />
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
