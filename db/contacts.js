'use strict';

//////////////////////////////////////////////////////////////////////////
///////////////// Define Constants for Contact App //////////////////////
/////////////////    server side 'in memory' db    //////////////////////
////////////////////////////////////////////////////////////////////////

const clone = require('clone')
const config = require('../config/config')

// unit test db
const db = {}

// unit test data
const defaultData = {
  contacts: [
    {
      id: 'chatbot',
      name: 'Chatbot',
      email: 'chat@gmail.com',
      avatarURL: config.origin + '/img/chatbot.jpg'
    },
    {
      id: 'helpbot',
      name: 'Helpbot',
      email: 'help@gmail.com',
      avatarURL: config.origin + '/img/helpbot.jpg'
    },
    {
      id: 'smartbot',
      name: 'Smartbot',
      email: 'smart@gmail.com',
      avatarURL: config.origin + '/img/smartbot.jpg'
    }
  ]
}

// unit test db functions
const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
