import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import ContactsMain from '/client/imports/ContactsMain'
import NewsMain from '/client/imports/NewsMain'
import NotFound from '/client/imports/NotFound'
import Dashboard from '/client/imports/Dashboard'

import Sidebar from '/client/imports/Sidebar'
import Navbar from '/client/imports/Navbar'
import Footer from '/client/imports/Footer'

export default class Landing extends Component {
  render(){
    return (
      <div>
        <Sidebar />
        <div className="page home-page">
          <Navbar />
            <Switch>
              <Route exact path="/" component={ Dashboard } />
              <Route path="/contacts" component={ ContactsMain} />
              <Route path="/news" component={ NewsMain} />
              <Route component={ NotFound } />
            </Switch>
          <Footer />
        </div>
      </div>
    )
  }
}
