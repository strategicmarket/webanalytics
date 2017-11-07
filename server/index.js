'use strict';
/////////////////////////////////////////////////////
////////  		platform management             ///////
///////         xio labs v 1.2.0            ///////
//////////////////////////////////////////////////

const express =     require('express')
const bodyParser =  require('body-parser')
const cors =        require('cors')

const app = express()

// server components
const server =      require('./http')(app);
const config =      require('./config')
const contacts =    require('./db/contacts')

app.use(express.static('public'))
app.use(cors())

//////////////////////////////////////////////////////////////////
////////////     authentication fuctions           //////////////
//////////             auth0 saas                 //////////////
///////////////////////////////////////////////////////////////
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'
}

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz([ 'read:messages' ]);
const checkScopesAdmin = jwtAuthz([ 'write:messages' ]);

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// help doc
app.get('/', (req, res) => {
  const help = `
  <pre>
    MY APIs

    Use an Authorization header to work with your own data:

    fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

    The following endpoints are available:

    GET /contacts
    DELETE /contacts/:id
    POST /contacts { name, email, avatarURL }
  </pre>
  `

  res.send(help)
})

// simple auth test
app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
    next()
  } else {
    res.status(403).send({
    error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})


// api catalogue
app.get('/contacts', (req, res) => {
  res.send(contacts.get(req.token))
})

app.delete('/contacts/:id', (req, res) => {
  res.send(contacts.remove(req.token, req.params.id))
})

app.post('/contacts', bodyParser.json(), (req, res) => {
  const { name, email } = req.body

  if (name && email) {
    res.send(contacts.add(req.token, req.body))
  } else {
    res.status(403).send({
      error: 'Please provide both a name and email address'
    })
  }
})

///////////////test routines auth0 ////////////////////
app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', checkJwt, checkScopes, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this." });
});

app.post('/api/admin', checkJwt, checkScopesAdmin, function(req, res) {
  res.json({ message: "Hello from an admin endpoint! You need to be authenticated and have a scope of write:messages to see this." });
});

// spin up http server
server.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
