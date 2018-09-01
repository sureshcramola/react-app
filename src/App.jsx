import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="main-content-wrapper">
          <div className="container">
            <h1 className="page-heading text-center">Contact Us</h1>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                  <label className="w-100">Name</label>
                  <input type="text" name="name"/>
                </div>
                <div className="form-group">
                  <label className="w-100">Email</label>
                  <input type="text" name="email"/>
                </div>
                <div className="form-group">
                  <label className="w-100">Phone Number</label>
                  <input type="text" name="phone_number"/>
                </div>
                <div className="form-group">
                  <label className="w-100">Message</label>
                  <textarea rows="3"></textarea>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">

              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
