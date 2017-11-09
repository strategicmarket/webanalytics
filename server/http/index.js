'use strict';

//////////////////////////////////////////////////////////////////
////////////    Initialization Route for Server    //////////////
//////////        Connect streams and server      //////////////
///////////////////////////////////////////////////////////////

const config 	= 		require('../config');
const Redis =       require('ioredis');

let port = config.redis.port;
let host = config.redis.host;
let password = config.redis.password;

let redis = new Redis({
   port: port,
   host: host
 });
let pub = new Redis({
   port: port,
   host: host
 })

 let sendMsg = {}



// Exported function to initialize server
const init = function(app){

	let server 	= 	require('http').Server(app);
  let io =        require('socket.io')(server)

  // sockets acknowledge a connected user
  io.on('connection', function(socket) {
    console.log("a user connected")
    // redis reacts to a message received on subscribed channel
    redis.on('message', function (channel, redisMsg) {
        console.log('Chaoticdash detected on  ' + channel + ' this message: ' + redisMsg);

        let parseMsg = JSON.parse(redisMsg)
        sendMsg.date      = (new Date()).toLocaleString()
        sendMsg.username  = parseMsg.name
        sendMsg.content   = parseMsg.text

        socket.emit('message', sendMsg);
    });
  })

  // dash1 channel be published to by chaoticbanter for testing
  redis.subscribe('dash1', function (err, count) {
			console.log("Subscribed to " + count + " channel")
    });



	// The server object will be then used to listen to a port number
	return server;
}

module.exports = init;
