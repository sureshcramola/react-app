import React, { Component } from 'react'
import '../../styles/ModalStyles.css'
import modalCloseImage from '../../images/closeIconBlue.png'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:''
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.modalVisibility} className="modal-forget" centered="true">
        <ModalBody>
          <div className="modal-close" onClick={this.props.toggleModal}>
            <img src={modalCloseImage} className="img-fluid" alt="close-icon"/>
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
          <button color="danger" onClick={(e) => this.props.modalSwap('login')} className="button-secondary">Cancel</button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ForgotPassword
