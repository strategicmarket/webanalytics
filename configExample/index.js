'use strict';

//////////////////////////////////////////////////////////////////////////
/////////////////       server configs             //////////////////////
////////////////////////////////////////////////////////////////////////

exports.port = process.env.PORT || 3000
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`
exports.init = function(){return require('./config.json')}
exports.error = function(){return require('./error.json')}
exports.platform = function(){return require('./platform.json')}
