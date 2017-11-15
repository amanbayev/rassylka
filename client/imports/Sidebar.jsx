import React, { Component } from 'react'

import NavLink from '/client/imports/NavLink'

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="side-navbar">
        <div className="side-navbar-wrapper">
          <div className="sidenav-header d-flex align-items-center justify-content-center">
            <div className="sidenav-header-inner text-center"><img src="img/avatar-1.jpg" alt="person" className="img-fluid rounded-circle" />
              <h2 className="h5 text-uppercase">Anderson Hardy</h2><span className="text-uppercase">Web Developer</span>
            </div>
            <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
          </div>
          <div className="main-menu">
            <ul id="side-main-menu" className="side-menu list-unstyled">
              <NavLink exact to="/">
                <span>
                  <i className="icon-home"></i>
                  Главная
                </span>
              </NavLink>
              <NavLink to="/news">
                <span>
                  <i className="icon-rss-feed" />
                  Новости
                </span>
              </NavLink>
              <NavLink to="/contacts">
                <span>
                  <i className="icon-user" />
                  Контакты
                </span>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
