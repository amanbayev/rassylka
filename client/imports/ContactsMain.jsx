import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import { ContactsCollection } from '/imports/ContactsCollection'

class ContactsMain extends Component {
  constructor(props) {
    super(props)
  }

  handleContactAdd(e) {
    e.preventDefault()
    let newContact = {
      name: 'Talgat Amanbayev',
      email: 'amanbayev@gmail.com'
    }
    Meteor.call("contacts.add", newContact, function(error, result){
      if(error){
        console.log("error", error);
      }
      console.log(result)
    });
  }

  renderContactTable() {
    let contacts = this.props.contacts
    return contacts.map((contact, index) => (
        <tr key={index}>
          <th scope="row">{index + 1 }</th>
          <td>{contact.first_name}</td>
          <td>{contact.last_name}</td>
          <td>{contact.email}</td>
        </tr>
      )
    )
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="container-fluid">
          <header>
            <h1 className="h3"><i className="fa fa-spin"></i>Загрузка</h1>
          </header>
        </div>
      )
    } else {
      return (
        <div>
          <div className="breadcrumb-holder">
            <div className="container-fluid">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Главная</Link></li>
                <li className="breadcrumb-item active">Контакты</li>
              </ul>
            </div>
          </div>
          <section style={{marginTop: '30px'}}>
            <div className="container-fluid">
              <header>
                <h1 className="h3">Контакты</h1>
              </header>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h2 className="h5 display">Список контактов</h2>
                    </div>
                    <div className="card-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.renderContactTable()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
  }
}

export default withTracker(props => {
  const ContactsSubscription = Meteor.subscribe("ContactsCollection");
  return {
    loading: ContactsSubscription ? !ContactsSubscription.ready() : true,
    contacts: ContactsCollection.find().fetch()
  }
})(ContactsMain)
