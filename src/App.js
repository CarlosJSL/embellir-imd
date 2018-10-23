import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';
import './App.css';

import Routes from './Routes';
import { setUser } from './store/actions/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.props.setUser(user);
  }

  render() {
    return (
      <React.Fragment >
        <Routes />
      </React.Fragment>
    )
  }
}

export default connect(state => ({}), { setUser })(App)
