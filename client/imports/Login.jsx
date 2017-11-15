import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="page login-page">
        <div className="container">
          <div className="form-outer text-center d-flex align-items-center">
            <div className="form-inner">
              <div className="logo text-uppercase"><span>Bootstrap</span><strong className="text-primary">Dashboard</strong></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
              <form id="login-form" method="post">
                <div className="form-group">
                  <label htmlFor="login-username" className="label-custom">User Name</label>
                  <input id="login-username" type="text" name="loginUsername" required />
                </div>
                <div className="form-group">
                  <label htmlFor="login-password" className="label-custom">Password</label>
                  <input id="login-password" type="password" name="loginPassword" required />
                </div><a id="login" href="index.html" className="btn btn-primary">Login</a>
                {/* This should be submit button but I replaced it with <a> for demo purposes*/}
              </form><a href="#" className="forgot-pass">Forgot Password?</a><small>Do not have an account? </small><a href="register.html" className="signup">Signup</a>
            </div>
            <div className="copyrights text-center">
              <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
              {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
