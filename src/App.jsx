import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey);
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
            <Header/>
            <div className="main-content-wrapper">
              <Route exact path="/home" component={Home} location={Home}/>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
            </div>
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
