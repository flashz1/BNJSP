var mongoose = require('mongoose'),
    config   = require('../config');

mongoose.connect(config.get("db:url") + config.get("db:dbName"), config.get("db:options"));
global.db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));