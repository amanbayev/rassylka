import React, { Component } from 'react'

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
              <li className="active"><a href="index.html"> <i className="icon-home" /><span>Home</span></a></li>
              <li> <a href="forms.html"><i className="icon-form" /><span>Forms</span></a></li>
              <li> <a href="charts.html"><i className="icon-presentation" /><span>Charts</span></a></li>
              <li> <a href="tables.html"> <i className="icon-grid"> </i><span>Tables</span></a></li>
              <li> <a href="login.html"> <i className="icon-interface-windows" /><span>Login page                      </span></a></li>
              <li> <a href="#"> <i className="icon-mail" /><span>Demo</span>
                  <div className="badge badge-warning">6 New</div></a></li>
            </ul>
          </div>
          <div className="admin-menu">
            <ul id="side-admin-menu" className="side-menu list-unstyled">
              <li> <a href="#pages-nav-list" data-toggle="collapse" aria-expanded="false"><i className="icon-interface-windows" /><span>Dropdown</span>
                  <div className="arrow pull-right"><i className="fa fa-angle-down" /></div></a>
                <ul id="pages-nav-list" className="collapse list-unstyled">
                  <li> <a href="#">Page 1</a></li>
                  <li> <a href="#">Page 2</a></li>
                  <li> <a href="#">Page 3</a></li>
                  <li> <a href="#">Page 4</a></li>
                </ul>
              </li>
              <li> <a href="#"> <i className="icon-screen"> </i><span>Demo</span></a></li>
              <li> <a href="#"> <i className="icon-flask"> </i><span>Demo</span>
                  <div className="badge badge-info">Special</div></a></li>
              <li> <a href="#"> <i className="icon-flask"> </i><span>Demo</span></a></li>
              <li> <a href="#"> <i className="icon-picture"> </i><span>Demo</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
