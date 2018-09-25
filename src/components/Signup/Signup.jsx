import React, { Component } from 'react'
import '../../styles/ModalStyles.css'
import modalCloseImage from '../../images/closeIconBlue.png'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/fontawesome-free-solid'
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignupPasswordVisible: false
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.modalVisibility} className="" centered="true" backdrop={true}>
        <div className="modal-close" onClick={this.props.toggleModal}>
          <img src={modalCloseImage} className="img-fluid" alt="close-icon" />
        </div>
        <ModalHeader>Signup</ModalHeader>
        <ModalBody>
          <form name="registration_form" id="registration_form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" name="firstname" />
                  <span className="focus-border"></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" name="lastname" />
                  <span className="focus-border"></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Email Id:</label>
                  <input type="text" value={this.state.name} name="Email" onChange={this.handleChangeName} className="border-input" />
                  <span className="focus-border"></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Password:</label>
                  <input type={this.state.isSignupPasswordVisible ? 'text' : 'password'} value={this.state.team} onChange={this.handleChangeTeam} className="border-input" name="password" />
                  <span className="focus-border"></span>
                  <div className="password-visibility" onClick={() => this.setState({ isSignupPasswordVisible: !this.state.isSignupPasswordVisible })}>
                    <FontAwesomeIcon icon={this.state.isSignupPasswordVisible ? faEye : faEyeSlash} />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Gender:</label>
                  <div className="select-dropdown">
                    <select className="select-input" id="birth_year" onChange={this.handleChange}>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <span className="focus-border"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Country</label>
                  <div className="select-dropdown">
                    <select className="select-input" id="birth_year" onChange={this.handleChange}>
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
                    <span className="focus-border"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>City</label>
                  <div className="select-dropdown">
                    <select className="select-input" id="birth_year" onChange={this.handleChange}>
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
                    <span className="focus-border"></span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>D.O.B:</label>
                  <div className="row">
                    <div className="col-sm-3 col-xs-6 mb-0">
                      <div className="form-group select-dropdown">
                        <select className="select-input" id="birth_date" onChange={this.handleChange}>
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
                        </select><span className="focus-border"></span>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 mb-0">
                      <div className="form-group select-dropdown">
                        <select className="select-input" id="birth_month" onChange={this.handleChange}>
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
                        </select><span className="focus-border"></span>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 mb-0">
                      <div className="form-group select-dropdown">
                        <select className="select-input" id="birth_year" onChange={this.handleChange}>
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
                        </select><span className="focus-border"></span>
                      </div>
                    </div>
                  </div>
                  {/* <input type="text" value={this.state.name} onChange={this.handleChangeName} className="border-input" />
                    <span className="focus-border"></span> */}
                </div>
              </div>

              {/* <div className="form-group">
                <label>Country:</label>
                <input type="text" value={this.state.name} name="Email" onChange={this.handleChangeName} className="border-input" />
                <span className="focus-border"></span>
              </div>
            </div> */}
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <input type="submit" value="Submit" color="primary" className="button-primary  mr-2" />
          <button color="danger" onClick={this.props.toggleModal} className="button-secondary">Cancel</button>
        </ModalFooter>
      </Modal >
    )
  }
}

export default Signup
