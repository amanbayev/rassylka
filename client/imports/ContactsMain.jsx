import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import { ContactsCollection } from '/imports/ContactsCollection'

class ContactsMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCreatingContact: false,
      first_name: '',
      last_name: '',
      email: ''
    }
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

  handleContactFormSubmit(e) {
    e.preventDefault()
    let { email, first_name, last_name } = this.state
    let newContact = {
      email,
      first_name,
      last_name
    }
    Meteor.call("contacts.add", newContact, function(error, result){
      if(error){
        Bert.alert({
          title: 'Ошибка',
          message: error.reason,
          type: 'danger',
          style: 'growl-top-right',
          icon: 'fa-cross-o'
        });
      }
      if(result){
        Bert.alert({
          title: 'Контакт добавлен',
          message: newContact.first_name + ' ' + newContact.last_name + ' успешно добавлен в систему!',
          type: 'success',
          style: 'growl-top-right',
          icon: 'fa-users'
        });
      }
    });
    this.setState({isCreatingContact:false, email: '', first_name:'', last_name:''})
  }

  renderAddContactsForm() {
    if (this.state.isCreatingContact) {
      return (
        <div className="row" style={{marginTop: '30px'}}>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center">
                <h2 className="h5 display display">Добавление нового контакта</h2>
              </div>
              <div className="card-body">
                <p>Заполните сведения о новом контакте.</p>
                <form onSubmit={this.handleContactFormSubmit.bind(this)}>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" className="form-control"
                      value={this.state.email}
                      onChange={(e)=>(this.setState({email: e.target.value}))}
                      />
                  </div>
                  <div className="form-group">
                    <label>Имя</label>
                    <input type="text" placeholder="Имя" className="form-control"
                      value={this.state.first_name}
                      onChange={(e)=>(this.setState({first_name: e.target.value}))}
                      />
                  </div>
                  <div className="form-group">
                    <label>Фамилия</label>
                    <input type="text" placeholder="Фамилия" className="form-control"
                      value={this.state.last_name}
                      onChange={(e)=>(this.setState({last_name: e.target.value}))}
                      />
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Добавить" className="btn btn-primary" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <button className="btn btn-primary"
          onClick={(e)=>(this.setState({isCreatingContact: true}))}
          >Добавить контакт</button>
      )
    }
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
              {this.renderAddContactsForm()}
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
