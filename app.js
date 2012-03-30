//Module dependencies.
var express = require('express')
    , redis = require('redis');

var app = module.exports = express.createServer();

//Config
require('./config/environment.js')(app, express);

//Routes
require('./config/routes.js')(app);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
