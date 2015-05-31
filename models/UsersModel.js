var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usersSchema = new Schema({
    name: String
});

var UsersModel = mongoose.model('users', usersSchema);

module.exports = UsersModel;