import React, { Component } from 'react';
import { Provider,connect } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'


class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Header/>
            <div className="main-content-wrapper">
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
            </div>
            <Footer/>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
