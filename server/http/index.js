'use strict';


//////////////////////////////////////////////////////////////////
////////////    Initialization Route for Server    //////////////
//////////        Connect streams and server      //////////////
///////////////////////////////////////////////////////////////

var config 	= 		require('../config');
var Redis =       require('ioredis');

let port = config.redis.port;
let host = config.redis.host;
let password = config.redis.password;

var redis = new Redis({
   port: port,
   host: host

 });
var pub = new Redis({
   port: port,
   host: host
 })

redis.on('message', function (channel, redisMsg) {
     console.log('Received  ' + channel + ' message: ' + redisMsg);

     var parseMsg = JSON.parse(redisMsg)
     var textMsg = parseMsg.text

     var sendMsg = {}
     sendMsg.date      = (new Date(message.date)).toLocaleString();
     message.username  = parseMsg.name
     message.content   = parseMsg.text

    //socket.broadcast.to(roomId).emit('addMessage', textMsg);
    socket.broadcast.to("dash").emit('addMessage', message);
   });

// Exported function to initialize server
const init = function(app){

	let server 	= 	require('http').Server(app);
  redis.subscribe('newMessage', function (err, count) {
			console.log("Subscribed to " + count + " channel")
    });

	// The server object will be then used to listen to a port number
	return server;
}

module.exports = init;
