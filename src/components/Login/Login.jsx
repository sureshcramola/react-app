import React, { Component } from 'react'
import '../../styles/ModalStyles.css'
import modalCloseImage from '../../images/closeIconBlue.png'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash,faEye  } from '@fortawesome/fontawesome-free-solid'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginPasswordVisible: false,
    }
  }

  render() {
    return (
      <div className="login-modal">
        <Modal isOpen={this.props.modalVisibility} className="" centered="true">
          <div className="modal-close" onClick={this.props.toggleModal}>
            <img src={modalCloseImage} className="img-fluid" />
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
                    <FontAwesomeIcon icon={this.state.isLoginPasswordVisible? faEye : faEyeSlash  } />    
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="flex-row justify-content-between">
            <div className="">
              <span className="modal-link" onClick={(e) => this.props.modalSwap('forgot')}>Forgot Password ?</span>
            </div>
            <div className="text-right">
              <input type="submit" value="Submit" color="primary" className="button-primary mr-2" />
              <button color="danger" onClick={this.props.toggleModal} className="button-secondary">Cancel</button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Login
