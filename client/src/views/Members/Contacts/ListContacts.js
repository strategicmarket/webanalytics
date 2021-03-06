
//////////////////////////////////////////////////////////////////////////
/////////////////  Component Renders List of Contacts  //////////////////
/////////////////    server side 'in memory' db    //////////////////////
////////////////////////////////////////////////////////////////////////

import React, {Component}     from 'react'
import { Link }               from 'react-router-dom'
import PropTypes              from 'prop-types'
import escapeRegExp           from 'escape-string-regexp'
import sortBy                 from 'sort-by'

// note that webpack copy puts all image files in the root folder image
// static assets can be accessed at that relative address
var image1 = '../../../../img/delete.png'
var image2 = '../../../../img/search.png'
var image3 = '../../../../img/person.png'

class ListContacts extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }

  render() {
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    let showingContacts

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))

    }
    else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className = 'list-contacts'>
        <div className = 'list-contacts-top'>
          <input
            className = 'search-contacts'
            style={{
                backgroundImage: `url(${image2})`
              }}
            type='text'
            placeholder = 'Search contacts'
            value={this.state.query}
            onChange = { (event) => this.updateQuery(event.target.value)}
          />
        <Link
          to="/members/createcontacts"
          className = "add-contact"
          style={{
              backgroundImage: `url(${image3})`
            }}
        >Add Contact</Link>

      </div>

      {showingContacts.length !== contacts.length && (
        <div className = 'showing-contacts'>
          <span> Showing {showingContacts.length } out of {contacts.length } in our directory</span>
          <button onClick={this.clearQuery}> Show All </button>

        </div>
      )}

      <ol className='contact-list'>
        {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
                }}
                />

              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>

             <button  onClick={()=>onDeleteContact(contact)} className='contact-remove' style={{
                 backgroundImage: `url(${image1})`
               }} >
              Remove
             </button>

          </li>
        ))}
      </ol>
    </div>
    )
  }
}

export default ListContacts
