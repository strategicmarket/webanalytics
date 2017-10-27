

//////////////////////////////////////////////////////////////////////////
/////////////////  Main App for Bot Contact Mgmt        //////////////////
/////////////////    Connecting Business to Bots   //////////////////////
////////////////////////////////////////////////////////////////////////


import React, { Component }   from 'react';
import ListContacts           from './ListContacts';
import * as ContactsAPI       from '../utils/ContactsAPI'
import CreateContact          from '../CreateContact/CreateContact'
import { Route }              from 'react-router-dom'
import '../css/style.css'

// note lifecycle method to load all contacts when mounted

class Contacts extends Component {
  state = {
    contacts: [ ]
  }

  removeContact = (contact) => {
    this.setState( (state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id )
    }) )
    ContactsAPI.remove(contact)
  }

  // included for illustration purposes. This could lead to unpredictable results
  // by mutating state directly
  addContact = (contact) => {
    this.setState( (state) => ({
      contacts: this.state.contacts.push(contact)
    }) )
    ContactsAPI.create(contact)
  }
  // this is the correct way to update state. Array.slice() and spread operators
  // would also be apropriate
  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([contact])
      }))
    })
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }
  render() {
    return (
      <div className = 'app'>
        <Route exact path ="/members/contacts" render={() => (
          <ListContacts
            onDeleteContact = { this.removeContact }
            contacts={this.state.contacts}
            />
          )} />

        <Route exact path ="/members/createcontacts" render={({history}) => (
          <CreateContact
            onCreateContact={ (contact) => {
              this.createContact(contact)
              history.push('/members/contacts')
            }}
            />
          )} />

       </div>
    );
  }
}

export default Contacts;
