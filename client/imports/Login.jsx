import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state= {
      login: '',
      password: ''
    }
  }
  handleLoginSubmit(e) {
    e.preventDefault()
    let { login, password } = this.state
    let history = this.props.history
    Meteor.loginWithPassword(login, password, (error)=> {
      if (error) {
        Bert.alert({
          title: 'Ошибка',
          message: error.reason,
          type: 'danger',
          style: 'growl-top-right',
          icon: 'fa-cross-o'
        });
      } else {
        Bert.alert({
          title: 'Успешная авторизация',
          message: 'Добро пожаловать, ' + Meteor.user().profile.first_name + '!',
          type: 'success',
          style: 'growl-top-right',
          icon: 'fa-check'
        });
        console.log(history);
        console.log('redirecting')
        history.push('/')
      }
      return true
    })
  }
  render() {
    return (
      <div className="page login-page">
        <div className="container">
          <div className="form-outer text-center align-items-center">
            <div className="form-inner">
              <div className="logo text-uppercase">РАССЫЛЬ<strong className="text-primary">Щ</strong>ИК</div>
              <p>Для начала работы пройдите авторизацию.</p>
              <form id="login-form" method="post" onSubmit={this.handleLoginSubmit.bind(this)}>
                <div className="form-group">
                  <input type="text" value={this.state.login}
                    onChange={(e)=>{this.setState({login:e.target.value})}}
                    />
                </div>
                <div className="form-group">
                  <input type="password" value={this.state.password}
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
              </form><a href="#" className="forgot-pass">Забыли пароль?</a><small>Нет аккаунта? </small><a href="register.html" className="signup">Регистрация</a>
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

export default withRouter(Login)
