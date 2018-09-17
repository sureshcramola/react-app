import React, { Component } from 'react'
// import { connect } from 'react-redux'
import '../styles/HeaderStyles.css'
import '../styles/ModalStyles.css'
import '../styles/ContactStyle.css'
import logoImage from '../images/logoh.png'
import modalCloseImage from '../images/closeIconBlue.png'
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
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
      forgotModalVisibility: false,
      isLoginPasswordVisible: false,
      isSignupPasswordVisible: false
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

  renderForgotModal() {
    if (this.state.forgotModalVisibility) {
      return (
        <Modal isOpen={this.state.forgotModalVisibility} className="modal-forget" centered="true">
          <ModalBody>
            <div className="modal-close" onClick={(e) => this.modalSwap('login')}>
              <img src={modalCloseImage} className="img-fluid"/>
            </div>
            <div className="text-center">
              <span className="forgot-icon d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faKey} />
              </span>
              <h4 className="forget-title">Forgot Your Password ?</h4>
              <p className="forget-subtitle">No worries ! Enter yout email and we will send you a reset link</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="width-100">Email:</label>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" />
                  <span className="focus-border"></span>
                </div>
              </div>
            </div>

          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="button-primary  mr-2" />
            <button color="danger" onClick={(e) => this.modalSwap('login')} className="button-secondary">Cancel</button>
          </ModalFooter>
        </Modal>
      );
    }
  }

  renderLoginModal() {
    if (this.state.loginModalVisibility) {
      return (
        <Modal isOpen={this.state.loginModalVisibility} className="" centered="true">
          <div className="modal-close" onClick={(e) => this.modalSwap('forgot')}>
            <img src={modalCloseImage} className="img-fluid"/>
          </div>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Username/Email Id:</label>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" />
                  <span className="focus-border"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Password:</label>
                  <input type={this.state.isLoginPasswordVisible ? 'text' : 'password'} value={this.state.team} onChange={this.handleChangeTeam} className="border-input" />
                  <span className="focus-border"></span>
                  <div className="password-visibility" onClick={() => this.setState({ isLoginPasswordVisible: !this.state.isLoginPasswordVisible })}>
                    {/* <FontAwesomeIcon icon={this.state.isLoginPasswordVisible? faEye:'fa fa-eye-slash' } /> */}
                    <i className={this.state.isLoginPasswordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'} aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="flex-row justify-content-between">
            <div className="">
              <span className="modal-link" onClick={(e) => this.modalSwap('forgot')}>Forgot Password ?</span>
            </div>
            <div className="text-right">
              <input type="submit" value="Submit" color="primary" className="button-primary mr-2" />
              <button color="danger" onClick={this.toggleLoginModal} className="button-secondary">Cancel</button>
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
          <div className="modal-close" onClick={this.toggleSignupModal}>
            <img src={modalCloseImage} className="img-fluid"/>
          </div>
          <ModalHeader>Signup</ModalHeader>
          <ModalBody>
            <form name="registration_form" id="registration_form">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" name="firstname" />
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" name="lastname" />
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Gender:</label>
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" />
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>D.O.B:</label>
                    <div className="row">
                    <div className="form-group col-sm-4 col-xs-6">
                      <select className="form-control" id="birth_date" onChange={this.handleChange}>
                        <option value="Day" disabled="" >Day</option>
                        <option>01</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-4 col-xs-6">
                      <label className="sr-only"></label>
                      <select className="form-control" id="birth_month" onChange={this.handleChange}>
                        <option value="month" disabled="" >Month</option>
                        <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12"> Dec</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-4 col-xs-12">
                      <label className="sr-only"></label>
                      <select className="form-control" id="birth_year" onChange={this.handleChange}>
                        <option value="year" disabled="" >Year</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                      </select>
                    </div>
                    </div>
                    {/* <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" />
                    <span className="focus-border"></span> */}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Country</label>
                      {/* {this.getCountryDropdown()} */}
                    </div>
                    <div className="col-md-6">
                      <label>City</label>
                      {/* {this.state.cityDropdown} */}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Country:</label>
                    <input type="text" value={this.state.name} name="Email" onChange={this.handleChangeName} className="border-input" />
                    <span className="focus-border"></span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Email Id:</label>
                    <input type="text" value={this.state.name} name="Email" onChange={this.handleChangeName} className="border-input" />
                    <span className="focus-border"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Password:</label>
                    <input type={this.state.isSignupPasswordVisible ? 'text' : 'password'} value={this.state.team} onChange={this.handleChangeTeam} className="border-input" name="password" />
                    <span className="focus-border"></span>
                    <div className="password-visibility" onClick={() => this.setState({ isSignupPasswordVisible: !this.state.isSignupPasswordVisible })}>
                      <i className={this.state.isSignupPasswordVisible ? 'fa fa-eye' : 'fa fa-eye-slash'} aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="button-primary  mr-2" />
            <button color="danger" onClick={this.toggleSignupModal} className="button-secondary">Cancel</button>
          </ModalFooter>
        </Modal>
      );
    }
  }

  render() {
    const isUserLoggedIn = false;
    // let fixedClass = null;
    // if(this.props.location.pathname == "/"){
    //   fixedClass = 'fixed'
    // }
    return (
      <div className={`header-wrapper ${window.location.pathname == '/'?'fixed':''}`}>
        <Link className="logo-wrap underline-none" to="/">
          <img className="width-100" src={logoImage} />
        </Link>

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
            </div>
          </div>

          <div className={`user-profile-wrapper ${isUserLoggedIn ? 'd-flex flex-row align-items-center show' : 'hide'}`}>
            <button className="notification-wrapper">
              <FontAwesomeIcon className="bell-icon" icon="bell" />
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
