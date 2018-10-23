import React , { Component } from 'react';
import { connect } from 'react-redux';

import './Login.css';

export  class Login extends Component {
    
    render() {
        return (
                <div className = "login-main">
                      <div className = "center-div">
                      <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <p>Are you isn't registered? <a href="#">Sign up!</a></p>
                            <button type="submit" class="btn btn-primary">Log in</button>
                            </form>
                      </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})
  
export default connect(mapStateToProps)(Login);