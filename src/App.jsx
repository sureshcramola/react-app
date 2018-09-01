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
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
