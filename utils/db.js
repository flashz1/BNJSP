var mongoose = require('mongoose'),
    log = require('./log.js')(module),
    config   = require('../config');

mongoose.connect(config.get("db:url") + config.get("db:dbName"), config.get("db:options"), function(err){
    if (err) throw log(err);
    console.log('Connected to DB ' + config.get('db:dbName'));
});
global.db = mongoose.connection;