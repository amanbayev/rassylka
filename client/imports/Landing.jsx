import React, { Component } from 'react'

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
          <section>
            <h1>Content</h1>
          </section>
          <Footer />
        </div>
      </div>
    )
  }
}
