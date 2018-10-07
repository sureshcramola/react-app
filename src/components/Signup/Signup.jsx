import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../styles/ModalStyles.css'
import modalCloseImage from '../../images/closeIconBlue.png'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/fontawesome-free-solid'
import { userRegistration } from '../../actions/UserActions'
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignupPasswordVisible: false,
      user: {
        firstName: '',
        lastName: '',
        gender: '',
        emailId: '',
        country: 'India',
        city: 'Delhi',
        dob: '1994/10/08',
        password: ''
      },
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    console.log(user);
    const { dispatch } = this.props;
    if (user.firstName && user.lastName && user.gender && user.emailId && user.city && user.country && user.dob && user.password) {
      dispatch(userRegistration(user));
    }
  }

  render() {
    const { user, submitted } = this.state;
    return (
      <form name="form" onSubmit={this.handleSubmit}>
        <Modal isOpen={this.props.modalVisibility} className="" centered="true" backdrop="false">
          <div className="modal-close" onClick={this.props.toggleModal}>
            <img src={modalCloseImage} className="img-fluid" />
          </div>
          <ModalHeader>Signup</ModalHeader>
          <ModalBody>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" value={user.firstName} onChange={this.handleChange} className="border-input" name="firstName" />
                  <span className="focus-border"></span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" value={user.lastName} onChange={this.handleChange} className="border-input" name="lastName" />
                  <span className="focus-border"></span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Gender:</label>
                  <input type="text" value={user.gender} onChange={this.handleChange} className="border-input" name="gender" />
                  <span className="focus-border"></span>
                </div>
              </div>
              {/* <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Country</label>
                        {this.getCountryDropdown()}
                      </div>
                      <div className="col-md-6">
                        <label>City</label>
                        {this.state.cityDropdown}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Country:</label>
                      <input type="text" value={this.state.name} name="Email" onChange={this.handleChange} className="border-input" />
                      <span className="focus-border"></span>
                    </div>
                  </div> */}
              <div className="col-md-12">
                <div className="form-group">
                  <label>Email Id:</label>
                  <input type="text" value={user.emailId} name="emailId" onChange={this.handleChange} className="border-input" />
                  <span className="focus-border"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Password:</label>
                  <input type={this.state.isSignupPasswordVisible ? 'text' : 'password'} value={user.password} onChange={this.handleChange} className="border-input" name="password" />
                  <span className="focus-border"></span>
                  <div className="password-visibility" onClick={() => this.setState({ isSignupPasswordVisible: !this.state.isSignupPasswordVisible })}>
                    <FontAwesomeIcon icon={this.state.isSignupPasswordVisible ? faEye : faEyeSlash} />
                  </div>
                </div>
              </div>
            </div>


          </ModalBody>
          <ModalFooter>
            <button className="button-primary  mr-2" onClick={this.handleSubmit}>Submit</button>
            {/* <input type="submit" value="Submit" color="primary" className="button-primary  mr-2" /> */}
            <button color="danger" onClick={this.props.toggleModal} className="button-secondary">Cancel</button>
          </ModalFooter>
        </Modal>
      </form >
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.user,
})

function mapDispatchToProps(dispatch) {
  return {
    signup: (...args) => dispatch(userRegistration(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
